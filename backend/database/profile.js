const db = require("./connection");

module.exports = class Profile {
  static saveProfile() {
    return db.execute();
  }
  static createProfileTable() {
    return db.execute();
  }
  static findProfileByEmail() {
    return db.execute();
  }
  static fetchAllProfiles() {
    return db.execute();
  }
};
