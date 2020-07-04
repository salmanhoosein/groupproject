const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "4353Project",
  password: "Sal1998!",
});

module.exports = pool.promise();
