const db = require("./connection");

module.exports = class User {
  static saveUser() {
    return db.execute();
  }

  static createUserTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS user (id int auto_increment primary key, \
          email varchar(255) not null,\
            password varchar(255) not null) "
    );
  }
  static findUserByEmail() {
    return db.execute();
  }
  static fetchAllUsers() {
    return db.execute("SELECT * FROM USER");
  }
  
};
