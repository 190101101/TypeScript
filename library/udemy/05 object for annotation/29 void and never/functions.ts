const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

logger('hello world');

//?*? never
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

throwError('zxc');
