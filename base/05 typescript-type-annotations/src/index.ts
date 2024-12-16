let counter: number = 1;
// counter = 'hello' // compiler error

//
let user: string = 'pepi';
let age: number = 2;
let active: boolean = true;

//
let arr: [];
let names: string[] = ['pepi', 'kuki', 'apsi'];

//
let person: {
  name: string;
  age: number;
};

person = {
  name: 'pepi',
  age: 2,
};

console.log(person);

//
// let greeting: (name: string) => string;
let greeting = function (name: string): string {
  return `hi ${name}`;
};

console.log(greeting('pepi'));
