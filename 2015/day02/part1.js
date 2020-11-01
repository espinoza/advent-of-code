let input = require('fs').readFileSync('input.txt');

let dimensionsString = String(input);
let dimensions = dimensionsString.split("\n");
let totalArea = 0;

for (i = 0; i < dimensions.length; i++) {
  currentDimensions = dimensions[i].split("x");

  // Avoid to work on empty array
  if (currentDimensions.length > 1) {

    // Convert strings to numbers
    currentDimensions = currentDimensions.map(Number)

    area1 = currentDimensions[0] * currentDimensions[1];
    area2 = currentDimensions[0] * currentDimensions[2];
    area3 = currentDimensions[1] * currentDimensions[2];
    minArea = Math.min(area1, area2, area3);
    totalArea += 2 * (area1 + area2 + area3) + minArea;

  }
}

console.log(totalArea);
