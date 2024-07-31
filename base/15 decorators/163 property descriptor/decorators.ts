class Car {
  color: string = 'white';

  get formattedColor(): string {
    return `This car color is ${this.color};`;
  }

  @logError
  drive(): void {
    throw new Error();
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log('Target', target);
  console.log('Key', key);
  console.log('Desc', desc);
}

const car = { make: 'honda', year: 2010 };
Object.getOwnPropertyDescriptor(car, 'make');
Object.defineProperty(car, 'make', {
  writable: false,
});

car.make = 'mazda'; // mazda
car.make; // honda
