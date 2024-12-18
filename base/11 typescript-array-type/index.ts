// https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/

let example1: string[] = ['a', 'b', 'c', 'd'];
let example2: number[] = [1, 2, 3, 4];

let skills: string[] = [];
skills[0] = 'problem solving';
skills[1] = 'programming';
skills.push('software developer');

console.log(skills);

let skill = skills[0];
console.log(typeof skill);

let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);

let scores: (string | number | boolean)[];
scores = ['red', 5, true];
console.log(scores);
