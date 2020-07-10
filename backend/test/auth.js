const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const db = require("../database/connection");
const { userData } = require("../utils/testingData");
chai.should();
chai.use(chaiHttp);

// data to use for tests
let newUser = JSON.parse(JSON.stringify(userData));

//test authentication routes
describe("Testing Auth Routes", () => {
  //connect to database
  before((done) => {
    db.query("USE 4353testing")
      .then((res) => done())
      .catch((err) => console.log(err));
  });

  describe("Auth Validations", () => {
    it("it should NOT ADD a user without valid email field", (done) => {
      let noEmail = JSON.parse(JSON.stringify(newUser));
      noEmail.email = null;
      chai
        .request(app)
        .post("/auth/register")
        .send(noEmail)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a user without valid password field", (done) => {
      let noPass = JSON.parse(JSON.stringify(newUser));
      noPass.password = null;
      chai
        .request(app)
        .post("/auth/register")
        .send(noPass)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });

    it("it should NOT LOGIN user without valid email field", (done) => {
      let noEmail = JSON.parse(JSON.stringify(newUser));
      noEmail.email = null;
      chai
        .request(app)
        .post("/auth/login")
        .send(noEmail)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT LOGIN user without valid password field", (done) => {
      let noPass = JSON.parse(JSON.stringify(newUser));
      noPass.password = null;
      chai
        .request(app)
        .post("/auth/login")
        .send(noPass)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
  });
  describe("Auth Database/Controllers", () => {
    it("It should register a new valid user", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send(newUser)
        .end(function (err, res) {
          if (res.body.error) {
            console.log("email already exists! change in utils/testingData.js");
            res.body.should.have.property("success");
            res.should.have.status(201);
          } else {
            res.body.should.have.property("success");
            res.should.have.status(201);
          }
          done();
        });
    });
    it("It should NOT register a new duplicate user email", (done) => {
      chai
        .request(app)
        .post("/auth/register")
        .send(newUser)
        .end(function (err, res) {
          res.body.should.have.property("error");
          done();
        });
    });
    it("It should login valid user in", (done) => {
      chai
        .request(app)
        .post("/auth/login")
        .send(newUser)
        .end(function (err, res) {
          res.should.have.status(200);
          res.body.should.have.property("success");
          done();
        });
    });
  });
});
