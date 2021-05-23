console.log('JS is working!');

$ (document).ready(readyNow);

function readyNow () {
    console.log('jQuery is working!');


    // Click Listeners
    $('#equalsButton').on('click', addCalculation);

    //create click listeners for each operator button
    $('#additionButton').on('click', additionCapture);

    $('#subtractionButton').on('click', subtractionCapture);

    $('#multiplicationButton').on('click', multiplicationCapture);

    $('#divisionButton').on('click', divisionCapture);

    $('#clearButton').on('click', clearInput);

    //call on function to append calculations to the DOM once page loads
    appendCalculations();

}

//create an empty object that can receive the user input to send to the server side
let inputObj = {

};

//create a function that captures the user input data, places it in an object, and sends that object to the server
function addCalculation () {
    // collect user input values and store them in an object
    inputObj.inputOne = $('#inputOne').val(),
    inputObj.inputTwo = $('#inputTwo').val(),

    // need to POST the object to the server so that it can store the information and run calculations
    $.ajax({
        url: '/input-values',
        method: 'POST',
        data: inputObj
    }).then(response => {
        console.log(response);
    })
    appendCalculations();
}

//need to create functions per each button that adds its button operator into the inputObj
function additionCapture () {
    inputObj.operator = '+';
}

function subtractionCapture () {
    inputObj.operator = '-';
}

function multiplicationCapture () {
    inputObj.operator = '*';
}

function divisionCapture () {
    inputObj.operator = '/';
}


function clearInput() {
//check that the clicker is working
    // console.log('clear button working');
//clear the input boxes when the user clicks on the clear button
    $('#inputOne').val('');
    $('#inputTwo').val('');
    $('#total').empty();
}

function appendCalculations () {
    //need to request data from the server
    $.ajax({
        method: 'GET',
        url: '/input-values'
    //once received, console.log the values to make sure it worked
    }).then(function (response) {
        console.log('Display values', response);
    //need to append the total per each equation and empty it 
        $('#appendItems').empty();
    //loop through response and append the equations to the DOM (Don't forget to empty)
        for (object of response) {
            $('#total').empty();
            $('#total').append(object.solution);
            $('#appendItems').append(`
            <li>${object.inputOne} ${object.operator} ${object.inputTwo} = ${object.solution} `)
        }
    })
}




