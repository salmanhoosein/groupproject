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
let token;

// test protection Auth Guard
describe("Testing Protection Auth Guard", () => {
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

  it("it should pass with valid Auth Header Token", (done) => {
    chai
      .request(app)
      .get("/fuelform/get")
      .set("Authorization", "Bearer " + token)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("it should Send Error without Auth Header Token", (done) => {
    chai
      .request(app)
      .get("/fuelform/get")
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });

  it("it should Send Error without valid Auth Header Token", (done) => {
    chai
      .request(app)
      .get("/fuelform/get")
      .set("Authorization", "Bearer " + "invalid")
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });
});
