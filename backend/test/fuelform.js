const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const expect = chai.expect;
chai.should();
chai.use(chaiHttp);

// data to use for tests
let defaultUser = {
  email: "user123@gmail.com",
  password: "password123",
};

let fuelForm = {
  gallonsRequested: 99,
  price: 100,
  deliveryAddress: "1234 Test Address",
  deliveryDate: "7/03/2020",
  amountDue: 12312,
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

  it("it should NOT GET the fuelforms without Auth Header Token", (done) => {
    chai
      .request(app)
      .get("/fuelform/get")
      .end((err, res) => {
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

  it("it should get the fuelforms for the user", (done) => {
    chai
      .request(app)
      .get("/fuelform/get")
      .set("Authorization", "Bearer " + token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("it should add a valid fuelform", (done) => {
    chai
      .request(app)
      .post("/fuelform/add")
      .send(fuelForm)
      .set("Authorization", "Bearer " + token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("it should NOT ADD a fuelform without valid gallonsRequested field", (done) => {
    let noGal = JSON.parse(JSON.stringify(fuelForm));
    noGal.gallonsRequested = -1;
    chai
      .request(app)
      .post("/fuelform/add")
      .send(noGal)
      .set("Authorization", "Bearer " + token)
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
      .send(noPrice)
      .set("Authorization", "Bearer " + token)
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
      .send(noDelAddr)
      .set("Authorization", "Bearer " + token)

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
      .send(noDelDate)
      .set("Authorization", "Bearer " + token)

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
      .send(noAmountDue)
      .set("Authorization", "Bearer " + token)
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });
});
