const mysql = require("mysql2");

// UPDATE with your mysql password
let salmanPassword = "Sal1998!";
let zainPassword = "zain1234";
let edwinPassword = "Edwin1335";
let nathanPassword = "Meepbo9970779!";
// let taPassword = null;

const pool = mysql.createPool(
  (configs = {
    host: "localhost",
    user: "root",
    password: salmanPassword,
  })
);

module.exports = pool.promise();
