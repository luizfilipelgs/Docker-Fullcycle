import express from 'express';
const app = express();

const PORT = 3000;

const config = {
  host   : 'db',
  user   :  'root',
  password : 'root',
  database : 'nodedb'
};

import { createConnection } from 'mysql2/promise';
const connection = await createConnection(config);

const listName = ['luiz', 'Filipe', 'Wesley', 'Lucian']
const firstNameIdRandom = Math.floor(Math.random() * listName.length);
const secondNameIdRandom = Math.floor(Math.random() * listName.length);

const firstName = listName[firstNameIdRandom];
const secondName = listName[secondNameIdRandom];

const INSERT_NAME_SQL = `INSERT INTO people(name) VALUES(?)`;
const SELECT_NAMES_SQL = `SELECT name FROM people`;
const CREATE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id))`;


app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);

  await connection.query(CREATE_TABLE_SQL);
  await connection.query(INSERT_NAME_SQL, [`${firstName} ${secondName}`]);
});


app.get('/', async (req, res) => {
  const [results] = await connection.query(`SELECT * FROM people`);
  console.log('results:', results);
  res.send(`
    <h1>Full Cycle Rocks!</h1>
  `);
})

{/* <ul>${namesList.map((name) => `<li>${name}</li>`).join('')}</ul> */}