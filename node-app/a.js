"use strict";
// a.ts
// Basic Types
let isDone = false;
let decimal = 6;
let color = "blue";
// Arrays
let list = [1, 2, 3];
let listGeneric = [1, 2, 3];
// Tuples
let x;
x = ["hello", 10];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
// Any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    console.log("This is my warning message");
}
// Null and Undefined
let u = undefined;
let n = null;
// Never
function error(message) {
    throw new Error(message);
}
create({ prop: 0 }); // OK
create(null); // OK
// Type assertions
let someValue = "this is a string";
let strLength = someValue.length;
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// Classes
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
// Inheritance
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
// Generics
function identity(arg) {
    return arg;
}
let output = identity("myString");
let outputNumber = identity(100);
