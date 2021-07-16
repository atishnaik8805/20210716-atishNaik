process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();



chai.use(chaiHttp);


describe('Data', () => {
/*
  * Test the /GET route
  */
  describe('/GET data', () => {
      it('it should GET updated data', (done) => {
        chai.request(server)
            .get('/data')
            .end((err, res) => {
                  should.exist(res.body);
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  done();
            });
      });
  });

});