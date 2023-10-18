const drink = {
    color:'brown',
    cabonated:true,
    sugar:40
}

const cola: [string, boolean, number] = ['brown', true, 40];

//err
// cola[0] = 1234

//true
// cola[0] = 'asd'

// * type alias
type Drink = [string, boolean, number];
const cola2:Drink = ['brown', true, 30]
const sprite:Drink = ['clear', true, 30]
const coffe:Drink = ['black', false, 0]

console.log(cola2);
console.log(sprite);
console.log(coffe);


const carSpecs:[number, number] = [400, 3354]
const carSpeceObj = {
    horsepower:400,
    weight:3354
}