const fs = require('node-fs');
const getDb = require('../src/index.js');

const db = getDb();

fs.mkdir('../build/db', () => {
  for (let [key, value] of Object.entries(db)) {
    fs.writeFile(`../build/db/${key}.json`, JSON.stringify(value), (err) => {
      if (err) throw err;
    });
  }
});
