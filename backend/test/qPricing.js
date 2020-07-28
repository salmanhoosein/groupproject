const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const db = require("../database/connection");
const { userData, pricingData } = require("../utils/testingData");

chai.should();
chai.use(chaiHttp);

// data to use for tests
let token;
let defaultUser = JSON.parse(JSON.stringify(userData));
let pricingForm = JSON.parse(JSON.stringify(pricingData));

// test Pricing  routes
describe("Testing Pricing Routes", () => {
  //connect to database
  before((done) => {
    db.query("USE 4353testing")
      .then((res) => done())
      .catch((err) => console.log(err));
  });

  //get authGuard token for each request
  beforeEach((done) => {
    chai
      .request(app)
      .post("/auth/login")
      .send(defaultUser)
      .end((err, res) => {
        token = res.body.token;
        pricingForm.userId = res.body.userId;
        pricingForm.email = res.body.email;
        res.should.have.status(200);
        done();
      });
  });

  describe("Pricing Auth Guard", () => {
    it("it should NOT GET the price and amount due without Auth Header Token", (done) => {
      chai
        .request(app)
        .post("/pricing/get")
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
  });

  describe("Pricing Validations", () => {
    it("it should GET the price and amount due with valid data", (done) => {
      chai
        .request(app)
        .post("/pricing/get")
        .set("Authorization", "Bearer " + token)
        .send(pricingForm)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("success");
          done();
        });
    });

    it("it should NOT GET the price and amount due without valid gallonsRequested field", (done) => {
      let noGal = JSON.parse(JSON.stringify(pricingForm));
      noGal.gallonsRequested = null;
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

    it("it should NOT GET the price and amount due without valid deliveryAddress field", (done) => {
      let noDelAddr = JSON.parse(JSON.stringify(pricingForm));
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
    it("it should NOT GET the price and amount due without valid deliveryDate field", (done) => {
      let noDelDate = JSON.parse(JSON.stringify(pricingForm));
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
});
