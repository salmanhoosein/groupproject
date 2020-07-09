const db = require("./connection");

module.exports = class Profile {
  static saveProfile(fullName, addressOne, addressTwo, city, state, zip) {
    return db.execute(
        'INSERT INTO profile (fullName,addressOne,addressTwo,city,state,zip) VALUES (?,?,?,?,?,?)',[
            fullName,
            addressOne,
            addressTwo,
            city,
            state,
            zip,
        ]);
  }
  static createProfileTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS profile (fullname varchar(255) not null ,\
             addressone varchar(255) not null,\
               addresstwo varchar(255) not null,\
                 city varchar(255) not null,\
                   state varchar(255) not null,\
                      zip varchar(255) not null)"
                        


    );
  }
  static findProfileByEmail() {
     return db.execute("SELECT * FROM profile WHERE email = ?", [email]);
  }
  static fetchAllProfiles() {
    return db.execute("SELECT * FROM profile");
  }
};
