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
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Darn! The car is crashed');
    }
  };
}

new Car().drive();
