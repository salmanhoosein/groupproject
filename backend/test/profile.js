const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const db = require("../database/connection");
const { userData, profileData } = require("../utils/testingData");

chai.should();
chai.use(chaiHttp);
const expect = chai.expect;

// data to use for tests
let token;
let defaultUser = JSON.parse(JSON.stringify(userData));
let profile = JSON.parse(JSON.stringify(profileData));

describe("Testing Profile Routes ", () => {
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
        profile.userId = res.body.userId;
        profile.email = res.body.email;
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
          expect(res.body.success).to.equal("Profile added/updated SUCCESS");
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
        .send({ email: profile.email })
        .end((err, res) => {
          expect(res.body.profile).to.be.an("object");
          expect(res.body.profile).to.include({ email: profile.email });
          res.should.have.status(200);
          res.body.should.have.property("success");
          res.body.should.have.property("profile");
          done();
        });
    });
    it("it should update pre-existing profile", (done) => {
      let updatedProfile = JSON.parse(JSON.stringify(profile));
      updatedProfile.city = "houston";
      updatedProfile.fullName = "jane doe";
      updatedProfile.addressTwo = null;
      chai
        .request(app)
        .post("/profile/add")
        .set("Authorization", "Bearer " + token)
        .send(updatedProfile)
        .end((err, res) => {
          expect(res.body.success).to.equal("Profile added/updated SUCCESS");
          res.should.have.status(201);
          res.body.should.have.property("success");
          done();
        });
    });
  });
});
