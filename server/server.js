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

//need to create a POST route to receive object from client side
app.post('/input-values', (req, res) => {

//push the req.body values into the array
    inputValues.push(req.body);

//call calculation function to calculate the values just recieved 
    calculateUserInput();

//send an 'OK' status stating the data has been recieved 
    res.sendStatus(200);
});


//creat a function that calculates that data based on which operator button was clicked on
function calculateUserInput () {
    //will need to loop through the array and convert strings to numbers 
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

//need to create a GET request to pull the stored data and send back to the client upon request
app.get('/input-values', (req, res) => {

//log inputValues array
console.log(inputValues);

//send the calculated inputValues array back to the client side
res.send(inputValues);

})


























//Start listening for connections 
app.listen(PORT, () =>{
    console.log('Running on PORT:', PORT);
});