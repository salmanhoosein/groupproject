const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const db = require("../database/connection");
const { userData, fuelFormData } = require("../utils/testingData");
chai.should();
chai.use(chaiHttp);
const expect = chai.expect;

// data to use for tests
let token;
let defaultUser = JSON.parse(JSON.stringify(userData));
let fuelForm = JSON.parse(JSON.stringify(fuelFormData));

// test fuelform  routes
describe("Testing FuelForm Routes", () => {
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
        fuelForm.userId = res.body.userId;
        fuelForm.email = res.body.email;
        res.should.have.status(200);
        done();
      });
  });

  describe("FuelForm Auth Guard", () => {
    it("it should NOT GET the fuelforms without Auth Header Token", (done) => {
      chai
        .request(app)
        .post("/fuelform/get")
        .send({ email: fuelForm.email })
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
      noAmountDue.amountDue = null;
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
    //add 3 fuelforms for the user
    for (let index = 0; index < 3; index++) {
      it("it should add a valid fuelform", (done) => {
        chai
          .request(app)
          .post("/fuelform/add")
          .set("Authorization", "Bearer " + token)
          .send(fuelForm)
          .end((err, res) => {
            res.body.should.have.property("success");
            expect(res.body.success).to.equal("Fuel quote added successfully!");
            res.should.have.status(201);
            done();
          });
      });
    }
    it("it should get the fuelforms for the user", (done) => {
      chai
        .request(app)
        .post("/fuelform/get")
        .set("Authorization", "Bearer " + token)
        .send({ email: fuelForm.email })
        .end((err, res) => {
          res.body.should.have.property("success");
          res.body.should.have.property("quotes");
          expect(res.body.quotes).to.be.an("array");
          expect(res.body.quotes[0]).to.include({ email: fuelForm.email });
          res.should.have.status(200);
          done();
        });
    });
  });
});
