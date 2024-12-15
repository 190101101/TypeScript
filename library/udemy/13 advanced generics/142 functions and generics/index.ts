class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number) {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const nums = new ArrayOfAnything<number>([4, 3, 1, 2]);
const strs = new ArrayOfAnything<string>(['z', 'x', 'c']);

console.log(nums.get(2));
console.log(strs.get(2));

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3]);
printAnything<string>(['z', 'x', 'c']);
