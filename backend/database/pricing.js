const db = require("./connection");

module.exports = class Pricing {
  static checkState(email, userId) {
    return db.execute(
      "SELECT state FROM profile WHERE userId = ? AND email = ?",
      [userId, email]
    );
  }

  static checkHistory(email, userId) {
    return db.execute(
      "SELECT count(*) FROM fuelform WHERE userId = ? AND email = ?",
      [userId, email]
    );
  }
};
