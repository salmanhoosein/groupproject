const db = require("./connection");

module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  save() {
    return db.execute();
  }

  static createUserTable() {
    return db.execute();
  }
  static fetchAll() {
    return db.execute("SELECT * FROM profile");
  }
  static findByEmail(email) {
    return db.execute();
  }
};
