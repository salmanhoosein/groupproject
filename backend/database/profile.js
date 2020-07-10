const db = require("./connection");

module.exports = class Profile {
  static saveProfile(
    userId,
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
       (userId, email,fullName,addressOne,addressTwo,city,state,zip) VALUES (?,?,?,?,?,?,?,?)",
      [userId, email, fullName, addressOne, addressTwo, city, state, zip]
    );
  }
  static createProfileTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS profile (userId INT,\
          email VARCHAR(255) NOT NULL,\
            fullName VARCHAR(255) NOT NULL ,\
              addressOne VARCHAR(255) NOT NULL,\
                addressTwo VARCHAR(255),\
                  city VARCHAR(255) NOT NULL,\
                    state VARCHAR(2) NOT NULL,\
                        zip VARCHAR(9) NOT NULL)"
    );
  }
  static findProfileByEmail(email) {
    return db.execute("SELECT * FROM profile WHERE email = ?", [email]);
  }

  static updateProfileByEmail(
    userId,
    email,
    fullName,
    addressOne,
    addressTwo,
    city,
    state,
    zip
  ) {
    return db.execute(
      "UPDATE profile SET \
         fullName = ?,addressOne = ?,\
          addressTwo = ?,city = ?,state = ?, zip = ?\
            WHERE email = ?",
      [fullName, addressOne, addressTwo, city, state, zip, email]
    );
  }
};
