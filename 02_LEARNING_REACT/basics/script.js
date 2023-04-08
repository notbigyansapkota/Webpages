// LEARNING ABOUT LET AND CONST-----------------------------
/*
// This will work as let variables can change their value.
let myName = 'max';
console.log(myName);
myName = 'Manu';
console.log(myName)
// But not this as const variables never change their value.
const myName = 'Bigyan';
console.log(myName);
myName = 'Manu';
console.log(myName)
*/

// NORMAL FUNCTION------------------------------------------
/*function printMyName (name) {
    console.log(name);
}
printMyName('Bigyan');
*/

// ARROW FUNCTION--------------------------------------------
/*
const showName = (name) => {
    console.log(name);
}
showName('Sapkota');
// using two arguments.........
const showFullName = (name, surname) => {
    return (name + surname);
};
console.log(showFullName('Prashant ', 'Ronit'));
// Let's not use the return keyword.........
const noReturnName = (name, surname) => name + surname;
console.log(noReturnName('Badri ', 'Sapkota'));
*/

// CLASSSES
/*
// Creating a simple class.........
class Person {
    constructor() {
        this.name = 'Bigyan';
        // this.gender = 'female' // (This will pring female)
    }
    printMyName () {
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();

// Inheriting the class created.........
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}
// Inheritence.................
class Person extends Human {
    constructor() {
        super();
        this.name = 'Bigyan';
    }
    printMyName () {
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printGender();

// Using es6 for creating a class and inherit it.........
class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    } 
}

class Person extends Human {
    name = 'Bigyan';
    gender = 'MALE';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
*/












