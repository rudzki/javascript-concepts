
/*
Arrow function syntax
*/

//let twice = (num) => { return num * 2; };

//console.log(twice(2));

let multiply = (num1) => {
  return (num2) => { return num1 * num2 };
};

let thrice = multiply(3);
console.log(thrice); // outputs: fxn

let tenfold = thrice(10);
console.log(tenfold); // outputs number
