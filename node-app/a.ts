// a.ts

// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

// Tuples
let x: [string, number];
x = ["hello", 10];

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

// Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Interfaces
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// Classes
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

// Inheritance
class Animal {
  move(distanceInMeters: number = 0) {
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
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
let outputNumber = identity<number>(100);
