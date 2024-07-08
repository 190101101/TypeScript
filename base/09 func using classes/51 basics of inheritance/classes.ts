class Vehicle {
  drive(): void {
    console.log(`i'm driving!`);
  }

  stop(): void {
    console.log(`i've stoped!`);
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log(`i'm a car and i'm driving!`);
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.stop();

const car = new Car();
car.drive();
car.stop();
