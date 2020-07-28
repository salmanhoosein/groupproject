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

  //connect to database
  before((done) => {
    db.execute("SELECT userId FROM profile WHERE email = ?", [
      pricingForm.email,
    ])
      .then((res) => {
        pricingForm.userId = res[0][0].userId;
        done();
      })
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
        res.should.have.status(200);
        done();
      });
  });

  describe("Pricing Auth Guard", () => {
    it("it should NOT GET the pricing without Auth Header Token", (done) => {
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
    it("it should GET the pricing with valid data", (done) => {
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

    it("it should NOT GET the pricing without valid gallonsRequested field", (done) => {
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

    it("it should NOT GET the pricing without valid deliveryAddress field", (done) => {
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
    it("it should NOT GET the pricing without valid deliveryDate field", (done) => {
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
