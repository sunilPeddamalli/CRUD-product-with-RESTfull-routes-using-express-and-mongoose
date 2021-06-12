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

// const P = new Product({
//     name: 'Banana',
//     price: 3,
//     category: 'fruit'
// })
// P.save().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err);
// })

const seeddata = [
    {
        name: 'apple',
        price: 6,
        category: 'fruit'
    },
    {
        name: 'yogurt',
        price: 9,
        category: 'dairy'
    }
]

Product.insertMany(seeddata)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })