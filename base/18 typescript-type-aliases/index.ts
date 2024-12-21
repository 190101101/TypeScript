// https://www.typescripttutorial.net/typescript-tutorial/typescript-type-aliases

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: 'pepi',
  age: 2,
};

console.log(person);

//

type alphanumeric = string | number;
let input: alphanumeric;

input = 100;
input = 'hi';
// input = false; //error
