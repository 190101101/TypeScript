class Vehicle {
  /*
  color: string;

  public constructor(color: string) {
    this.color = color;
  }
  */

  public constructor(public color: string) {}

  public drive(): void {
    console.log(`i'm driving!`);
  }

  public stop(): void {
    console.log(`i've stoped!`);
  }

  protected beep(): void {
    console.log(`Beeeeeep!`);
  }
}

class Car extends Vehicle {
  private driving(): void {
    console.log(`i'm a car and i'm driving!`);
  }

  public startDrivingProcess(): void {
    this.driving();
    this.beep();
  }
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);
vehicle.drive();
vehicle.stop();

/*
const car = new Car();
car.startDrivingProcess();
car.stop();
*/
