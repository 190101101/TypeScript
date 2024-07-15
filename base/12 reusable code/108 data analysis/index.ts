import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '..', 'football.csv');
const matches = fs
  .readFileSync(filePath, {
    encoding: 'utf8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'h') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
