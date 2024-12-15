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

// Enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

//
const getMatchResult = (match: string[]): MatchResult => {
  if (match[5] === 'H') {
    return MatchResult.HomeWin;
  } else if (match[5] === 'A') {
    return MatchResult.AwayWin;
  }
  return MatchResult.Draw;
};

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times`);
