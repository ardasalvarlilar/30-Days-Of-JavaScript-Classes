// FUNCTION

// Function declaration
function functionName(){
  // code
}
functionName() // calling function bt its name and with parentheses

// function without a parameter and return
function square(){
  let num = 2
  let sq = num * num
  console.log(sq)
}
square() // 4

function addTwoNumbers(){
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo
  console.log(sum)
}
addTwoNumbers() // a functioun has to be called by its name to be executed

function printFullName(){
  let firstName = 'Arda'
  let lastName = 'Şalvarlılar'
  let space = ' '
  let fullName = firstName + space + lastName
  console.log(fullName)
}
printFullName() // calling a function

// Function returning value

function printMyName(){
  let firstName = 'Arda'
  let lastName = 'Şalvarlılar'
  let space = ' '
  return fullName = firstName + space + lastName
}
console.log(printMyName())

function myTwoNumbers(){
  let numOne = 2
  let numTwo = 3
  return total = numOne + numTwo
}
console.log(myTwoNumbers()) // 5
console.log('************************************')

// Function with parameter

// function functionName(param1){
//   // code 
// }
// functionName(param1)

function areaOfCircle(r){
  let area = Math.PI * r *r
  return area
}
console.log(areaOfCircle(10)) // 314.159

// Function with two parameter
// functionName(parm1, parm2) // during calling or invoking two arguments needed
// // Function without parameter doesn't take input, so lets make a function with parameters

function sumTwoNumbers(numOne,numTwo){
  let sum = numOne + numTwo
  return sum
}
console.log(sumTwoNumbers(10, 20)) // 30
// If a function does not retırn it it does not store date, so it should return

function sumOfNumbers(numOne, numTwo){
  let sum = numOne + numTwo
  return sum
}
console.log(sumOfNumbers(10,20))

function personalInfo(firstName, lastName){
  return `${firstName} ${lastName}`
}
console.log(personalInfo('Arda', 'Şalvarlılar'))

console.log('********************************************************')

// Function with many parameters
/* 
function functionName(parm1, parm2, parm3,...){
  code goes here
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
*/ 

//this function below takes array asa parameter and sum up the numbers in array
function sumArrayValues(arr){
  let sum = 0
  for(let i = 0; i < arr.length;i++){
    sum = sum + arr[i]
  }
  return sum
}
let numbers = [1,2,3,4,5]
console.log(sumArrayValues(numbers)) // 15

function areaOfACircle(radius) { 
  let area = Math.PI * radius * radius
  return area
}
console.log(areaOfACircle(10)) // 314.159

console.log('***********************************************************')
// Function with unlimited number of parameters
// function sumAllNums(){
//   console.log(arguments)
// }
// sumAllNums(1,2,3,4) // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function declaration
function sumAllNumbers(){
  let sum = 0
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}
console.log(sumAllNumbers(1,2,3,4)) // 10
console.log(sumAllNumbers(10,20,13,40,10)) // 93
console.log(sumAllNumbers(15,20,30,25,10,33,40)) // 173

// Unlimited number of parameters in arrow function
const sumAllNums = (...args) =>{
  console.log(args)
}
sumAllNums(1,2,3,4) // return an array [1,2,3,4]

// function declaration
const numberSum = (...args) =>{
  let sum = 0
  for(const element of args){
    sum += element
  }
  return sum
}
console.log(numberSum(1,2,3,4)) // 10
console.log(numberSum(10,20,13,40,10)) // 93
console.log(numberSum(15,20,30,25,10,33,40)) // 173

// anonymous function
// Anonymous function or without name
const anonymousFunc = function(){
  console.log('I am an anonymous function and my value is stored in anonymousFunc')
}
console.log('****************************************')
// Function expression
/*
Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.
*/

const squared = function(n){
  return n * n
}
console.log(squared(2)) // 4

// Self invoking functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.
let mySquare = (function(n){
  console.log(n * n)
})(3)
mySquare // 9  but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n){
  return n * n
})(10)
console.log(squaredNum) // 100

console.log('-----------------------------------------------------')

// Arrow function

function kare(n){
  return n * n
}
console.log(kare(2)) // 4

const karesi = (x) => { // if we have only one parameter no need to parantheses
  return x * x 
}
console.log(karesi(3)) // 9

// if we have only one line in the code block, it can be written as follows, explicit return
let karelendi = n => n * n
console.log(karelendi(4)) // 16

const changeToUpperCase = arr =>{
  let newArr = []
  for(const element of arr){
    newArr.push(element.toUpperCase())
  }
  return newArr
}
console.log(changeToUpperCase(['finland','sweden','germany','norway','denmark']))

const myFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}
console.log(myFullName('Arda','Şalvarlılar'))

const itsMe = (firstName, lastName) => `${firstName} ${lastName}`
console.log(itsMe('Arda', 'Şalvarlılar'))

// Function with default parameters

function greetings(name = 'Peter'){
  let message = `${name} welcome to 30 Days Of JavaScript`
  return message 
}
console.log(greetings()) // in this case if there is no input or any value to pass the function as a parameter we can set a default value to the parameter
console.log(greetings('Arda'))

function generateFullName(firstName = 'Bot', lastName = 'Yorgi'){
  let space = ' '
  let fullName = firstName + space + lastName 
  return fullName
}


// syntax
// Declaring a function
// function functionName(param = value) {
//   //codes
// }
console.log(generateFullName())
console.log(generateFullName('John','Doe'))

function calculateAge(birthYear, currentYear = 2023){
  let age = currentYear - birthYear
  return age
}

console.log('Your age is : ', calculateAge(2002))

function weightOfObjects(mass, gravity = 9.81){
  let weight = mass * gravity + ' N'
  return weight
}
console.log('Weight of an object in Newton', weightOfObjects(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton', weightOfObjects(100, 1.62)) // 1.62 gravity at the surface of Moon
console.log('*******************************************************')

// Let us see how we write the above functions with arrow functions
/*
// syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
*/
const greet  = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript'
  return message
}
console.log(greet())
console.log(greet('John'))

const fullGenerateName = (firstName = 'John', lastName = 'Doe') => {
  let space = ' '
  let fullName = firstName + space +lastName
  return fullName
}
console.log(fullGenerateName())
console.log(fullGenerateName('Arda','Şalvarlılar'))

let calcYourAge = (birthYear, currentYear = 2023) =>{
  let age = currentYear - birthYear
  return age
}
console.log(calcYourAge(2002))

let objectWeights = (mass, gravity = 9.81) => {
  let weight = mass * gravity + ' N'
  return weight
}
console.log('Weight of an object in Newton ', objectWeights(75))  // on Earth
console.log('Weight of an object in Newton ', objectWeights(75, 1.62)) // on Moon