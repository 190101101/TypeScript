import 'reflect-metadata';

//1
const box = {
  color: 'black',
};

// metadata for object
Reflect.defineMetadata('note', 'hello', box);
Reflect.defineMetadata('width', 30, box);
console.log(box);

const note = Reflect.getMetadata('note', box);
const width = Reflect.getMetadata('width', box);

// metadata for object property
Reflect.defineMetadata('note', 'hello', box, 'color');
const note2 = Reflect.getMetadata('note', box, 'color');
console.log(note2);

//2
class Car {
  color: string = 'black';

  @markFunction('big secret')
  drive(): void {
    console.log('i am driving');
  }
}

function markFunction(secret: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata('info', secret, target, key);
  };
}

const info = Reflect.getMetadata('info', Car.prototype, 'drive');
console.log(info);
