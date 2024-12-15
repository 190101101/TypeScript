const addOne = (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
};

const addThree = (a: number): number => {
  return a + 3;
};

const add = (a: number, b: number): number => {
  return a + b;
};

//? console.log(add(100, 1));

class HoldNumber {
  data: number = 0;
}

class HoldString {
  data: string = '';
}

const holdNumber = new HoldNumber();
holdNumber.data = 111;

const holdString = new HoldString();
holdString.data = 'zxc';

//* generics
class HoldAnything<TypeOfData> {
  data: TypeOfData = {} as TypeOfData;
}

const holdAnythingNumber = new HoldAnything<number>();
holdAnythingNumber.data = 111;
console.log(holdAnythingNumber.data);

const holdAnythingString = new HoldAnything<string>();
holdAnythingString.data = 'zxc';
console.log(holdAnythingString.data);

//* Or
//* generics
class HoldAnything2<T> {
  data: T = {} as T;
}
