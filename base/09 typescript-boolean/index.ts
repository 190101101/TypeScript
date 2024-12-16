// https://www.typescripttutorial.net/typescript-tutorial/typescript-boolean/

let pending: boolean = false;
console.log(pending);

setTimeout(() => {
  pending = true;
  console.log(pending);
}, 2000);
