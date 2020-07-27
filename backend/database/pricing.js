const db = require("./connection");

module.exports = class Pricing {

    static checkState(email,userid){

        return db.execute("SELECT state FROM profile WHERE userid = ? AND email = ?",
        [userid,email]);
    }

    static checkHistory(email,userid){

        return db.execute("SELECT count(*) FROM fuelform WHERE userid = ? AND email = ?",
        [userid,email]);

    }


  
};
