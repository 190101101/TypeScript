import fs from 'fs';
import path from 'path';

export abstract class CsvFileReader<T> {
  // data: T[] = {} as T[];
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

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
      .map(this.mapRow);
  }
}
