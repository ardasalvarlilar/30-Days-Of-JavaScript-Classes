// ARRAYS
// How to create an empty array

// const arr = Array()
// // or
// let array = new Array()
// console.log(typeof array)

// // using square brackets
// array = []
// console.log(array, typeof array)

// How to create an array with values

let numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
let webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
let countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// array can have items of different data types

const array = [
  'Asabeneh',
  250,
  true,
  {contry:'finland', city: 'helsinki'},
  {skills: ['HTML','CSS','JS','React','Python']}
]
console.log(array)

// Creating an array using split

let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const compaines = companiesString.split(',')
console.log(compaines)
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)

// Accessing array items using index
const friuts = ['banana', 'orange', 'mango','lemon']
let firstFriut = friuts[0]
console.log(firstFriut)

let secondFriut = friuts[1]
console.log(secondFriut)

let lastFriut = friuts[3]
console.log(lastFriut)
//last index can be calculated as follows

let lastIndex = friuts.length - 1
lastFriut = friuts[lastIndex]
console.log(lastFriut)

 numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100

webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB

countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // List of countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

 lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya

const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

 lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar

numbers = [1, 2, 3, 4, 5]
numbers[0] = 10
numbers[1] = 20
console.log(numbers)


countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
countries[0] = 'Türkiye'
lastIndex = countries.length - 1
countries[lastIndex] = 'Korea'
console.log(countries)

// Methods to manipulate array
let newArray = Array()
console.log(newArray)
const eightEmptyValues = Array(8)
console.log(eightEmptyValues)

// Creating static values with fill
newArray = Array()
console.log(newArray)
const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const eightZeroValues = Array(8).fill(0)
console.log(eightZeroValues)

const four4Values = Array(4).fill(4)
console.log(four4Values)

// Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirsList = firstList.concat(secondList)
console.log(thirsList)

const newFriuts = ['banana','orange','mango','lemon']
const newVegetables = ['tomato','potato','cabbage','onion', 'carrot']
const friutsAndVegetables = newFriuts.concat(newVegetables)
console.log(friutsAndVegetables)

//Getting array length
numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)
// Getting index an element in arr array
console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1