const colors = ['red', 'green', 'yellow'];

const dates = [new Date(), new Date()];


const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['lemon'],
]

const fruitsByColor2:string[][] = []

// help with inference whenn extracting values
const color = colors[0];
const color1 = colors.pop();

// prevent incompatible values
// colors.push(true);

//help with map
colors.map((color:string) : string => {
    return color.toUpperCase();
})

//flexible types
const importantDates = [new Date, '2023-18-10'];
const importantDates2 = [new Date];
const importantDates3:(Date | String | number)[] = [new Date];

importantDates3.push('2023-18-10');
importantDates3.push(new Date());
importantDates3.push(5);
console.log(importantDates3);