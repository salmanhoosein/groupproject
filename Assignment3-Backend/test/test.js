const chai = require("chai");
const mocha = require("mocha");
const request = require("request");
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");
const profileModule = require("../database/profile");
const fuelFormModule = require("../database/fuelform");
const userModule = require("../database/user");
const register = require("../controllers/auth")
const userCredentials = {
  email: "user123@gmail.com",
  password: "password123",
};

chai.use(chaiHttp);
let authenticatedUser = chai.request.agent(app);

//login the user before tests
beforeEach(function (done) {
  authenticatedUser
    .post("/auth/login")
    .send(userCredentials)
    .end(function (err, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
});

describe("Testing API ", () => {
  //test authentication and get routes
  describe("GET /profile/get", () => {
    it("should return a 200 response if the user is logged in", function (done) {
      authenticatedUser.get("/").end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });

    it("should return a 404 response if the user is NOT login", function (done) {
      chai
        .request(app)
        .get("/fuelform")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });


       it("It should register a new User", (done)  => {
        const newUser = {
          email: "newuser@gmail.com",
          password: "newpassword",
        };
    chai.request(app)
        .post("/auth/register")
        .end(function (err, response) {
         expect(response.statusCode).to.equal(200);
        done();
    });
    });

    it("it should go to the GET profile page", (done) => {
      authenticatedUser
        .get("/profile/get")

        .end((err, res) => {
          res.should.have.status(200);                
          console.log(res.body.profile.fullName);
          res.body.should.be.a("object");
          expect(res.body.profile.fullName).to.equal("jane doe");
          done();
        });
    });

    it("it should return an INVALID route", (done) => {
      chai
        .request(app)
        .get("/profile")

        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });

   
  });
  // test profile post routes
  describe("/POST ", () => {
    it("it should create a new profile", (done) => {
      let profile = {
        fullName: "John Doe",
        addressOne: "321 St",
        addressTwo: "123",
        city: "Houston",
        state: "TX",
        zip: "77050"
      };
      chai
        .request(app)
        .post("/profile/add")
        .send(profile)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body.success).to.equal("Profile added SUCCESS");

          done();
        });
    });
  });


    it("it should not POST a profile without zip field", (done) => {
      let profile = {
        fullName: "John Doe",
        addressOne: "321 St",
        addressTwo: "123",
        city: "Houston",
        state: "TX",
      };
      chai
        .request(app)
        .post("/profile/add")
        .send(profile)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("error");

          done();
        });
    });


  // test fuel form get routes
  describe("GET /fuelform/get", () => {
    it("it should go to the GET fuelForm page", (done) => {
      authenticatedUser
        .get("/fuelform/get")

        .end((err, res) => {
          console.log(res.body.quotes[0].gallonsRequested)
          res.should.have.status(200);
          res.body.should.be.a("object");
          expect(res.body.quotes[0].gallonsRequested).to.equal(99);
          done();
        });
    });
  });

  // test fuelform post routes

  describe("/POST get", () => {
  it("it should not POST a profile without price field", (done) => {
      let  quotes =
      {
        gallonsRequested: 99,
        deliveryAddress: "1234 Test Address",
        deliveryDate: "7/03/2020",
        amountDue: "$99,000.00",
      };
    
      chai
        .request(app)
        .post("/fuelform/add")
        .send(quotes)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("error");

          done();
          });
      });


    it("It should create a new fuelForm", (done) => {
        
        const fuelFormObject = new fuelFormModule(1,1,1,1,1);
        fuelFormObject.save();
        fuelFormModule.fetchAll();
        console.log(fuelFormObject);

        done();
    });

     it("It should create a new Profile", (done) => {
        
        const profileObject = new profileModule("John","123 st", "apt 100","Houston","TX","77077");
        profileObject.save();
        console.log(profileObject);
        profileModule.fetchAll();
        done();
    });

     it("It should create a new User", (done)  => {
        const userObject = new userModule("username123","password123");
        
        userObject.save(); 
        console.log(userObject);
        userModule.findByEmail("password123");
        userModule.fetchAll();
        done();
       
    });

  });
});
