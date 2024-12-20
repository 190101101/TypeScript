// https://www.typescripttutorial.net/typescript-tutorial/typescript-any-type

let result: any;

result = 1;
console.log(result);

result = 'hello';
console.log(result);

result = [1, 2, 3];
const total = result.reduce((a: number, b: number) => a + b, 0);
console.log(total);

const json = `{"latitude":10.11, "longitude":12.12}`;
const currentLocation = JSON.parse(json);
console.log(currentLocation);
console.log(currentLocation.x);

// Обратите внимание, что для отключения неявной типизации типа anyнеобходимо изменить noImplicitAnyпараметр в tsconfig.jsonфайле на true. Подробнее об этом вы узнаете tsconfig.jsonв следующем уроке.

// --
// TypeScript любой против объекта
let p1: any;
// let p1: object;
p1 = 10.123;
// console.log(p1.toFixed());
// p1.willExist();
