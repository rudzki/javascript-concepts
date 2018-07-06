var x = "outside";



var f1 = function() {
  var x = "inside f1";
};

f1();
console.log(x); // logs 'outside'



var f2 = function() {
  x = "inside f2";
};

f2();
console.log(x); // logs 'inside f2'


/*
closure - closes over local vars to enable reference to certain states
*/

function multipler(factor) { // input: number; output: function
  return function(number) {  // input: number; output: returns number
    return number * factor;
  };
}

var twice = multipler(2);
console.log(twice(5));

/*
recursion
*/

function power(base, exponent) {
  if ( exponent === 0 ) {
    return 1;
  } else {
    return base * power(base, exponent-1);
  }
}

console.log(power(2,3));


/*
exercise: minimum
takes two args, returns smallest
*/

function min(x, y) {
  if (x > y) return y;
  else return x;
}

console.log(min(40,9));

/*
exercise: recursion
1. zero is even
2. one is odd
3. for any other number N, its evenness is the same as N-2
isEven() should correspond to this description; should return boolean
fix it so that it can deal with -1
*/

function isEven(number) {
  if (number === 0) return true;
  else if (number === 1) return false;
  else if (number < 0) return isEven(0 - number) //deals with negative integers
  else return isEven(number-2);
}

var result = isEven(-2) == true;
console.log(result);


/*
exercise: bean counting
"string".charAt(N) returns the Nth character of the string
N is zero-indexed
"string".length

countBs(string) should return number of B's in string (case sensitive)
countChar(string, char) generalize given any character in string
*/

function countChar(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count += 1;
    }
  }
  return count;
}

console.log(countChar('Blue Bl Bastard', 'r'));

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs('Blue Bastard'));
