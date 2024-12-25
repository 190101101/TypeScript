// https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters

function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}

console.log(multiply(10, 20));
console.log(multiply(10, 20, 30));
