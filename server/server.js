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





















//Start listening for connections 
app.listen(PORT, () =>{
    console.log('Running on PORT:', PORT);
});