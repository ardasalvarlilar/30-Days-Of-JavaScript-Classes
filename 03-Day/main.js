//BOOLEANS

let isLightOn = true
let isRaining = false
let isHungary = true
let isMarried = false
let truValue = 4 > 3 // true  
let falseValue = 4 < 3 // false

/* Truthy values
all numbers even negatives ara truthy except zero
all strings are truthy except an empty string ('')
the boolean true
*/

/*
Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

// Undefined 
let firstName 
console.log(firstName) //not defined, because it is not assigned to a value yet

// Null
let empty = null
console.log(empty) // -> null , means no value

// OPERATORS

//Assignment Operators
// an equal sign in javaScript is am assignment operator

let FirstName = 'Arda'
let country = 'Türkiye'

/*
Arithmetic Operators
Addiction(+) a + b
Subtraction(-) a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b
*/

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100  // legth in meter

// Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) // 314m

const gravity = 9.81 // in m/s2
let mass = 75   // in kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight) // 735.75 N(Newton)

const boilingPoint = 100 // temperature oC, Boiling of water
const bodyTemp = 37 // body temp in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC\nThe gravitiy of earth is ${gravity} m/s2`)


// Comparison Operators
/*

Operator            Name                                  Example
==            equal in value only                         x == y
===    equal in value and type exactly equal              x === y
!=               not equal                                x != y
>                greater                                  x > y
<                less than                                x < y
>=               greater than or equal to                 x >= y
<=               less than or equal to                    x <= y

*/

// Example: Comparison Operators
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// LOGICAL OPERATORS

// && ampersand operator example
let check = 4 > 3 && 10 > 5  // true && true => true
check = 4 > 3 && 10 < 5 // true && false => false
check = 4 < 3 && 10 < 5 // false && false => false

// || pipe or opreator example 
check = 4 > 3 || 10 > 5         // true  || true => true
check = 4 > 3 || 10 < 5         // true  || false => true
check = 4 < 3 || 10 < 5         // false || false => false

//! Negation examples
check = 4 > 3                     // true
check = !(4 > 3)                  //  false
isLightOn = true
let isLightOff = !isLightOn           // false
isMarried = !false                // true

// Increment Operator

// pre-increment
let count = 0
console.log(++count) // 1
console.log(count) // 1

// post-increment
count = 0
console.log(count++) // 0
console.log(count)  // 1

//Decrement Operator

// pre-decrement 
count = 0
console.log(--count) // -1
console.log(count) // -1

//post-increment
console.log(count--) // 0
console.log(count) // -1

// Ternary Operators
isRaining = true
isRaining
  ? console.log('You need a rain coat')
  : console.log('No need for a rain coat')

isRaining = false
isRaining
  ? console.log('You need a rain coat')
  : console.log('No need for a rain coat')

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

number = -5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


// WINDOW METHODs

// window alert() method
// alert()
// alert('Welcome to 30DaysOfJavaScript')

// window prompt() method
// prompt('required text', 'optional text')
//  number = prompt('Enter number', 'number goes here')
// console.log(number)

// window confirm() method
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

// DATE OBJECT
// creating a time object
let now = new Date()
console.log(now) // Fri Jun 16 2023 13:09:15 GMT+0300 (GMT+03:00)

// Geting full year
console.log(now.getFullYear()) // 2023

// Geting Month
console.log(now.getMonth()) // 5

// Getting Date
console.log(now.getDate()) // 16

//Getting Day
console.log(now.getDay()) // 5

// Getting Hour
console.log(now.getHours()) // 13

// Getting Minutes
console.log(now.getMinutes()) // 14

// Getting Seconds
console.log(now.getSeconds()) // 20

// Getting time
console.log(now.getTime())  // 1686910506406 this is the number of seconds passed from January 1, 1970 to June 16 2023

// Using Date.now()
const allSeconds = Date.now()
console.log(allSeconds) //1686910607863
const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

// human readable time format. Example:
now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) //16/6/2023 13:18
