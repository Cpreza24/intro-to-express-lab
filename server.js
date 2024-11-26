const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Root Route');
});


app.get('/greetings/:userName', (req, res) => {
    res.send(`Hello there ${req.params.userName}`);
});


app.get('/roll/:number', (req, res) => {
    const paramToNumber = parseInt(req.params.number);
    const randomNum = Math.floor(Math.random() * req.params.number + 1);

    if (!isNaN(paramToNumber)) {
        res.send(`You rolled a ${randomNum}`);
    } else {
        res.send('You must specify a number');
    };
});

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];


app.get('/collectibles/:id', (req, res) => {
    const collectibleId = parseInt(req.params.id);
    
    if (req.params.id > collectibles.length) {
        res.send(`This item is not yet in stock`)
    } else (
        res.send(`So, you want the ${collectibles[collectibleId].name} For ${collectibles[collectibleId].price}, it can be yours!`)
    )
});

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const queryParam = req.query.shoes;
    res.send(`${queryParam[shoes].name}`)
})




app.listen(3001, (req, res) => {
    console.log('listening on port 3001')
});