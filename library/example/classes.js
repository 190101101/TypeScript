"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    drive() {
        console.log(`i'm driving!`);
    }
    stop() {
        console.log(`i've stoped!`);
    }
    beep() {
        console.log(`Beeeeeep!`);
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    driving() {
        console.log(`i'm a car and i'm driving!`);
    }
    startDrivingProcess() {
        this.driving();
        this.beep();
    }
}
const vehicle = new Vehicle('black');
const car = new Car(4, 'red');
car.startDrivingProcess();
car.stop();
