const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('/greetings/:userName', (req, res) => {
    res.send(`Hello there ${req.params.userName}`);
})

// check if the parameter passed is a number
// if the parameter is not a number return message "you must specify a number"
// if the paramater is a number, the response should be a random number between 0 and the number in the paramater. 

app.get('/roll/:number', (req, res) => {
    paramToNumber = parseInt(req.params.number);
    const randomNum = Math.floor(Math.random() * req.params.number + 1);
    const stringParam = req.params.number;

    if (typeof(stringParam) === 'string') {
        res.send('Please enter a number');
        console.log(typeof(stringParam));
    } else if (typeof(req.params.number) === 'number') {
        res.send(`you rolled a ${randomNum}`);
    }


})

// app.get('/roll/:string', (req, res) => {
//     res.send('you must specify a number');
// })









app.listen(3000, (req, res) => {
    console.log('listening on port 3000')
});