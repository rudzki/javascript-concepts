/* let vs var */

// let limits variables in scope to block/statement/expression
// var defines variable globally, or local to a function

var a = 100;
let b = 200;

if (true) {
    var a = 25;
    let b = 50;
}

console.log(a, b); // => 25 200


/*
conditionals
*/

var n = 2; // prompt('pick a number', '');
if (n === 2) {
  console.log(n);
}

if (n === 3) {
  console.log('Blue');
} else if (n === 2){
  console.log('Red');
} else {
  console.log('Yellow');
}


/*
loops
*/

var num = 0;
while (num <= 3) {
  console.log(num);
  num += 1;
}

for (var n = 0; n <= 2; n++) {
  console.log('X');
}


/*
exercise: draw triangle
*/

var line = "";
for (var i = 0; i < 7; i++) {
  line += "#";
  console.log(line);
}

/*
fuzzbuzz
  log 1 to 100, except:
    if divisible by 3, but not 5, log 'Fizz' instead
    if divisible by 5, but not 3, 'Buzz'
    if both, 'FizzBuzz'
*/

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0)
    line = "Fizz";
  else if (i % 3 !== 0 && i % 5 === 0)
    line = "Buzz";
  else if (i % 3 === 0 && i % 5 === 0)
    line = "FizzBuzz";
  else
    line = i;
  console.log(line);
}

/*
chess board:
  create string representing 8x8 grid
    newline characters to sep lines
    ' ' or # for each spot
*/


var grid = "";
var size = 4;
for (var count = 1; count < (size*size + 1); count++) {
  if (count % 2 === 0 && count % (size + 1) !== 0) {
    grid += "#";
  } else if (count % (size + 1) === 0) {
    grid += "\n";
  } else {
    grid += " ";
  }
}
console.log(grid);
