// https://www.typescripttutorial.net/typescript-tutorial/typescript-default-parameters

function applyDiscout(price: number, discout: number = 0.05): number {
  return price * (1 - discout);
}

console.log(applyDiscout(100));
