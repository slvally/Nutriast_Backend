import { Sequelize } from "sequelize";

const db = new Sequelize('nutriast', 'root', 'nutriastapi28', {
  host: '34.101.200.2',
  dialect: 'mysql'
});

// Sinkron table pada db dari model
/* db.sync({alter: true})
  .then(() => {
    console.log('Tabel berhasil di sinkronisasi');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  }); */

export default db;
