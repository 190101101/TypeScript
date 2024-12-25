// https://www.typescripttutorial.net/typescript-tutorial/typescript-function-types

let p1: (x: number, y: number) => number;

p1 = function (x: number, y: number) {
  return x + y;
};

let p2: (a: number, b: number) => number = function (x: number, y: number) {
  return x + y;
};

let p3 = function (x: string, y: string): number {
  return x.concat(y).length;
};
