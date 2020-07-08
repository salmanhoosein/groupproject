const db = require("./connection");

module.exports = class FuelForm {
  static saveFuelform() {
    return db.execute();
  }
  static createFuelFormsTable() {
    return db.execute();
  }
  static findFuelFormsByEmail() {
    return db.execute();
  }
  static fetchAllFuelForms() {
    return db.execute();
  }
};
