const db = require("./connection");

module.exports = class User {
  static saveUser(email, hashedPassword) {
    return db.execute("INSERT INTO users (email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);
  }
  static createUserTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS users (id int auto_increment primary key, \
          email varchar(255) not null,\
            password varchar(255) not null) "
    );
  }
  static findUserByEmail(email) {
    return db.execute("SELECT * FROM users WHERE email = ?", [email]);
  }
};
