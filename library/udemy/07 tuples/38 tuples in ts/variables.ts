// primitive types
const oranges: number = 5;
const speed: string = 'fast';
const hasDog: boolean = true;
const nothing: null = null;
const other: undefined = undefined;

// built-in objects
const now: Date = new Date();

//array
let colors: string[] = ['red', 'yellow', 'ping'];
let numbers: number[] = [1, 2, 3, 4, 5];
let results: boolean[] = [true, false, true];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//? annotation - (i: number) => void =

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// logNumber(123);

// When to use type annotations
//? 1. function returns the 'any' type
const json = '{"x":10, "y" :20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//? any type yerine type-i annotation ederek
//? { x: number; y: number } vermek

//? 2. when we declare a variable on one line and initialize it later
let words = ['one', 'two', 'three'];
let isTwo: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'two') {
    isTwo = true;
  }
}

//? 3. variables whoes type cant be inferred
let myNumbers = [-10, -1, 12];
let positiveNumber: boolean | number = false;

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] > 0) {
    positiveNumber = myNumbers[i];
  }
}

console.log(positiveNumber);
