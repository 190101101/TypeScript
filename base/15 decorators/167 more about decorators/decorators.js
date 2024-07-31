const car = { make: 'honda', year: 2010 };
Object.getOwnPropertyDescriptor(car, 'make');
Object.defineProperty(car, 'make', {
  writable: false,
});

car.make = 'mazda'; // mazda
car.make; // honda
