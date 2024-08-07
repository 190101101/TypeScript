interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class BubbleSort {
  constructor(public collection: Sortable) {}

  public sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - 1 - i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
