// Primitive Data Types
/*
  Numbers - Integers, floats
  Strings - Any data under single quote, double quote or backtick quote
  Booleans - true or false value
  Null - empty value or no value
  Undefined - a declared variable without a value
  Symbol - A unique value that can be generated by Symbol constructor
*/
/*
Example:

  let word = 'JavaScript'
  word[0] = 'Y'

  let numOne = 3
  let numTwo = 3

  console.log(numOne == numTwo)      // true

  let js = 'JavaScript'
  let py = 'Python'

  console.log(js == py)             //false 

  let lightOn = true
  let lightOff = false

  console.log(lightOn == lightOff) // false
*/

// Non-primitive Data Types
/*
  Objects
  Arrays
*/
/*
Example:
    let nums = [1, 2, 3]
  nums[0] = 10

  console.log(nums)  // [10, 2, 3]

  let nums = [1, 2, 3]
  let numbers = [1, 2, 3]

  console.log(nums == numbers)  // false

  let userOne = {
  name:'Arda',
  role:'Developer',
  country:'Türkiye'
  }

  let userTwo = {
  name:'Arda',
  role:'Developer',
  country:'Türliye'
  }

  console.log(userOne == userTwo) // false


    let nums = [1, 2, 3]
  let numbers = nums

  console.log(nums == numbers)  // true

  let userOne = {
  name:'Arda',
  role:'Developer',
  country:'Türkiye'
  }

  let userTwo = userOne

  console.log(userOne == userTwo)  // true
*/

// Declaring Number Data Types
let age = 21
const gravity = 9.81 // we use const for non-changing values, gravitational constant in m/s2
let mass = 75        // mass in kilogram
const PI = 3.14      // pi a geometrical constant

// More exacmpes

const boilingPoint = 100 // tenoerature in oC boiling point of water which is constant
const bodyTemp = 37 // oC average human body temperature which is constant

console.log(age,gravity,mass,PI,boilingPoint,bodyTemp)

// Mah Object
const newPI = Math.PI
console.log(newPI) // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(newPI))             // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(newPI))             // 3 rounding down

console.log(Math.ceil(newPI))              // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5 returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20 returns the maximum value

const randNum = Math.random()              // creates random number between  o to 0.99999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11) //creates random number between 0 and 11
console.log(num)

// Absolute value
console.log(Math.abs(-10))                 // 10

// Square Root
console.log(Math.sqrt(100))               // 10
console.log(Math.sqrt(2))                 // 1.41413

// Power
console.log(Math.pow(3,2))                // 9
console.log(Math.E)                       // 2.718  Math.E() represents the base of the natural logarithm, known as the Euler's constant.

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))                  // 0.6931471805599453
console.log(Math.log(10))                 // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)                     // 0.6931471805599453
console.log(Math.LN10)                    // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

// Random Number Generator
// The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...

let randomNum = Math.random() // generates 0 to 0.999...
let numBtnZeroAndTen = randNum * 11
console.log(numBtnZeroAndTen) // that gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

// Strings

let space = ' '   // an empty space tring
let firstName = 'Arda'
let lastName = 'Şalvarlılar'
let country = 'Türkiye'
let city = 'Izmir'
let language = 'javaScript'
let job = 'Developer'
let myAge = 21
let quote = "the saying 'Seeing is Believing' is not correct in 2020"
let quoteWithBackTick = `the saying 'Seeing is Believing' is not correct in 2020`

// String Concatenation
let fullName = firstName + space + lastName
console.log(fullName)
let personInfoOne = fullName + '. I am ' + myAge + '. I live in ' + country
console.log(personInfoOne)

// Long Literal String
const paragraph = "My name is Arda Şalvarlılar. I live in Türkiye, Izmir.\
I am a basketball player and I love playing. I know HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

// Escape Sequences in Strings

