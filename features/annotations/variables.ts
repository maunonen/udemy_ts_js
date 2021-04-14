let apples : number = 5
let speed : string =  'fast';
let hasName : boolean =  true;

let nothingMuch : null = null
let nothing  : undefined = undefined

let now : Date = new Date();

// array
let colors : string[] = ['red', 'green', 'blue']
let myNumbers : number[] = [1, 2, 3]
let truths : boolean[] =  [true, false]

// classes
class Car {

}
let car : Car = new Car()

// object literal
let point : {x: number; y : number} = {
    x: 10,
    y: 5,
}

//function
const logNumber : ( i : number) => void = ( i : number ) => {
    console.log(i);
}

// WHen to use annotaions
/*
    1. Function return the annotation
*/
const json = '{ "x" : "10", "y" : "5" }';
const coordinates =  JSON.parse(json)

console.log(coordinates)