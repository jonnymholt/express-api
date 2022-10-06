const sql = require('mssql');

const connectionString = process.env.DB_CONN;

const poolPromise = new sql.ConnectionPool(connectionString)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.log('Database Connection Failed! Bad Config: ', err);
    throw err;
  });

  module.exports = {
    poolPromise,
    sql
  }