/*  
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// Template Literals (Template Strings)
//Syntax
// `String literal text`
// `String literal text ${expression}`

// Exampe 1:
console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// Exampe 2:
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}`
let personInfoThree = `I am ${fullName}. I live in ${city},${country}. I am a ${job}. I know ${language}`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a >b}`)

// Sting Methods
let js = 'javaScript'
console.log(js.length)        // 10
console.log(firstName.length) // 4

let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter) // J

let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter) // t

let lastIndex = string.length - 1
console.log(lastIndex) // 9
console.log(string[lastIndex]) //t
// -------------------------------------------------
// .toUpperCase()
console.log(string.toUpperCase()) // JAVASCRIPT
console.log(firstName.toUpperCase()) // ARDA
console.log(country.toUpperCase()) // TÜRKİYE
// -------------------------------------------------
// .toLowerCase()
console.log(string.toLowerCase()) // javascript
console.log(firstName.toLowerCase()) // arda
console.log(country.toLowerCase()) // türkiye
// -------------------------------------------------
// .substr() It takes two arguments, the starting index and number of characters to slice.
console.log(string.substr(4,6))    // Script
console.log(country.substr(3, 4))   // iye
//---------------------------------------------------
// .substing() It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script
console.log(country.substring(0, 3))   // TÜRK
console.log(country.substring(3, 7))   // kiye
console.log(country.substring(3))      // kiye
//---------------------------------------------------
// .split()
string = '30 Days Of JavaScript'
console.log(string.split()) // changed to an array ['30 Days Of JavaScript']
console.log(string.split(' ')) // split to an array at space ['30', 'Days', 'Of', 'JavaScript']

console.log(firstName.split()) //changed to an array
console.log(firstName.split(''))// split to an array at each letter ['A', 'r', 'd', 'a']

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(',')) //  ['Finland', ' Sweden', ' Norway', ' Denmark', ' and Iceland']
console.log(countries.split(', '))//  ['Finland', 'Sweden', 'Norway', 'Denmark', 'and Iceland']
//---------------------------------------------------
// .trim()
string = '       30 Days of JavaScript       '
console.log(string)
console.log(string.trim(''))

firstName = '   Arda   '
console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
//---------------------------------------------------
// .replace()
string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false
//--------------------------------------------------
// .replace()
// string.replace(oldsubsting, newsubstring)
string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python'))
console.log(country.replace('Finland','Türkiye'))
//--------------------------------------------------
// .charAt()
console.log(string.charAt(0)) //3
string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
//--------------------------------------------------
// .charCodeAt()
// string.charCodeAt(index)
console.log(string)
console.log(string.charCodeAt(3)) // D ASCII number is 68
lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116
//---------------------------------------------------
// .indexOf()
string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1
//----------------------------------------------------
// .lastIndexOf()
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
//------------------------------------------------------
// .concat()
string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

country = 'Fin'
console.log(country.concat("land")) // Finland
//------------------------------------------------------
//string.startsWith(substring)
string = 'Love is the best to in this world'
//takes substring parameter to check is the word starts with that substring and returns boolean
console.log(string.startsWith('Love'))// true
console.log(string.startsWith('love'))// false
//------------------------------------------------------
// string.endsWith(substring)
string = 'love is the most overful feeling in the world'
console.log(string.endsWith('world'))// true
console.log(string.endsWith('love'))// false
//------------------------------------------------------
// string.search(substring)
// takes a substring as an argument and returns the word's first char's index
string = 'I love javaScript. If you do not love javaScript what else can you love'
console.log(string.search('love')) // 2
console.log(string.search(/javaScript/)) // 7 
//-----------------------------------------------------
// string.match() 
string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
string = 'I love javaScript. If you do not love javaScript what else can you love'
console.log(string.match('love'))
// ['love', index: 2, input: 'I love javaScript. If you do not love javaScript what else can you love', groups: undefined]
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
//-------------------------------------------------------
// string.repeat(n)
string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

// CHECKING DATA TYPES AND CASTING  
// to check the data type of certain variable we use the typeof method

let myFirstName = 'Arda' //string
let myLastName = 'Şalvarlılar' //string
let myCountry = 'Türkiye' //string
let myCity = 'Izmir' // string
let thisMyAge = 21 // number
let myJob // ubdefined a value bot assigned 
console.log(typeof myFirstName) //string
console.log(typeof myLastName) // string
console.log(typeof 10) // number
console.log(typeof 3.14) // number
console.log(typeof true) // boolean
console.log(typeof false) // boolean
console.log(typeof NaN) // number
console.log(typeof myJob) // undefined
console.log(typeof undefined) // undefined
console.log(typeof null) // object
//---------------------------------------------------------

// Changing Data Type 
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
/*
STRING TO INTEGER(INT) the shortcase of integer is int
parseInt()
Number 
Plus sign
*/

let myNum = '10' // this is not a number this is a string because of te quotes
let myNumInt = parseInt(myNum)
console.log(myNumInt) // 10 as a number

myNum = '20'
myNumInt = Number(myNum) // same useage with parseInt()
console.log(myNumInt)

myNum = '30'
myNumInt = +myNum // same with parseInt and Number instead of a word an parantheses assigned with plus sign
console.log(myNumInt)

/*
STRING TO FLOAT
parseFloat()
Number()
plus sign
*/

myNum = '9.81' // this is not a number this is a string because of te quotes
let myNumFloat = parseFloat(myNum)
console.log(myNumFloat)

myNumFloat = Number(myNum)
console.log(myNumFloat)

myNumFloat = +myNum
console.log(myNumFloat)

/*
FLOAT TO INT
parseInt()
*/
let globeGravity = 9.81
let gravityInt = parseInt(globeGravity)
console.log(gravityInt)// 9