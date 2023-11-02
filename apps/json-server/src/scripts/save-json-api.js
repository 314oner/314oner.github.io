import fs from 'node-fs'
import getDb from '../db/index.js';
const db = getDb();
fs.mkdir('../db', () => {
    for (let [key, value] of Object.entries(db)) {
        fs.writeFile(`../db/${key}.json`, JSON.stringify(value), (err) => {
            if (err)
                throw err;
        });
    }
});
