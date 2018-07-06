/*
The Sum of a Range
range function taht takes start and end as args, as well as steps positive or negative
returns array containing all numbers from start up to and including end
*/


function rangeStep(start, end, step) {
  let numArray = [];
  if (step < 0) {
    for (var i = start; i >= end; i += step) {
      numArray.push(i);
    }
  } else {
    for (var i = start; i <= end; i += step) {
      numArray.push(i);
    }
  }
  return numArray;
}

console.log(rangeStep(5,2,-1));


// sum function: takes array of numbers, returns sum

function sum(numArray) {
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

console.log(sum(rangeStep(1,10,1)));


/*
Reversing an array
arrays have reverse method; don't use it for this though
reverseArray should produce new reversed array
reverseArrayInPlace should modify existing array, and arrange it in reverse order
*/

function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

console.log(reverseArray([1,2,3]));

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {  // iterate over first half of array
    let old = array[i];
    array[i] = array[array.length - 1 - i]; // assign later values to beginning of array
    array[array.length - 1 - i] = old;  // assign beginning values to end of array
  }
  return array;
}

console.log(reverseArrayInPlace([1,2,3,8,99]));
