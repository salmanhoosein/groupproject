const mysql = require("mysql2");

let salmanPassword = "Sal1998!";
//zain Password:
//edwin Password:
//nathan Password:
let usingPassword = salmanPassword;
let configs = {
  host: "localhost",
  user: "root",
  password: usingPassword,
};

const pool = mysql.createPool(configs);

module.exports = pool.promise();
