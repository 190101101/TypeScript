// https://www.typescripttutorial.net/typescript-tutorial/typescript-union-type

function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }
  throw new Error('parameters must be numbers or string');
}
