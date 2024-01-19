let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendCharacter(char) {
  if (displayValue === '0' && char !== '.' && char !== 'C') {
    displayValue = char;
  } else {
    displayValue += char;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function deleteLastChar() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || key === '.' || ['+', '-', '*', '/'].includes(key)) {
    appendCharacter(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLastChar();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

updateDisplay();
