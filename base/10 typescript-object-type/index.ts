// https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type

let person: object = {
  firstName: 'pepikus',
  lastname: 'pepi',
  age: 25,
  job: 'meow',
};

console.log(person);

let employee: {
  firstName: string;
  lastname: string;
  age: number;
  job: string;
} = {
  firstName: 'pepikus',
  lastname: 'pepi',
  age: 25,
  job: 'meow',
};

console.log(employee);

let vacant: {} = {};
console.log(vacant.toString());
