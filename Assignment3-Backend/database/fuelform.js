const db = require("./connection");

module.exports = class FuelForm {
  constructor(gallonsRequested, deliveryAddress, deliveryDate,price,state, amountDue) {
    this.gallonsRequested = gallonsRequested;
    this.deliveryAddress = deliveryAddress;
    this.deliveryDate = deliveryDate;
    this.price = price;
    this.state = state;
    this.amountDue = amountDue;
  }

  save() {
    return db.execute();
  }

  static createFuelQuoteTable() {
    return db.execute();
  }
  static findByName(fullName) {
    return db.execute();
  }
  static fetchAll() {
    return db.execute("SELECT * FROM FuelQuotes");
  }
};
