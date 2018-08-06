function averageArray(array) {
    let sum = 0;
    array.forEach( n => sum += n );
    return sum/array.length;
}


exports.averageArray = averageArray;
