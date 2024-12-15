import 'reflect-metadata';

@controller
class Car {
  color: string = 'black';

  @get('/login')
  drive(): void {
    console.log('i am driving');
  }
}

function get(path: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Car) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    router.get(path, middleware, target.prototype[key]);
  }
}
