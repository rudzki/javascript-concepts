let quicksort = function (array) {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[ Math.floor((array.length - 1) / 2) ];
    let pivotarray = [], leftarray = [], rightarray = [];
    array.forEach( function(i) {
      if ( i === pivot )
        pivotarray.push(i);
      else if ( i < pivot )
        leftarray.push(i);
      else
        rightarray.push(i);
    });

    return quicksort(leftarray).concat(pivotarray).concat(quicksort(rightarray));
  }
};

console.log(quicksort([90,9,28]));
