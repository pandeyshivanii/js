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

//******************************MEMEORY*******************

// Stack(Primitive) , Heap(Non-Primiitve)

let myYoutubeName = "shivanipandeyoutube"

let anotherName = myYoutubeName
anotherName = "shivaniyoutube"

console.log(myYoutubeName) //ouutput-> shivanipandeyoutube
console.log(anotherName) // output-> shivaniyoutube

//In short in Stack we get the copy of the value so if you'll make any changes in the original value, the copied value won't change. So it follows "call by value".
//In short in Heap we directly get the access to original value and if we'll make any changes to it, every value will be changed.

