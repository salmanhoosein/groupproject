const db = require("./connection");

module.exports = class FuelForm {
  static saveFuelform(
    email,
    gallonsRequested,
    deliveryAddress,
    deliveryDate,
    price,
    amountDue
  ) {
    return db.execute(
      "INSERT INTO fuelform (email,gallonsRequested,\
        deliveryAddress,deliveryDate,price,amountDue) values (?,?,?,?,?,?,?)",
      [email, gallonsRequested, deliveryAddress, deliveryDate, price, amountDue]
    );
  }

  static createFuelFormsTable() {
    return db.execute(
      "CREATE TABLE IF NOT \
        EXISTS fuelform ( userId int auto_increment primary key \
          email VARCHAR(255) NOT NULL,\
            gallonsRequested int not null, deliveryAddress VARCHAR(255) not null,\
               deliveryDate VARCHAR(10) NOT NULL, \
                  price int not null, amountDue int not null)"
    );
  }
  static findFuelFormsByEmail(email) {
    return db.execute("SELECT * fuelform where email = ?", [email]);
  }
  static fetchAllFuelForms() {
    return db.execute("SELECT * from fuelform");
  }
};
