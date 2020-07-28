const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const { userData } = require("../utils/testingData");

chai.should();
chai.use(chaiHttp);

// data to use for tests
let token;
let defaultUser = JSON.parse(JSON.stringify(userData));

// test protection Auth Guard
describe("Testing Protection Guard", () => {
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
      .post("/fuelform/get")
      .set("Authorization", "Bearer " + token)
      .send({ email: defaultUser.email })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("it should Send Error without Auth Header Token", (done) => {
    chai
      .request(app)
      .post("/fuelform/get")
      .send({ email: defaultUser.email })
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });

  it("it should Send Error without valid Auth Header Token", (done) => {
    chai
      .request(app)
      .post("/fuelform/get")
      .set("Authorization", "Bearer " + "invalid")
      .send({ email: defaultUser.email })
      .end((err, res) => {
        res.body.should.have.property("error");
        done();
      });
  });
});
