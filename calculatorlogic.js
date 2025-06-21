let displayValue = '0';
let pendingValue = '';
let operation = null;

const displayElement = document.getElementById('display');

function updateDisplay() {
displayElement.innerText = displayValue;
}

function clearDisplay() {
displayValue = '0';
pendingValue = '';
operation = null;
updateDisplay();
}

function appendNumber(number) {
if (displayValue === '0') {
displayValue = number;
} else {
displayValue += number;
}
updateDisplay();
}

function appendDecimal() {
if (!displayValue.includes('.')) {
displayValue += '.';
updateDisplay();

}
}

function setOperation(op) {
if (pendingValue !== '') {
calculate();
}
operation = op;
pendingValue = displayValue;
displayValue = '0';
}

function calculate() {
const currentValue = parseFloat(displayValue);
const previousValue = parseFloat(pendingValue);

switch (operation) {
case '+':
displayValue = previousValue + currentValue;
break;
case '-':
displayValue = previousValue - currentValue;
break;
case '*':
displayValue = previousValue * currentValue;
break;
case '/':
displayValue = previousValue / currentValue;
break;
}

operation = null;
pendingValue = '';

updateDisplay();
}

function calculateModulo() {
const currentValue = parseFloat(displayValue);
displayValue = currentValue / 100;
updateDisplay();
}

function calculateSquare() {
const currentValue = parseFloat(displayValue);
displayValue = currentValue * currentValue;
updateDisplay();
}

updateDisplay();