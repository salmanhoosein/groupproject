const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();
chai.use(chaiHttp);

// data to use for tests
let defaultUser = {
  email: "user123@gmail.com",
  password: "password123",
};

let fuelForm = {
  gallonsRequested: 99,
  deliveryAddress: "1234 Test Address",
  deliveryDate: "7/03/2020",
  amountDue: 12312,
  price: 1,
};

// test fuelform  routes
describe("Testing FuelForm Routes", () => {
  //get authGuard token for each request
  beforeEach((done) => {
    chai
      .request(app)
      .post("/auth/login")
      .send(defaultUser)
      .end((err, res) => {
        token = res.body.token;
        res.should.have.status(200);
        done();
      });
  });
  describe("FuelForm Auth Guard", () => {
    it("it should NOT GET the fuelforms without Auth Header Token", (done) => {
      chai
        .request(app)
        .post("/fuelform/get")
        .send(defaultUser.email)
        .end((err, res) => {
          fuelForm.userId = res.body.userId;
          fuelForm.email = res.body.email;
          res.body.should.have.property("error");
          done();
        });
    });

    it("it should NOT ADD a fuelform without Auth Header Token", (done) => {
      chai
        .request(app)
        .post("/fuelform/add")
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
  });

  describe("FuelForm Validations", () => {
    it("it should NOT ADD a fuelform without valid gallonsRequested field", (done) => {
      let noGal = JSON.parse(JSON.stringify(fuelForm));
      noGal.gallonsRequested = -1;
      chai
        .request(app)
        .post("/fuelform/add")
        .set("Authorization", "Bearer " + token)
        .send(noGal)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });

    it("it should NOT ADD a fuelform without valid deliveryAddress field", (done) => {
      let noDelAddr = JSON.parse(JSON.stringify(fuelForm));
      noDelAddr.deliveryAddress = null;
      chai
        .request(app)
        .post("/fuelform/add")
        .set("Authorization", "Bearer " + token)
        .send(noDelAddr)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a fuelform without valid deliveryDate field", (done) => {
      let noDelDate = JSON.parse(JSON.stringify(fuelForm));
      noDelDate.deliveryDate = null;
      chai
        .request(app)
        .post("/fuelform/add")
        .set("Authorization", "Bearer " + token)
        .send(noDelDate)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a fuelform without valid price field", (done) => {
      let noPrice = JSON.parse(JSON.stringify(fuelForm));
      noPrice.price = null;
      chai
        .request(app)
        .post("/fuelform/add")
        .set("Authorization", "Bearer " + token)
        .send(noPrice)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a fuelform without valid amountDue field", (done) => {
      let noAmountDue = JSON.parse(JSON.stringify(fuelForm));
      noAmountDue.amountDue = -2;
      chai
        .request(app)
        .post("/fuelform/add")
        .set("Authorization", "Bearer " + token)
        .send(noAmountDue)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
  });

  describe("FuelForm Database/Controllers", () => {
    it("it should get the fuelforms for the user", (done) => {
      chai
        .request(app)
        .post("/fuelform/get")
        .set("Authorization", "Bearer " + token)
        .send(defaultUser.email)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it("it should add a valid fuelform", (done) => {
      chai
        .request(app)
        .post("/fuelform/add")
        .set("Authorization", "Bearer " + token)
        .send(fuelForm)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
});
