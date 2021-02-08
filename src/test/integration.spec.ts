import mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';


import app from '../routes/api';
import { Constants } from './Constants';

chai.use(chaiHttp);
chai.should();

const expect = chai.expect;

describe('GET /payment-amount', () => {
    it('should return the correct value for a valid query', done => {
        chai.request(app)
            .get('/payment-amount')
            .query(Constants.SIMPLE_QUERY)
            .end((err, res) => {
                if (err) {
                    console.error(err);
                } else {
                    res.should.have.status(200);
                    expect(res.text).to.deep.equal('{"paymentAmount":"2241.62"}');
                }
                done();
            });
    });
});