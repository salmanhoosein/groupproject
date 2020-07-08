const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

let token;
// data to use for tests
let defaultUser = {
  email: "user123@gmail.com",
  password: "password123",
};

let profile = {
  fullName: "John Doe",
  addressOne: "321 St",
  addressTwo: "123",
  city: "Houston",
  state: "TX",
  zip: "12345",
  email: defaultUser.email,
};

describe("Testing Profile Routes ", () => {
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
  describe("Profile Auth Guard", () => {
    it("it should NOT GET the profiles without Auth Header Token", (done) => {
      chai
        .request(app)
        .post("/profile/get")
        .send(defaultUser.email)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });

    it("it should NOT ADD a profile without Auth Header Token", (done) => {
      chai
        .request(app)
        .post("/profile/add")
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
  });
  describe("Profile  Validations", () => {
    it("it should  ADD a profile without valid address Two", (done) => {
      let noAddrTwo = JSON.parse(JSON.stringify(profile));
      noAddrTwo.addressTwo = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(noAddrTwo)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property("success");
          done();
        });
    });
    it("it should NOT ADD a profile without valid zip field", (done) => {
      let noZip = JSON.parse(JSON.stringify(profile));
      noZip.zip = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(noZip)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a profile without valid fullName field", (done) => {
      let noFullName = JSON.parse(JSON.stringify(profile));
      noFullName.fullName = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(noFullName)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a profile without valid addressOne field", (done) => {
      let noAO = JSON.parse(JSON.stringify(profile));
      noAO.addressOne = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(noAO)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a profile without valid state field", (done) => {
      let noState = JSON.parse(JSON.stringify(profile));
      noState.state = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(noState)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
    it("it should NOT ADD a profile without valid city field", (done) => {
      let noCity = JSON.parse(JSON.stringify(profile));
      noCity.city = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(noCity)
        .end((err, res) => {
          res.body.should.have.property("error");
          done();
        });
    });
  });

  describe("Profile Database/Controllers", () => {
    it("it should create a new valid profile", (done) => {
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(profile)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property("success");
          done();
        });
    });
    it("it should get the profile for the user", (done) => {
      chai
        .request(app)
        .post("/profile/get")
        .set("Authorization", "Bearer " + token)
        .send(defaultUser.email)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("success");
          done();
        });
    });
  });
});
