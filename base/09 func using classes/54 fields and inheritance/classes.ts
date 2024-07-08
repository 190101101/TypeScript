class Vehicle {
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
  public constructor(public wheels: number, color: string) {
    super(color);
  }
  private driving(): void {
    console.log(`i'm a car and i'm driving!`);
  }

  public startDrivingProcess(): void {
    this.driving();
    this.beep();
  }
}

const vehicle = new Vehicle('black');

const car = new Car(4, 'red');
car.startDrivingProcess();
car.stop();
