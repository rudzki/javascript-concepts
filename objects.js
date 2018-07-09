function Vector(x, y) {
    this.x = x;
    this.y = y;
}


// this works and is simpler. why shouldn't i use it?
// Vector.prototype.length = function() {
//     return Math.sqrt(this.x ** 2 + this.y ** 2);
// };
// requires method call, like vectorA.length(), below.


Object.defineProperty(Vector.prototype, "length",
    { get: function() { return Math.sqrt(this.x ** 2 + this.y ** 2); }
});

Vector.prototype.plus = function(otherVector) {
    return new Vector(this.x + otherVector.x, this.y + otherVector.y)
};

Vector.prototype.minus = function(otherVector) {
    return new Vector(this.x - otherVector.x, this.y - otherVector.y)
};

var vectorA = new Vector(1,2);
console.log('Vector A:', vectorA);

var vectorB = new Vector(2,3);
console.log('Vector B:', vectorB);

console.log('Vector A + Vector B:', vectorA.plus(vectorB));
console.log('Vector A - Vector B:', vectorA.minus(vectorB));
console.log('Vector A distance to origin:', vectorA.length);
console.log('Vector B distance to origin:', vectorB.length);
