console.log('JS is working!');

$ (document).ready(readyNow);

function readyNow () {
    console.log('jQuery is working!');


    // Click Listeners
    $('#equalsButton').on('click', addCalculation)

    // //addition click listern
    $('#additionButton').on('click', additionCapture)

    $('#subtractionButton').on('click', subtractionCapture)

    $('#multiplicationButton').on('click', multiplicationCapture)

    $('#divisionButton').on('click', divisionCapture)

    $('#clearButton').on('click', clearInput)

}

let inputObj = {

};

function addCalculation () {
    console.log("clicker works");
    // collect user input values and store them in an object
    inputObj.inputOne = $('#inputOne').val(),
    inputObj.inputTwo = $('#inputTwo').val(),

    // need to POST the object to the server
    $.ajax({
        url: '/input-values',
        method: 'POST',
        data: inputObj
    }).then(response => {
        console.log(response);
    })
    appendCalculations();
}

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
    console.log('clear button working');
    $('#inputOne').val('');
    $('#inputTwo').val('');
}

function appendCalculations () {
    $.ajax({
        method: 'GET',
        url: '/input-values'
    }).then(function (response) {
        console.log('Display values', response);
        $('#appendItems').empty();
        for (object of response) {
            $('#total').empty();
            $('#total').append(object.solution);
            // $('#total').empty();
            $('#appendItems').append(`
            <li>${object.inputOne} ${object.operator} ${object.inputTwo} = ${object.solution} `)
        }
    })
}




