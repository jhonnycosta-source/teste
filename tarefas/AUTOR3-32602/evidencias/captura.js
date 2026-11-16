const { chromium } = require('playwright');
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUT = process.argv[2];
const DB = 'AUTO_COTACAO_PREMIO_TEST';
const COLL = 'PREMIO_INFORMADO';
const CHROME = 'C:\\Users\\jhonnyscerni\\AppData\\Local\\ms-playwright\\chromium-1254\\chrome-win64\\chrome.exe';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = m => console.log(new Date().toISOString(), m);

function sh(cmd) { try { return execSync(cmd, { encoding: 'utf8' }).trim(); } catch { return ''; } }

(async () => {
  let id = '';
  for (let i = 0; i < 600 && !id; i++) {
    id = sh('docker ps --filter ancestor=mongo:7.0 --format "{{.ID}}"').split('\n')[0];
    if (!id) await sleep(500);
  }
  if (!id) { log('container mongo nao apareceu'); process.exit(2); }
  const port = sh(`docker port ${id} 27017`).split('\n')[0].split(':').pop();
  log(`container ${id} porta ${port}`);

  sh('docker rm -f sv-mongo-express');
  sh(`docker run -d --restart unless-stopped --name sv-mongo-express -p 8091:8081 -e ME_CONFIG_MONGODB_URL="mongodb://host.docker.internal:${port}/?directConnection=true" -e ME_CONFIG_BASICAUTH=false mongo-express:latest`);

  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  for (let i = 0; i < 120; i++) {
    try { const r = await page.goto('http://localhost:8091/', { timeout: 3000 }); if (r && r.ok()) break; } catch {}
    await sleep(1000);
  }
  log('mongo-express pronto');

  const loop = `
    const d = db.getSiblingDB('${DB}');
    for (let i = 0; i < 6000; i++) {
      const doc = d.${COLL}.findOne({ situacao: 'APLICADA', situacao_oferta: 'ATIVA' });
      if (doc) { print('DOC=' + EJSON.stringify(doc, null, 2).replace(/\\n/g, '\\\\n')); break; }
      sleep(100);
    }`;
  const proc = spawn('docker', ['exec', '-i', id, 'mongosh', '--quiet', '--eval', loop]);
  let buf = '';
  let feito = false;
  proc.stdout.on('data', async chunk => {
    buf += chunk.toString();
    const m = buf.match(/DOC=(.*)/);
    if (!m || feito) return;
    feito = true;
    const json = m[1].replace(/\\n/g, '\n');
    fs.writeFileSync(path.join(OUT, 'mongo-premio-informado-cadastro.json'), json);
    log('documento capturado');
    const oid = JSON.parse(json)._id.$oid;
    try {
      await page.goto(`http://localhost:8091/db/${DB}/${COLL}/%22${oid}%22`, { timeout: 5000 });
      await page.screenshot({ path: path.join(OUT, 'print-01-mongo-documento-cadastrado.png'), fullPage: true });
      log('print documento ok');
      await page.goto(`http://localhost:8091/db/${DB}/${COLL}`, { timeout: 5000 });
      await page.screenshot({ path: path.join(OUT, 'print-02-mongo-collection-premio-informado.png'), fullPage: true });
      log('print collection ok');
    } catch (e) { log('falha no print: ' + e.message); }
    await browser.close();
    sh('docker rm -f sv-mongo-express');
    process.exit(0);
  });
  proc.on('exit', async () => { if (!feito) { log('mongosh terminou sem documento'); await browser.close(); sh('docker rm -f sv-mongo-express'); process.exit(3); } });
})();
