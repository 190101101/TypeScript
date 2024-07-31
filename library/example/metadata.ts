import 'reflect-metadata';

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
