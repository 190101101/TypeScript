"use strict";
const colors = ['red', 'green', 'yellow'];
const dates = [new Date(), new Date()];
const fruitsByColor = [['tomato'], ['apple'], ['lemon']];
const fruitsByColor2 = [];
//? Help with inference when extracting values
const color = colors[0];
const color1 = colors.pop();
//? prevent incompatible values
//! colors.push(true);
//? help with map
const newColors = colors.map((color) => {
    return color.toUpperCase();
});
//? flexible types
const importantDates1 = [new Date(), '2024-07-04'];
const importantDates2 = [];
importantDates2.push(new Date());
importantDates2.push('2024-07-04');
importantDates2.push(true);
console.log(importantDates2);
