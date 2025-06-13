const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/productos', (req, res) => {
  db.all("SELECT * FROM productos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  db.run("INSERT INTO productos (nombre, precio) VALUES (?, ?)", [nombre, precio], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, nombre, precio });
  });
});

app.listen(3001, () => console.log('Backend corriendo en http://localhost:3001'));
