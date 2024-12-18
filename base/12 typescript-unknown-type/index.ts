// https://www.typescripttutorial.net/typescript-tutorial/typescript-unknown-type

let result: unknown;

result = 1;
result = 'hello';
result = false;
result = Symbol();
result = { name: 'pepi' };
result = [1, 2, 3];

console.log(result);

// result.reduce((a: number, b: number) => a + b, 0); //error
const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total);
