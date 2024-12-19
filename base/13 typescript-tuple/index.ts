// https://www.typescripttutorial.net/typescript-tutorial/typescript-tuple

let skill: [string, number];
skill = ['programming', 5];
console.log(skill);

// Необязательные элементы кортежа

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log(bgColor);
console.log(headerColor);
