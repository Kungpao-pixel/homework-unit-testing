const request = require('supertest');
const app = require('../app');

describe('Todo API', () => {
    describe('POST /todo', () => {
        test('insertr todo data', function (done) {
            request(app)
            .post('/todo')
            .send({
                "title": "praying"
            })
            .set('Accept','application/json')
            .end((err, res) => {
                if(err) {
                    done(err)
                    return
                }
                expect(res.body.title).toEqual('praying')

                done()
            })
        })
    })
})