const express = require('express')
const bodyParser = require('body-parser');
const products = require('./routes/products')
const users = require('./routes/users')
const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/Vintus/Products', products)
app.use('/Vintus/Users', users)
app.listen(5000,()=> console.log('listening on port5000...'));