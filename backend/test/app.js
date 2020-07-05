const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

//test app main file
describe("Testing App Main File", () => {
  it("It should return Welcome Message", (done) => {
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
  it("it should return 404 page not found", (done) => {
    chai
      .request(app)
      .get("/invalid")
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
