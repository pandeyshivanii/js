// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue= 100.3

const isLoggenIn= false
const outsideTemp= null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id==anotherId)

const BigNumber = 3565411598741111125n // BigInt

// Reference(Non-Primitive)

// Array, Objects, Functions

const heroes= ('shaktiman', 'naagraj', 'doga')
let myObj= {
    name= "shivani",
    age= 22
}

const MyFunction = function(){
    console.log("Hello world");
}

// to study
// https://262.ecma-international.org/5.1/#sec-11.4.3
