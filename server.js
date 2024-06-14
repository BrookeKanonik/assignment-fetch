const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const receiptRoutes = require('./routes/receiptRoutes')

app.use(bodyParser.json());

app.use('/', receiptRoutes) 

app.listen(8000, ()=>{
    console.log('Server is running')
})    