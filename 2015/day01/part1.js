let input = require('fs').readFileSync('input.txt');

let instructions = String(input);
let openingParenthesis = ''.concat(...instructions.split(")"));
let closingParenthesis = ''.concat(...instructions.split("("));

let rightFloor = openingParenthesis.length - closingParenthesis.length;

console.log(rightFloor);
