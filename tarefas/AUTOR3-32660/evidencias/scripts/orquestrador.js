const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const OUT = process.argv[2];
const FILA = 'exec-descarte-recalculo-cota-premio-informado-v1-queue';
const log = (m) => { const l = `[${new Date().toISOString()}] ${m}`; console.log(l); fs.appendFileSync(path.join(OUT, 'orquestrador.log'), l + '\n'); };
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const parar = () => fs.existsSync(path.join(OUT, 'PARAR'));

function containers(imagem) {
  const out = execSync(`docker ps --filter ancestor=${imagem} --format "{{.ID}}|{{.Ports}}|{{.Names}}"`).toString().trim();
  return out ? out.split('\n').map(l => l.split('|')) : [];
}
function porta(ports, interna) {
  const m = ports.match(new RegExp('0\\.0\\.0\\.0:(\\d+)->' + interna + '/tcp'));
  return m ? m[1] : null;
}

async function printsRabbit(mgmt, prefixo) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  const base = `http://localhost:${mgmt}`;
  await page.goto(base);
  await page.fill('input[name="username"]', 'guest');
  await page.fill('input[name="password"]', 'guest');
  await page.click('input[type="submit"]');
  await page.waitForSelector('#logout', { timeout: 15000 });
  for (const [nome, url] of [['overview', '/#/'], ['filas', '/#/queues'], ['fila-descarte-recalculo', `/#/queues/%2F/${FILA}`]]) {
    await page.goto(base + url);
    await page.waitForTimeout(3500);
    const arq = path.join(OUT, `${prefixo}-${nome}.png`);
    await page.screenshot({ path: arq, fullPage: true });
    log(`print ${arq}`);
  }
  await browser.close();
}

async function apiRabbit(mgmt, arquivo) {
  const r = await fetch(`http://localhost:${mgmt}/api/queues/%2F/${FILA}`, {
    headers: { Authorization: 'Basic ' + Buffer.from('guest:guest').toString('base64') },
  });
  fs.writeFileSync(path.join(OUT, arquivo), JSON.stringify(await r.json(), null, 2));
  log(`api ${arquivo} status ${r.status}`);
}

const pollers = {};
let disparado = false;
let mgmtDisparo = null;

function mongoPronto(id) {
  try { execSync(`docker exec ${id} mongosh --quiet --eval "db.runCommand({ping:1}).ok"`, { stdio: 'pipe' }); return true; } catch (e) { return false; }
}

function subirMongoExpress(mongoPorta) {
  try { execSync('docker rm -f sv-mongo-express', { stdio: 'pipe' }); } catch (e) {}
  execSync(`docker run -d --name sv-mongo-express --restart unless-stopped -p 8091:8081 -e ME_CONFIG_MONGODB_URL="mongodb://host.docker.internal:${mongoPorta}/?directConnection=true" -e ME_CONFIG_BASICAUTH=false mongo-express:latest`, { stdio: 'pipe' });
  log(`mongo-express subindo em 8091 -> mongo ${mongoPorta}`);
}

async function printsMongo(snapId, dbTeste) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  const alvos = [
    ['print-mongo-snapshot-descarte', `http://localhost:8091/db/EVIDENCIA_AUTOR3_32660/snapshots/%22${snapId}%22`],
    ['print-mongo-colecao-premio-informado', `http://localhost:8091/db/${dbTeste}/PREMIO_INFORMADO`],
  ];
  for (const [nome, url] of alvos) {
    try {
      await page.goto(url, { timeout: 10000 });
      await page.waitForTimeout(800);
      const arq = path.join(OUT, `${nome}.png`);
      await page.screenshot({ path: arq, fullPage: true });
      log(`print ${arq}`);
    } catch (e) { log(`ERRO print ${nome}: ${e.message}`); }
  }
  await browser.close();
}

async function anexarPoller(c) {
  const [id, ports, nome] = c;
  pollers[id] = { p: { kill() {} }, saida: { end() {} } };
  log(`mongo ${nome} ${id} porta=${porta(ports, 27017)}`);
  try { subirMongoExpress(porta(ports, 27017)); } catch (e) { log('ERRO mongo-express ' + e.message); }
  while (!mongoPronto(id)) await sleep(500);
  log('mongo pronto');
  try { execSync(`docker cp "${path.join(__dirname, 'poll.js')}" ${id}:/tmp/poll.js`); } catch (e) { log('ERRO cp ' + e.message); return; }
  const p = spawn('docker', ['exec', id, 'mongosh', '--quiet', '/tmp/poll.js']);
  const saida = fs.createWriteStream(path.join(OUT, `mongo-snapshots-${nome}.log`));
  let buffer = '';
  p.stdout.on('data', async (d) => {
    saida.write(d);
    buffer += d.toString();
    const linha = buffer.split(/\r?\n/).find(l => l.includes('F0123456') && l.includes('"RECALCULO"'));
    if (!disparado && linha) {
      disparado = true;
      const partes = linha.split(' ');
      printsMongo(partes[3], partes[2]).catch(e => log('ERRO prints mongo: ' + e.message));
      const r = containers('rabbitmq:3.11-management')[0];
      mgmtDisparo = porta(r[1], 15672);
      fs.writeFileSync(path.join(OUT, 'containers.json'), JSON.stringify({ mongo: c, mongoPorta: porta(ports, 27017), rabbit: r, mgmt: mgmtDisparo, amqp: porta(r[1], 5672) }, null, 2));
      log(`descarte RECALCULO detectado em ${nome}; rabbit ${r[2]} mgmt=${mgmtDisparo}`);
      try {
        await sleep(3000);
        await apiRabbit(mgmtDisparo, 'rabbit-fila-apos-descarte.json');
        await printsRabbit(mgmtDisparo, 'print-rabbit');
      } catch (e) { log('ERRO prints: ' + e.stack); }
    }
  });
  p.stderr.on('data', (d) => saida.write(d));
  pollers[id] = { p, saida };
}

(async () => {
  log('orquestrador iniciado');
  while (!parar()) {
    for (const c of containers('mongo:7.0')) if (!pollers[c[0]]) anexarPoller(c);
    await sleep(1000);
  }
  if (mgmtDisparo) { try { await apiRabbit(mgmtDisparo, 'rabbit-fila-final.json'); } catch (e) { log('ERRO api final: ' + e.message); } }
  for (const { p, saida } of Object.values(pollers)) { p.kill(); saida.end(); }
  log('fim');
  process.exit(0);
})();
