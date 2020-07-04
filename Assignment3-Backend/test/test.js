const chai = require('chai');
const request = require('request');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app')
const protectionModule = require("../routes/protection");
const profileModule = require("../controllers/profile");
const userCredentials = {
  email: 'user123@gmail.com', 
  password: 'password123'
}




chai.use(chaiHttp);
var authenticatedUser = chai.request.agent(app);

//login the user before tests
beforeEach(function(done){
      authenticatedUser
        .post('/auth/login')
        .send(userCredentials)
        .end(function(err, response){
          
          expect(response.statusCode).to.equal(200);
          done();
        });
    });


describe('Testing API ', () => {
  

  //test authentication and get routes
  
	describe("GET /profile/get", () => {

    
     it('should return a 200 response if the user is logged in', function(done){
      authenticatedUser.get('/')
                        .end((err, res) => {
               res.should.have.status(200);
               done();
           });
  
      });     

    it('should return a 404 response if the user is NOT login', function(done){
        chai.request(app).get('/fuelform')
                    .end((err, res) => {
               res.should.have.status(404);
               done();
           });
      });
    

      
		it('it should go to the GET profile page', (done) => {
			
      		        
   		 authenticatedUser
	        .get('/profile/get')

	        .end((err, res) => {
	             res.should.have.status(200);
               console.log(res.body);
	             res.body.should.be.a('object');
	            	
	             done();
	         });


	    });

	    it('it should return an INVALID route', (done) => {
		
   		chai.request(app)
	        .get('/profile')

	        .end((err, res) => {
	             res.should.have.status(404);
	            	
	             done();
	         });
	    });


      it('It should get a user', (done) => {
      
                  
          profileModule.getProfile();


      });

	});

  // test post routes
	 describe('/POST', () => {
      it('it should not POST a profile without zip field', (done) => {
          let profile = {
              fullName: "John Doe",
              addressOne: "321 St",
              addressTwo: "123",
              city: "Houston",
              state:"TX",

          }
        chai.request(app)
            .post('/profile/add')
            .send(profile)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('error');
                  
              done();
            });


		});
    });



});
