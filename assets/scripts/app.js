const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(usrInput.value);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

