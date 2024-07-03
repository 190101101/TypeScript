//? annotation - (i: number) => void =

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// logNumber(123);

// When to use type annotations
// 1. function returns the 'any' type
const json = '{"x":10, "y" :20}';
const coordinates = JSON.parse(json);
console.log(coordinates);
