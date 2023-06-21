// SCOPE  
/*
We declare variable to store different data types. To declare a variable we use the key word var, let and const.
Variables scopes can be:
Global
Local
Variable can be declared globally or locally scope. We will see both global and local scope. Anything declared without let, var or const is scoped at global level.
*/

// Window Global Object

//scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible

// Global Scope
/*
globally declared variable can be accessed every where in the same file.
It can be global to the file or it can be global relative to some block of codes.
*/

//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

// Local Scope
/*
A variable declared as local can be accessed only in certain block code.

Block Scope
Function Scope

*/

//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined


// OBJECT

// Creating an empty object
// const person = {}

// Creating an object with values

/*
Now, the person object has firstName, lastName, age, location, skills and isMarried properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

Let us see some examples of object. Each key has a value in the object.
*/

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

// const aPerson = {
//   firstName: 'Arda',
//   lastName: 'Şalvarlılar',
//   age: 21,
//   country: 'Switzerland',
//   city: 'Zurich',
//   skills:[
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   isMarried: false
// }
// console.log(aPerson)

// Getting values from an object
/*
using . followed by key name if the key-name is a one word
using square bracket and a quote
*/

const aPerson = {
  firstName: 'Arda',
  lastName: 'Şalvarlılar',
  age: 21,
  country: 'Switzerland',
  city: 'Zurich',
  skills:[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: false,
getFullName: function() {
  return `${this.firstName}${this.lastName}`
},
'phone number': '+23425652523'
}
// accessing values using
console.log(aPerson.firstName)
console.log(aPerson.lastName)
console.log(aPerson.age)
console.log(aPerson.location) // undefined

// value can be accessed using square bracket and the key name
console.log(aPerson['firstName'])
console.log(aPerson['lastName'])
console.log(aPerson['age'])
console.log(aPerson['age'])
console.log(aPerson['location']) // undefined


// const person = {
//   firstName: 'Arda',
//   lastName: 'Şalvarlılar',
//   age: 21,
//   country: 'Switzerland',
//   city: 'Zurich',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// console.log(person.getFullName())
// Arda Şalvarlılar

// setting a new key for an object

const person = {
  firstName: 'Arda',
  lastName: 'Şalvarlılar',
  age: 21,
  country: 'Switzerland',
  city: 'Zurich',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

person.nationality = 'Turkish'
person.country = 'Switzerland'
person.title = 'Developer'
person.skills.push('Swift')
person.skills.push('SasS')
person.isMarried = false

person.getPersonInfo = function(){
  let skillsWithoutLastSkill = this.skills.splice(0,this.skills.length -1).join(', ')
  let lastSkill = this.skills.splice(this.skills.length -1)[0]
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} ,is a ${this.title}.\nHe lives in ${this.country}.\nHe can code ${skills}`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
/*
Arda Şalvarlılar ,is a Developer.
He lives in Switzerland.
He can code HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Swift, and SasS
*/

// Object Methods
/*
There are different methods to manipulate an object. Let us see some of the available methods.
Object.assign: To copy an object without modifying the original object
*/

const newPerson = {
  firstName: 'Arda',
  age: 21,
  country: 'Switzerland',
  city: 'Zurich',
  skills: ['HTML','CSS','JS'],
  title: 'Developer',
  address:{
    street: 'Main st.',
    pobox: 2000,
    city: 'Zurich'
  },
  getPersonInfo: function(){
    return `I am ${this.firstName} and i live in ${this.country},${this.city}. I am ${this.age}`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({},newPerson)
console.log(copyPerson)

// Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

const key = Object.keys(copyPerson)
console.log(key) //  ['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) // ['street', 'pobox', 'city']

// Getting object values using Object.values()
// Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values) // ['Arda', 21, 'Switzerland', 'Zurich', Array(3), 'Developer', {…}, ƒ]

// Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries) 

/*
Checking properties using hasOwnProperty()
hasOwnProperty: To check if a specific key or property exist in an object
*/
console.log(copyPerson.hasOwnProperty('name')) // false
console.log(copyPerson.hasOwnProperty('score')) // false
