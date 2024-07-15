const bubbleSort = (p1: number[]) => {
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p1.length - i - 1; j++) {
      if (p1[j] > p1[j + 1]) {
        const temp = p1[j + 1];
        p1[j + 1] = p1[j];
        p1[j] = temp;
      }
    }
  }
};

const p1: number[] = [6, 5, 4, 3];
console.log(p1);
bubbleSort(p1);
console.log(p1);
