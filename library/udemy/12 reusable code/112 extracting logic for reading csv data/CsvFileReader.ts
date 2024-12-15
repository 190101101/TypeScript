import fs from 'fs';
import path from 'path';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const filePath = path.join(__dirname, '..', this.filename);
    console.log('--');
    console.log(filePath);
    console.log('--');
    this.data = fs
      .readFileSync(filePath, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
    );
  }
}
