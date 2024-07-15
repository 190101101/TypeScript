import fs from 'fs';
import path from 'path';
import { dateStringToDate } from './util';
import { MatchResult } from './MatchResult';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const filePath = path.join(__dirname, '..', this.filename);
    this.data = fs
      .readFileSync(filePath, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row:string[]):any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
      });
    );
  }
}
