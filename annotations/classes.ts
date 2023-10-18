class Vehicle{
    drive():void{
        console.log('i am driving');
    }

    stop():void{
        console.log('i am stopped');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.stop();