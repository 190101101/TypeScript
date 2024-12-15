class BubbleSort {
  constructor(public collection: number[] | string[]) {}

  public sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - 1 - i; j++) {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const p1 = [5, 2, 4, 3, 1];
const bubbleSort = new BubbleSort(p1);
bubbleSort.sort();
console.log(bubbleSort.collection);
