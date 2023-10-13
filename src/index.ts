const oranges:number = 5;
let speed:string = 'fast';
let hasStatus:boolean = true;

let nothing1:null = null;
let nothing2:undefined = undefined;

//built-in objects
let now:Date = new Date();

//array
let colors:string[] = ['black', 'green', 'yellow', 'blue'];
let numbers: number[] = [1,2,3,4]
let results: boolean[] = [true, false, true]

//classes

class Car{

}

let car:Car = new Car();

//object literal
let point:{x:number; y:number} = {
    x:10,
    y:20
}

console.log(point);