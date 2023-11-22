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

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(item) {
    item.addEventListener("click", () => {
        displayValue += item.textContent;
        updateDisplay();
    });
});