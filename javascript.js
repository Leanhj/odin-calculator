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
let numberCounter = 0;
let operatorActive = false;
let operationComplete = false;

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
    history.textContent = operate(firstNumber, secondNumber, operator);
}

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(item) {
    item.addEventListener("click", () => {
        if (operatorActive || operationComplete || displayValue === 0) {
            displayValue = item.textContent;
            if (operatorActive) {
                operatorActive = false;
            } else {
                updateHistory();
                operationComplete = false;
            }
        } else {
            displayValue += item.textContent;
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
    if (numberCounter === 0) {
        firstNumber = parseInt(displayValue);
    } else {
        secondNumber = parseInt(displayValue);
    }
    numberCounter++;
    numberCounter = numberCounter % 2;
    operator = "+";
    operatorActive = true;
});

operatorSubtract.addEventListener("click", () => {
    if (numberCounter === 0) {
        firstNumber = parseInt(displayValue);
    } else {
        secondNumber = parseInt(displayValue);
    }
    numberCounter++;
    numberCounter = numberCounter % 2;
    operator = "-";
    operatorActive = true;
});

operatorMultiply.addEventListener("click", () => {
    if (numberCounter === 0) {
        firstNumber = parseInt(displayValue);
    } else {
        secondNumber = parseInt(displayValue);
    }
    numberCounter++;
    numberCounter = numberCounter % 2;
    operator = "*";
    operatorActive = true;
});

operatorDivide.addEventListener("click", () => {
    if (numberCounter === 0) {
        firstNumber = parseInt(displayValue);
    } else {
        secondNumber = parseInt(displayValue);
    }
    numberCounter++;
    numberCounter = numberCounter % 2;
    operator = "/";
    operatorActive = true;
});

clearButton.addEventListener("click", () => {
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    numberCounter = 0;
    operatorActive = false;
    operationComplete = false;
    updateDisplay();
})

equalButton.addEventListener("click", () => {
    numberCounter = 0;
    secondNumber = parseInt(displayValue);
    displayValue = operate(firstNumber, secondNumber, operator);
    updateDisplay();
    operationComplete = true;
})