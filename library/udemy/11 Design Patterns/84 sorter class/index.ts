class BubbleSort {
  constructor(public collection: number[]) {}

  public sort(): void {
    console.log(this.collection);
  }
}

const p1 = [6, 1, 3, 5, 4, 2, 8, 9, 7];
const bubbleSort = new BubbleSort(p1);
bubbleSort.sort();
