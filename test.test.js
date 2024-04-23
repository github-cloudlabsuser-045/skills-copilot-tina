// Calculator constructor function
function Calculator() {
    this.currentValue = 0;
}

// Method to add a number to the current value
Calculator.prototype.add = function(num) {
    this.currentValue += num;
};

// Method to subtract a number from the current value
Calculator.prototype.subtract = function(num) {
    this.currentValue -= num;
};

// Method to multiply the current value by a number
Calculator.prototype.multiply = function(num) {
    this.currentValue *= num;
};

// Method to divide the current value by a number
Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.currentValue /= num;
    } else {
        console.log("Error: Cannot divide by zero");
    }
};

// Method to get the current value
Calculator.prototype.getValue = function() {
    return this.currentValue;
};

// Create a new instance of the Calculator
const calculator = new Calculator();

// Example usage
calculator.add(5);
calculator.multiply(2);
calculator.subtract(3);
calculator.divide(2);

console.log("Current value:", calculator.getValue());

// BEGIN: Test Cases
// Test case 1: Adding a number to the current value
calculator.add(10);
console.log("Current value after adding 10:", calculator.getValue()); // Expected output: 14

// Test case 2: Subtracting a number from the current value
calculator.subtract(5);
console.log("Current value after subtracting 5:", calculator.getValue()); // Expected output: 9

// Test case 3: Multiplying the current value by a number
calculator.multiply(3);
console.log("Current value after multiplying by 3:", calculator.getValue()); // Expected output: 27

// Test case 4: Dividing the current value by a number
calculator.divide(9);
console.log("Current value after dividing by 9:", calculator.getValue()); // Expected output: 3

// Test case 5: Dividing the current value by zero
calculator.divide(0); // Expected output: Error: Cannot divide by zero
// END: Test Cases