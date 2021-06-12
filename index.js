const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost/firstDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to Mongo')
    })
    .catch(err => {
        console.log('error in MongoDB');
        console.log(err);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products })
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

app.listen(3000, () => {
    console.log('Listening to Port 3000');
});