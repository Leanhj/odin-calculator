function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "+";
let displayValue = "";
let newInput = false;
let operationComplete = false;
let inputComplete = false;
let operationActive = false;
let historyContent = 0;

function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const activeDisplay = document.querySelector(".active-display");
const history = document.querySelector(".history");

function updateDisplay() {
    activeDisplay.textContent = displayValue;
}

function updateHistory() {
    history.textContent = historyContent;
}

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(item) {
    item.addEventListener("click", () => {
        if (newInput || operationComplete || parseInt(displayValue) === 0) {
            displayValue = item.textContent;
            if (newInput) {
                newInput = false;
            } else {
                updateHistory();
                operationComplete = false;
            }
        } else {
            if (displayValue.length < 11) {
                displayValue += item.textContent;
            }
        }
        updateDisplay();
    });
});

const operatorAdd = document.querySelector(".operator-add");
const operatorSubtract = document.querySelector(".operator-subtract");
const operatorMultiply = document.querySelector(".operator-multiply");
const operatorDivide = document.querySelector(".operator-divide");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");

operatorAdd.addEventListener("click", () => {
    let previousOperator = operator;
    operator = "+";
    if (operationActive) {
        pressEqualButton(previousOperator);
        updateHistory();
        firstNumber = parseInt(displayValue);
    } else {
        firstNumber = parseInt(displayValue);
        newInput = true;
    }
    inputComplete = true;
    operationActive = true;
});

operatorSubtract.addEventListener("click", () => {
    let previousOperator = operator;
    operator = "-";
    if (operationActive) {
        pressEqualButton(previousOperator);
        updateHistory();
        firstNumber = parseInt(displayValue);
    } else {
        firstNumber = parseInt(displayValue);
        newInput = true;
    }
    inputComplete = true;
    operationActive = true;
});

operatorMultiply.addEventListener("click", () => {
    let previousOperator = operator;
    operator = "*";
    if (operationActive) {
        pressEqualButton(previousOperator);
        updateHistory();
        firstNumber = parseInt(displayValue);
    } else {
        firstNumber = parseInt(displayValue);
        newInput = true;
    }
    inputComplete = true;
    operationActive = true;
});

operatorDivide.addEventListener("click", () => {
    let previousOperator = operator;
    operator = "/";
    if (operationActive) {
        pressEqualButton(previousOperator);
        updateHistory();
        firstNumber = parseInt(displayValue);
    } else {
        firstNumber = parseInt(displayValue);
        newInput = true;
    }
    inputComplete = true;
    operationActive = true;
});

clearButton.addEventListener("click", () => {
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    newInput = false;
    operationComplete = false;
    historyContent = 0;
    history.textContent = 0;
    updateDisplay();
});

equalButton.addEventListener("click", () => {
    pressEqualButton(operator);
});

function pressEqualButton(op) {
    if (inputComplete) {
        secondNumber = parseInt(displayValue);
        if (op === "/" && secondNumber === 0) {
            displayValue = "You can't!";
        } else {
            displayValue = operate(firstNumber, secondNumber, op);
            historyContent = displayValue;
            if (displayValue.toString().length > 11) {
                displayValue = parseInt(displayValue.toString().slice(0, 11));
            }
            operationComplete = true;
            inputComplete = false;
            operationActive = false;
        }
        updateDisplay();
    }
}