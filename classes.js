/* reviewing from objects.js */

class Shirt {
    constructor (color, size) {
        this.color = color;
        this.size = size;
    }
    wear() {
        return `You're wearing a size ${this.size} shirt that is ${this.color}.`;
    }

}
let smallRedShirt = new Shirt('red', 'small');
console.log(smallRedShirt.wear()); // => You've consumed a small, red bean.


/* SUBCLASSES */

class dressShirt extends Shirt {
    constructor (color, size, collarType) {
        super(color, size); // <= passes in params from Shirt class
        this.collarType = collarType;
    }
}

let mediumBlueMandarinShirt = new dressShirt("blue", "medium", "mandarin");
console.log(mediumBlueMandarinShirt); // => dressShirt { color: 'blue', size: 'medium', collarType: 'mandarin' }
console.log(mediumBlueMandarinShirt.wear()); // => You're wearing a size medium shirt that is blue.









/* Build a data structure called Group to implement Set-like characteristics:
- add, delete, has methods
- add item only if it is not already inside group
- delete item only if it is in the group
- has returns boolean to indicate membership
- should also have 'from' static method that takes iterable and creates group
    containing (one of each of) its values
*/

class Group {
    constructor() {
        this.values = [];
    }
    add(value) {
        if (!this.values.includes(value)) {
            this.values.push(value);
        }
    }
    delete(value) {
        if (this.values.includes(value)) {
            this.values.splice(this.values.indexOf(value), 1);
        }
    }
    has(value) {
        if (this.values.includes(value)) {
            return true;
        } else {
            return false;
        }
    }
    static from(iterable) {
        let newGroup = new Group;
        for (let val of iterable) {
            newGroup.add(val);
        }
        return newGroup;
    }
}

/* create empty Group type object */
let someGroup = new Group();

/* add 5 to Group type object named someGroup */
someGroup.add(5);
console.log(someGroup);

/* add 1 */
someGroup.add(1);
console.log(someGroup);

/* delete 5 */
someGroup.delete(5);
console.log(someGroup);

/* does someGroup contain the value 1? */
console.log(someGroup.has(1));

/* create a Group type object from the array object [1,2,3,3,3,3] */
let particularGroup = Group.from([1,2,3,3,3,3]);
particularGroup.add(4); // add four to Group object named particularGroup
console.log(particularGroup); // => 1,2,3,4
