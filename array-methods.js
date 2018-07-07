/* custom implementations of array methods */

/* ========================================================================== */

/* map, reduce, filter */

/* ========================================================================== */

var array = [2, 15, 95, 500, 14500];

/* ========================================================================== */

function map (array, func) {
    /* applies function to each item in array, outputs new array */
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray;
}

var result_double = map(array, function(a) { return a * 2} );
console.log(result_double);

/* ========================================================================== */

function reduce (array, combiningFunc, start) {
    /* applies combining function to
    summarize or reduce an array to some value */
    var curr = start;
    for (var i = 0; i < array.length; i++) {
        start = combiningFunc(start, array[i]);
    }
    return start;
}

var result_sum = reduce(array, function(a, b) { return a + b }, 0);
console.log(result_sum);

/* ========================================================================== */

function filter (array, filterFunc) {
    /* takes array, and returns a new one of elements that meet some condition */
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (filterFunc(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

var result_OverOneHundred = filter(array,
    function(a) {
        if (a > 100) return a;
    }
);

console.log(result_OverOneHundred);

/* ========================================================================== */

/* Every and Some array methods as functions */

/* ========================================================================== */

function every(array, predicateFunc) {
    for (var i = 0; i < array.length; i++) {
        if (!predicateFunc(array[i])) {
            return false;
        }
    }
    return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 1], isNaN));


function some(array, predicateFunc) {
    for (var i = 0; i < array.length; i++) {
        if (predicateFunc(array[i])) {
            return true;
        }
    }
    return false;
}

console.log(some([NaN, 1, 2], isNaN));
console.log(some([1, 2, 3], isNaN));
