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
};

// test fuelform  routes
describe("Testing Pricing Routes", () => {
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

  it("it should NOT GET the pricing without Auth Header Token", (done) => {
    chai
      .request(app)
      .post("/pricing/get")
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });

  it("it should GET the pricing with Auth Header Token", (done) => {
    chai
      .request(app)
      .post("/pricing/get")
      .set("Authorization", "Bearer " + token)
      .send(fuelForm)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("success");
        done();
      });
  });

  it("it should GET the pricing with valid data", (done) => {
    chai
      .request(app)
      .post("/pricing/get")
      .set("Authorization", "Bearer " + token)
      .send(fuelForm)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("success");
        done();
      });
  });

  it("it should NOT GET the pricing without valid gallonsRequested field", (done) => {
    let noGal = JSON.parse(JSON.stringify(fuelForm));
    noGal.gallonsRequested = -1;
    chai
      .request(app)
      .post("/pricing/get")
      .set("Authorization", "Bearer " + token)
      .send(noGal)
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });

  it("it should NOT GET the pricing without valid deliveryAddress field", (done) => {
    let noDelAddr = JSON.parse(JSON.stringify(fuelForm));
    noDelAddr.deliveryAddress = null;
    chai
      .request(app)
      .post("/pricing/get")
      .set("Authorization", "Bearer " + token)
      .send(noDelAddr)
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });
  it("it should NOT GET the pricing without valid deliveryDate field", (done) => {
    let noDelDate = JSON.parse(JSON.stringify(fuelForm));
    noDelDate.deliveryDate = null;
    chai
      .request(app)
      .post("/pricing/get")
      .set("Authorization", "Bearer " + token)
      .send(noDelDate)
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });
});
