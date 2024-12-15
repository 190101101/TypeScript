class Car {
  @testDecorator
  color: string = 'white';

  get formattedColor(): string {
    return `This car color is ${this.color};`;
  }

  @logError('Darn! The car is crashed')
  drive(): void {
    throw new Error();
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Car().drive();
