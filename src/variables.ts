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

class Car{}

let car:Car = new Car();

//object literal
let point:{x:number; y:number} = {
    x:10,
    y:20
}

// functions
const logNumber: (i:number) => void = (i:number) => {
    console.log(i);
};

logNumber(9);

//when to use type annotations
// 1 function returns the 'any' type

const json = `{"x":10, "y":20}`;
const coordinates:{x:number, y:number} = JSON.parse(json);
console.log('coordinates:', coordinates);

// 2  when we declare a variable on one line and initialize it later

let words = ['one', 'two', 'three'];
let isTwo:boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'two'){
        isTwo=true;
    }
}


// 3 variables whoes type cant be inferrad

let myNumbers = [-10, -1, 12];
let positiveNumber:boolean|number = false;

for(let i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] > 0){
        positiveNumber = myNumbers[i];
    }
}
