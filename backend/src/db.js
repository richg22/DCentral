const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('personas.db'); // Cambié el nombre por claridad

db.serialize(() => {
  // Crear tabla tramos
  db.run(`
    CREATE TABLE IF NOT EXISTS tramos (
      id INTEGER PRIMARY KEY,
      tramo TEXT NOT NULL,
      descuento INTEGER NOT NULL
    );
  `);

  // Crear tabla personas
  db.run(`
    CREATE TABLE IF NOT EXISTS personas (
      rut TEXT PRIMARY KEY,
      p_nombre TEXT NOT NULL,
      s_nombre TEXT,
      ap_paterno TEXT NOT NULL,
      ap_materno TEXT NOT NULL,
      edad INTEGER,
      telefono TEXT NOT NULL,
      correo TEXT NOT NULL,
      direccion TEXT NOT NULL,
      sueldo DECIMAL(10),
      id_tramo INTEGER,
      FOREIGN KEY (id_tramo) REFERENCES tramos(id)
    );
  `);
});

module.exports = db;
