const db = require("./connection");

module.exports = class Pricing {
  constructor(margin,currentPrice,location,rateHistory,gallonRequested,suggestedPrice,total,profit) {
    this.margin = margin;
    this.currentPrice = currentPrice;
    this.location = location;
    this.rateHistory = rateHistory;
    this.gallonRequested = gallonRequested;
    this.suggestedPrice = suggestedPrice;
    this.profit = profit;
    this.total = total;
  }

  save() {
    return db.execute();
  }

  static createProfileTable() {
    return db.execute();
  }
 
  static fetchAll() {
    return db.execute("SELECT * FROM profiles");
  }
};
