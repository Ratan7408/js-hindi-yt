// Promitive datatypes 

// 7 types  : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null    // null 
let userEmail;

const id = Symbol('123')
const anotherId = System('123')

console.log(id == anotherId); // false

const bigNumber = 4298142524464845664n //Big Int look like this




// Reference Type (Non - primitive)

// Arrays, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "ratan",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
    
}


// **************Memory**********

// Stack (Primitive) ,Heap (Non primitive)

let myYoutubename = "ratan"
let anothername = vinayak

console.log(myYoutubename);  //ratan

console.log(anothername); //vinayak
