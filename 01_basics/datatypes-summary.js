//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "honey",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap(non-primitive)

let myName = "pradhuman"

let newName = myName
newName = "hello"


console.log(myName);
console.log(newName);

let user1 = {
    email:"hello@gmail.com",
    upi:"user@ybl"

}

let user2 = user1