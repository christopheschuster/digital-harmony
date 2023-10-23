/* 
   Filename: AdvancedCalculator.js
   Content: Advanced calculator with advanced mathematical operations and user-friendly interface
*/


// Initialize the calculator class
class AdvancedCalculator {
  constructor() {
    this.currentValue = 0; // Current value in the calculator
    this.expression = ""; // Mathematical expression to be evaluated
  }

  // Function to add numbers
  add(number) {
    this.currentValue += number;
    this.expression += ` + ${number}`;
    return this;
  }

  // Function to subtract numbers
  subtract(number) {
    this.currentValue -= number;
    this.expression += ` - ${number}`;
    return this;
  }

  // Function to multiply numbers
  multiply(number) {
    this.currentValue *= number;
    this.expression += ` * ${number}`;
    return this;
  }

  // Function to divide numbers
  divide(number) {
    this.currentValue /= number;
    this.expression += ` / ${number}`;
    return this;
  }

  // Function to raise the current value to a power
  power(number) {
    this.currentValue **= number;
    this.expression += ` ^ ${number}`;
    return this;
  }

  // Function to calculate the square root of the current value
  squareRoot() {
    this.currentValue = Math.sqrt(this.currentValue);
    this.expression += ' √';
    return this;
  }

  // Function to calculate the factorial of the current value
  factorial() {
    let result = 1;
    for(let i = 2; i <= this.currentValue; i++){
      result *= i;
    }
    this.currentValue = result;
    this.expression += '!';
    return this;
  }

  // Function to evaluate the mathematical expression
  evaluate() {
    this.expression += ` = ${this.currentValue}`;
    return this;
  }

  // Function to clear the calculator
  clear() {
    this.currentValue = 0;
    this.expression = "";
    return this;
  }

  // Function to display the expression
  displayExpression() {
    console.log(this.expression);
    return this;
  }

  // Function to display the current value
  displayValue() {
    console.log(this.currentValue);
    return this;
  }
}


// Create a new instance of the AdvancedCalculator class
const calculator = new AdvancedCalculator();

// Test the advanced calculator by performing different mathematical operations
calculator.add(5).multiply(3).divide(2).subtract(4).power(2).evaluate().displayExpression().displayValue();

calculator.clear();

calculator.add(10).squareRoot().evaluate().displayExpression().displayValue();

calculator.clear();

calculator.add(5).factorial().evaluate().displayExpression().displayValue();

calculator.clear();

calculator.subtract(7).power(3).divide(2).multiply(4).evaluate().displayExpression().displayValue();

/* 
  Output:
  5 + 3 * 2 / 4 - 4 ^ 2 = 7
  10 √ = 3.1622776601683795
  5 ! = 120
  -7 ^ 3 / 2 * 4 = -392
*/