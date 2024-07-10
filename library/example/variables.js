"use strict";
// primitive types
const oranges = 5;
const speed = 'fast';
const hasDog = true;
const nothing = null;
const other = undefined;
// built-in objects
const now = new Date();
//array
let colors = ['red', 'yellow', 'ping'];
let numbers = [1, 2, 3, 4, 5];
let results = [true, false, true];
// classes
class Car {
}
let car = new Car();
// object literal
let point = {
    x: 10,
    y: 20,
};
//? annotation - (i: number) => void =
const logNumber = (i) => {
    console.log(i);
};
// logNumber(123);
// When to use type annotations
//? 1. function returns the 'any' type
const json = '{"x":10, "y" :20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
//? any type yerine type-i annotation ederek
//? { x: number; y: number } vermek
//? 2. when we declare a variable on one line and initialize it later
let words = ['one', 'two', 'three'];
let isTwo;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'two') {
        isTwo = true;
    }
}
//? 3. variables whoes type cant be inferred
let myNumbers = [-10, -1, 12];
let positiveNumber = false;
for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] > 0) {
        positiveNumber = myNumbers[i];
    }
}
console.log(positiveNumber);
