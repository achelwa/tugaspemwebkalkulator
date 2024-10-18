// script.js

let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentValue = '';
let previousValue = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonText = button.textContent;

    switch (buttonText) {
      case '=':
        calculate();
        break;
      case 'C':
        clearDisplay();
        break;
      default:
        handleInput(buttonText);
    }
  });
});

function handleInput(input) {
  if (input === '+' || input === '-' || input === '*' || input === '/') {
    operator = input;
    previousValue = currentValue;
    currentValue = '';
  } else {
    currentValue += input;
  }
  display.value = currentValue;
}

function calculate() {
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(previousValue) / parseFloat(currentValue);
      break;
  }
  display.value = result;
  currentValue = result; }