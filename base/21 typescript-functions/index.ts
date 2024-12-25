// https://www.typescripttutorial.net/typescript-tutorial/typescript-functions

function add(a: number, b: number): number {
  return a + b;
}

let sum = add(10, 12);

function echo(message: string): void {
  console.log(message.toUpperCase());
}

echo('hello');
