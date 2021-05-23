//Need to go and get express to run server
const express = require('express');
//Need to bring in the bodyParser so that the server and client can post information
const bodyParser = require('body-parser');

//Create the server called 'app'
const app = express();
const PORT = 5000;

//need to bring in the localhost server
app.use(express.static('server/public'));
//ititialize bodyParser so that the server and client can post
app.use(bodyParser.urlencoded({extended: true}));


//create an empty array to hold the input values
let inputValues = [];

// console.log(inputValues);

//need to create a POST rounte to recieve object from client side
app.post('/input-values', (req, res) => {
    // console.log(req.body);
//push the req.body values into the array
    inputValues.push(req.body);
//call function to calculate the values just recieved 
    calculateUserInput();

    // console.log(inputValues);

//send a status stating the message has been recieved 
    res.sendStatus(201);
});




function calculateUserInput () {
    for (equation of inputValues) {
        if (equation.operator == '+') {
            equation.solution = Number(equation.inputOne) + Number(equation.inputTwo);
        }
        if (equation.operator == '-') {
            equation.solution = Number(equation.inputOne) - Number(equation.inputTwo);
        }
        if (equation.operator == '*') {
            equation.solution = Number(equation.inputOne) * Number(equation.inputTwo);
        }
        if (equation.operator == '/') {
            equation.solution = Number(equation.inputOne) / Number(equation.inputTwo);
        }
    }
}

app.get('/input-values', (req, res) => {


console.log(inputValues);


res.send(inputValues);


})


























//Start listening for connections 
app.listen(PORT, () =>{
    console.log('Running on PORT:', PORT);
});