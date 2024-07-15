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

console.log(matches);
