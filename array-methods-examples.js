/* add only odd numbers in array */

var arr = [1, 2, 3, 4, 5];

var result = arr.reduce(
    function (a, b) {
        if (b % 2 != 0) return a + b;
        else return a;
    }
);

console.log(result);

/* given an array, return a new array that consists
of values multiplied by their original index */

var arr = [1, 2, 3, 4, 5, 5];
var count = 0;
var result = arr.map(
    function(a) {
        count++;
        return a * (count - 1);
    }
);

console.log(result);


/* given array, return array consisting only of odd numbers */

var arr = [1, 2, 3, 4, 5];

var result = arr.filter(
        function(a) {
            if (a%2 != 0) {
                return a;
            }
        }
);

console.log(result);
