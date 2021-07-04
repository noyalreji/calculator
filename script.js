// writing a code for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
// The parseFloat() function parses a string and returns a floating point number.
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using conditionals if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// alert the result 
console.log(`${number1} ${operator} ${number2} = ${result}`);
alert(`${number1} ${operator} ${number2} = ${result}`);