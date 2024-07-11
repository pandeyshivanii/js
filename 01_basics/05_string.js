const name= "shivani"
const repoCount = 30
 // console.log(name + repoCount + "value") -> outdated way of writing

 console.log(`Hello my name is ${name} and i have ${repoCount} repositories on github `) 

 // modern way of writing strings(string interpolation)

const gameName= new String ('shivanigame')

console.log(gameName[0]) //access key pair
console.log(gameName.__proto__) // access prototype 

console.log(gameName.length) // get length of the string
console.log(gameName.toUpperCase) //convert lowercase string to uppercase

console.log(gameName.charAt(2)) // get charachter at the given index position
console.log(gameName.indexOf('i')) // get index number of the given element in the string

const newString= gameName.substring(0,4)
console.log(newString) // output -> shiv; as it will fetch elements from 0-3 index position #it contains only positive index value

const anotherString = gameName.slice(-4,4) // output-> game; as it will fetch elements at negative index positions also

const newStringOne= "    shivani   "
console.log(newStringOne)
console.log(newStringOne.trim()) // output-> shivani; removes spaces at start and at end. if you want to remove only start/end spaces,you need to write trimStart/trimEnd

const url= "https://shivani.com/shivani%39singing"
// to replace any element from the url use url.replace and then write the element you want to replace and the element you want to insert 
console.log(url.replace('%39','-'))

console.log(url.includes('shivani')) //searches the element in the url, if yes 'ture' else 'false'

// Now if we want to convert any string into array based on anything like '-','spaces','any element':
console.log(gameName.split(' '))


 
