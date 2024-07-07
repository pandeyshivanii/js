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