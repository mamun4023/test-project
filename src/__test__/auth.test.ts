const request = require('supertest');
const app = require("../app");


describe('Testing user Api', ()=>{
    it('resturn status code',()=>{
        request(app)
        .get('/test')
        .expect(200)
        .end((err, res)=>{
            if(err) throw err
        })
    })
})