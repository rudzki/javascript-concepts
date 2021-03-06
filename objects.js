/* calling methods on objects */

let tomato = {
    color: 'red',
    throw: function(speed) {
        console.log('Thrown', speed);
    }
};

tomato.throw('fast');  // => Thrown fast


/* calling functions on particular objects as methods
by specifying `this` value */

function say(word) {
    console.log(this.name, "says", word);
}

let person = {
    name: 'Chris'
}

say.call(person, "Howdy");  // => Chris says Howdy

/* Constructors and prototypes */

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

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
var vectorB = new Vector(2,3);

console.log('Vector A:', vectorA);
console.log('Vector B:', vectorB);

console.log('Vector A + Vector B:', vectorA.plus(vectorB));
console.log('Vector A - Vector B:', vectorA.minus(vectorB));
console.log('Vector A distance to origin:', vectorA.length);
console.log('Vector B distance to origin:', vectorB.length);

/* Prototypal inheritance */

/* An array object inherits from the Array prototype,
which in turn inherits from the Object prototype */

console.log(
        Object.getPrototypeOf([1,2,3]) === Array.prototype,
        Object.getPrototypeOf(Array.prototype) === Object.prototype
);

/* A function object inherits from the Function prototype,
which in turn inherits from the Object prototype */

let func = x => x;

console.log(
    Object.getPrototypeOf(func) === Function.prototype,
    Object.getPrototypeOf(Function.prototype) === Object.prototype
);


/*
Much more intuitive class syntax added in ES6
*/

class VectorVerTwo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    minus(otherVector) {
        return new VectorVerTwo(this.x - otherVector.x, this.y - otherVector.y);
    }

    plus(otherVector) {
        return new VectorVerTwo(this.x + otherVector.y, this.y + otherVector.y);
    }
    static getClassAuthor() {
        return 'Chris';
    }
}

let something = new VectorVerTwo(5,10);

// STATIC METHOD:
//
// Throws error.
// You can only call static methods on classes, not instantiated objects.
// something.getClassAuthor();
//

console.log(VectorVerTwo.getClassAuthor());



console.log('\n========================================================');
console.log('=================== w/ ES 6 syntax =====================');
console.log('========================================================\n');


let vectorC = new VectorVerTwo(1,2);
let vectorD = new VectorVerTwo(2,3);

console.log('Vector C:', vectorC);
console.log('Vector D:', vectorD);

console.log('Vector C + Vector D:', vectorC.plus(vectorD));
console.log('Vector C - Vector D:', vectorC.minus(vectorD));
console.log('Vector C distance to origin:', vectorC.length);
console.log('Vector D distance to origin:', vectorD.length);


/*
Testing equality between objects
*/

let objA = {
  color: 'blue',
  size: 'medium',
  height: 'tall'
};

let objB = {
  color: 'blue',
  size: 'medium',
  height: 'tall'
};

// Different objects, even if containing the same properties, are not identical.
console.log( objA == objB );
console.log( objA === objB );

// Check values property by property for deep comparison between objects
function deepCompare(objectA, objectB) {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;
  for (let prop of Object.keys(objectA)) {
    if (objectA[prop] !== objectB[prop])
      return false;
  }
  return true;
}
console.log(deepCompare(objA, objB));

// Alternative deep comparison; comparing JSON strings

function altDeepCompare(objectA, objectB) {
  return JSON.stringify(objectA) === JSON.stringify(objectB);
}

console.log(altDeepCompare(objA, objB));
