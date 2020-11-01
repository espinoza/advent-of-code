let input = require('fs').readFileSync('input.txt');

let instructions = String(input);
let i = 0;
let currentFloor = 0;

while (currentFloor !== -1) {
  if (instructions[i] === "(") {
    currentFloor += 1;
  } else if (instructions[i] === ")") {
    currentFloor -= 1;
  }
  i++
}

console.log(i);
