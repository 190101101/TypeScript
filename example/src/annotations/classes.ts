class Vehicle{

    constructor(public color:string){}

    public stop():void{
        console.log('i am stopped');
    }
    
    protected beep():void{
        console.log('beeep');
    }
}

class Car extends Vehicle{
    
    constructor(public wheels:number, color:string){
        super(color);
    }

    private drive():void{
        console.log('i am a car and i m driving')
    }
    
    public startDrivingProcess():void{
        this.drive();
        this.beep();
    }
}

const vehicle = new Vehicle('green');
console.log(vehicle.color);

const car = new Car(4, 'green');
car.startDrivingProcess();
car.stop();


