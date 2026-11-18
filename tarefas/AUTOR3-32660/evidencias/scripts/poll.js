const evidencia = db.getSiblingDB('EVIDENCIA_AUTOR3_32660');
let ultimo = {};
const fim = Date.now() + 40 * 60 * 1000;
while (Date.now() < fim) {
  try {
    const dbs = db.adminCommand({ listDatabases: 1, nameOnly: true }).databases.map(d => d.name)
      .filter(n => !['admin', 'local', 'config', 'EVIDENCIA_AUTOR3_32660'].includes(n));
    for (const nome of dbs) {
      const docs = db.getSiblingDB(nome).getCollection('PREMIO_INFORMADO').find().sort({ _id: 1 }).toArray();
      const chave = EJSON.stringify(docs);
      if (chave !== ultimo[nome]) {
        ultimo[nome] = chave;
        const agora = new Date();
        let snapId = '-';
        if (docs.length > 0) {
          snapId = evidencia.snapshots.insertOne({ capturado_em: agora, database: nome, collection: 'PREMIO_INFORMADO', documentos: docs }).insertedId.toHexString();
        }
        print('SNAPSHOT ' + agora.toISOString() + ' ' + nome + ' ' + snapId + ' ' + EJSON.stringify(docs, { relaxed: true }));
      }
    }
  } catch (e) {
    print('ERRO ' + e.message);
  }
  sleep(20);
}
