const db = require("./connection");

module.exports = class FuelForm {
  static saveFuelform(
    userId,
    email,
    gallonsRequested,
    deliveryAddress,
    deliveryDate,
    price,
    amountDue
  ) {
    return db.execute(
      "INSERT INTO fuelform (userId, email, gallonsRequested,\
        deliveryAddress,deliveryDate,price,amountDue) VALUES (?,?,?,?,?,?,?)",
      [
        userId,
        email,
        gallonsRequested,
        deliveryAddress,
        deliveryDate,
        price,
        amountDue,
      ]
    );
  }

  static createFuelFormsTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS fuelform ( userId INT, \
          email VARCHAR(255) NOT NULL,\
            gallonsRequested INT NOT NULL,\
             deliveryAddress VARCHAR(255) NOT NULL,\
               deliveryDate VARCHAR(255) NOT NULL, \
                  price DECIMAL(65,3) NOT NULL, \
                    amountDue DECIMAL(65,2) NOT NULL)"
    );
  }
  static findFuelFormsByEmail(email) {
    return db.execute("SELECT * FROM fuelform WHERE email = ?", [email]);
  }
};
