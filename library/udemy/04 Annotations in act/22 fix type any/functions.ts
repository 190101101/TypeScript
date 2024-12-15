//? annotation - (i: number) => void =

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// logNumber(123);

// When to use type annotations
// 1. function returns the 'any' type
const json = '{"x":10, "y" :20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//? any type yerine type-i annotation ederek
//? { x: number; y: number } vermek
