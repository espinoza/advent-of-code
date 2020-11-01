let input = require('fs').readFileSync('input.txt');

let dimensionsString = String(input);
let dimensions = dimensionsString.split("\n");
let totalLength = 0;

let sum = (a, b) => a + b;
let prod = (a, b) => a * b;

for (i = 0; i < dimensions.length; i++) {
  currentDimensions = dimensions[i].split("x");

  // Avoid to work on empty array
  if (currentDimensions.length > 1) {

    // Convert strings to numbers
    currentDimensions = currentDimensions.map(Number)

    // Sum smallest petimeter to total length
    totalLength += 2 * currentDimensions.reduce(sum, 0);
    totalLength -= 2 * Math.max(...currentDimensions);

    // Sum volume of the box
    totalLength += currentDimensions.reduce(prod, 1);

  }
}

console.log(totalLength);
