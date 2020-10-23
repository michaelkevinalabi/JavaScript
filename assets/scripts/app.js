const defaultResult = 0;
let currentResult = defaultResult;

function add(number1, number2) {
    const result = number1 + number2;
    alert('The result is ' + result);
}

add(4 , 5);

currentResult = currentResult + 10 * 3 / 2 - 3; 

let calculationDescription = '(' + defaultResult + ' + 10 * 3 / 2 - 3)';

outputResult(currentResult, calculationDescription);