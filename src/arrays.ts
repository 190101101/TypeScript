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