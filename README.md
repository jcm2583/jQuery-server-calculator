# Server Side jQuery Calculator

_Duration: Weekend Project_

## Description

I created a calculator that features two text boxes where a user can enter a number in each text box and click on an operator button to perform whichever mathematical equation they chose. Upon clicking on the '=' button, the client sends the user input data to the server where a function is ran that calculates the user's choices and stores that data in an array. When the client requests the stored data, the server then sends the calculated data back to the client where it is then displayed on the DOM.

## Screen Shot

![Home Page](/images/homepage.png)
![Calculation](/images/calculation.jpeg)

### Prerequisites

- Node.js
- Express.js

## Installation

1. Clone the project from Github
2. Open in text editor of your choice
3. Open the terminal and run the command `npm install`
4. Run the command `npm start` in your terminal to open up a new browser tab
5. If the browser does not automatically open, enter `localhost:5000` in the URL
6. When you are finished, type `control + C` to stop server

## Usage

1. A user will see two input boxes with an operator between them
2. The user can enter a number in both of the boxes and click on the appropiate operator button to run the desired equation
3. Clicking on the `=` button will calculate the equation
4. Clicking on the `C` button will clear the equation so that the user can enter another calculation
5. The previous calculations are still viewable on the left side of the screen

## Built With

- HTML
- CSS
- Javascript
- jQuery
- Bootstrap
- Node.js
- Express.js

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io) who equiped and helped me make this application a reality.

## Support
If you have suggestions or issues, please email me at [jmotes2583@gmail.com](mailto:jmotes2583@gmail.com)