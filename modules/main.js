let {averageArray} = require("./modules/mymodule");
console.log(require("./modules/mymodule"));
console.log(averageArray([1,2,3]));



/* retain special namespace */
let example = require("./modules/mymodule");
console.log(example.averageArray([1,2,3]));

console.log(example);
