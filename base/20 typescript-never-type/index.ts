// https://www.typescripttutorial.net/typescript-tutorial/typescript-never-type

// let empty: never = 'hello'; //error

type alphanumberic = string & number; //never
// console.log(typeof alphanumberic);

function raiseError(message: string): never {
  throw new Error(message);
}
// console.log(raiseError('nope'));

function forever(): never {
  while (true) {}
}

// forever();
