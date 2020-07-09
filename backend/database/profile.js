const db = require("./connection");

module.exports = class Profile {
  static saveProfile(
    email,
    fullName,
    addressOne,
    addressTwo,
    city,
    state,
    zip
  ) {
    return db.execute(
      "INSERT INTO profile \
       (email,fullName,addressOne,addressTwo,city,state,zip) VALUES (?,?,?,?,?,?,?,?)",
      [email, fullName, addressOne, addressTwo, city, state, zip]
    );
  }
  static createProfileTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS profile (userId int auto_increment primary key,\
          email varchar(255) not null,\
            fullname varchar(255) not null ,\
              addressone varchar(255) not null,\
                addresstwo varchar(255) not null,\
                  city varchar(255) not null,\
                    state varchar(255) not null,\
                        zip varchar(255) not null)"
    );
  }
  static findProfileByEmail(email) {
    return db.execute(
      "SELECT fullname, addressone, addresstwo, city, state, zip FROM profile WHERE email = ?",
      [email]
    );
  }
  static fetchAllProfiles() {
    return db.execute("SELECT * FROM profile");
  }
};
