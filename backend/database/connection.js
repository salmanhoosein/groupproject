const mysql = require("mysql2");

// UPDATE with your mysql password
let salmanPassword = "Meepbo9970779!";
// let zainPassword = null;
// let edwinPassword = null;
// let nathanPassword = null;
// let taPassword = null;

const pool = mysql.createPool(
  (configs = {
    host: "localhost",
    user: "root",
    password: salmanPassword,
  })
);

module.exports = pool.promise();
