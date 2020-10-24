const defaultResult = 0;
let currentResult = defaultResult;

function add(number1, number2) {
    const result = number1 + number2;
    return result;
}

currentResult = add(5, 8);

let calculationDescription = '(' + defaultResult + ' + 10 * 3 / 2 - 3)';

outputResult(currentResult, calculationDescription);