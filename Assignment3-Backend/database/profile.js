const db = require("../utils/db");

module.exports = class Profile {
  constructor(fullName, addressOne, addressTwo, city, state, zip) {
    this.fullName = fullName;
    this.addressOne = addressOne;
    this.addressTwo = addressTwo;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  save() {
    return db.execute();
  }

  static createProfileTable() {
    return db.execute();
  }
  static findByName(fullName) {
    return db.execute();
  }
  static fetchAll() {
    return db.execute("SELECT * FROM profiles");
  }
};
