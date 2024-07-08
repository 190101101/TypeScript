class Vehicle {
  drive(): void {
    console.log(`i'm driving!`);
  }

  stop(): void {
    console.log(`i've stoped!`);
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.stop();
