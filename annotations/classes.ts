class Vehicle{
    drive():void{
        console.log('i am driving');
    }

    stop():void{
        console.log('i am stopped');
    }
}

class Car extends Vehicle{
    drive():void{
        console.log('i am a car and i m driving')
    }
}

const car = new Car();
car.drive();
car.stop();