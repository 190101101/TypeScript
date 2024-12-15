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

  get(index: number) {
    return this.collection[index];
  }
}

const nums = new ArrayOfAnything<number>([4, 3, 1, 2]);
const strs = new ArrayOfAnything<string>(['z', 'x', 'c', 'v']);
console.log(nums.get(2));
console.log(strs.get(2));
