
/*
spread operator to create new array from older array and another item; no mutations
*/

let colors = ["red", "green", "blue"];
let color = "yellow"

let newColorsYellowLast = [...colors, color];
let newColorsYellowFirst = [color, ...colors];


/*
using spread operator to pass arguments
*/

let args = [1, true];

function someFunction(num, boolean) {
  return `The number is ${num} and the boolean is ${boolean}`;
}

console.log(
  someFunction(...args)
);
