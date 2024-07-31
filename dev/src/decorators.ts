class Car {
  color: string = 'white';

  get formattedColor(): string {
    return `This car color is ${this.color};`;
  }

  @testDecorator
  drive(): void {
    console.group('I am driving');
  }
}

function testDecorator(target: any, key: string): void {
  console.log('Target', target);
  console.log('Key', key);
}

testDecorator(Car.prototype, 'drive');
