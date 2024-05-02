const express = require('express')
const app = express();
// const routes = require('./routes')


// app.use('/api/v1', routes)


app.get('/test', (req, res)=>{
    res.send("working")
})



module.exports = app;