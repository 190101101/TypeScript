// https://www.typescripttutorial.net/typescript-tutorial/typescript-boolean

const pending1: boolean = true;
const notPending: boolean = !pending1;
console.log(notPending);

const hasError: boolean = false;
const completed: boolean = true;

let result = completed && hasError;
console.log(result);

result = completed || hasError;
console.log(result);

// Тип аннотаций для булевых
function changeStatus(status: boolean): boolean {
  return true;
}
