const db = require("./connection");

module.exports = class FuelForm {
  constructor(
    gallonsRequested,
    deliveryAddress,
    deliveryDate,
    price,
    amountDue
  ) {
    this.gallonsRequested = gallonsRequested;
    this.deliveryAddress = deliveryAddress;
    this.deliveryDate = deliveryDate;
    this.price = price;
    this.amountDue = amountDue;
  }

  save() {
    return db.execute();
  }

  static createFuelQuoteTable() {
    return db.execute();
  }
  static findByName() {
    return db.execute();
  }
  static fetchAll() {
    return db.execute("SELECT * FROM FuelQuotes");
  }
};
