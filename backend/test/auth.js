const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();
chai.use(chaiHttp);

// data to use for tests
let newUser = {
  email: "user123@gmail.com",
  password: "password123",
};

//test authentication routes
describe("Testing Auth Routes", () => {
  it("It should register a new valid user", (done) => {
    chai
      .request(app)
      .post("/auth/register")
      .send(newUser)
      .end(function (err, res) {
        res.should.have.status(201);
        res.body.should.have.property("success");
        done();
      });
  });
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
