let score = "33abc"

console.log(typeof score)

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber)
console.log(ValueInNumber) //NaN is Not a Number

// when score = "33"; output will be 33
// when score = "33abc"; output will be NaN
// when score = null; output will be 0
// when score  =  undefined; output will be NaN
// when score = true/false; output will be 1/0
// when score = "shivani"(any string); output will be NaN

let isLoggedIn = 1

let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn)

//when isLoggedIn = 1; output will be true
//when isLoggedIn = 0; output will be false
//when isLoggedIn = ""(empty string); output will be false
//when isLoggedIn = "shivani"; output will be true

let someNumber = 33

let StringNmuber= String(someNumber) //it will become string
console.log(StringNmuber)

// ************************Operations*************************

let value = 3
let negValue = -value
console.log(negValue)

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/3)
//console.log(2**3)
//console.log(2%3)

let str1 =  "Hello"
let str2 = " Shivani"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // output -> 12
console.log(1 + "2") // output -> 12
console.log("1"+ 2 + 2) // output -> 122
console.log(1 + 2 + "2") // output -> 32
 
// NOTE: Use parenthesis for better code writing specially in Operations

// console.log(+true) // possible; output -> 1 but it is confusion code, should be avoided.
// console.log(true+) // not possible; output -> error
// console.log(+"") // possible; output -> 0 as it is empty string.

let GameCounter = 100
GameCounter++;
console.log(GameCounter)

//link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
