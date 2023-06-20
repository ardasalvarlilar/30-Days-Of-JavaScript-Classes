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
let fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
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

let array = [
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
let friuts = ['banana', 'orange', 'mango','lemon']
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
console.log('-----------------------------------------')
//Check an element if it  exist in the array
fruits = ['banana', 'orange', 'mango', 'lemon']
let index = friuts.indexOf('banana')
if(index == -1){
  console.log('this fruit does not exist in the array')
}else{
  console.log('this fruit is exist in the array')
}
//this fruit is exist in the array
//we can use also ternary here
index === -1 ? console.log('this fruit does not exist in the array') : console.log('this fruit is exist in the array')
let indexOfAvocado = friuts.indexOf('avocado')
if(indexOfAvocado === -1){
  console.log('this fruit is not exist in the array')
}else{
  console.log('this fruit is exist in the array')
}
//this fruit is not exist in the array

//Getting last index of an element in array
numbers = [1,2,3,4,5,3,1,2]
console.log(numbers.lastIndexOf(2))
console.log(numbers.lastIndexOf(0))
console.log(numbers.lastIndexOf(1))
console.log(numbers.lastIndexOf(4))
console.log(numbers.lastIndexOf(6))

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
numbers = [1,2,3,4,5,3,1,2]
console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false
webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(webTechs.includes('Node')) // true
console.log(webTechs.includes('C')) // false

// checking array
numbers  = [1,2,3,4,5]
console.log(Array.isArray(numbers)) // true
let number = 100
console.log(Array.isArray(number)) // false

// Converting arrays to string
numbers = [1,2,3,4,5]
console.log(numbers.toString()) // 1,2,3,4,5
let names = ['Asabeneh','Mathias','Elias','Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// joining array elements
numbers = [1,2,3,4,5]
console.log(numbers.join()) //1,2,3,4,5
names = ['Asabeneh','Mathias','Elias','Brook']
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) // AsabenehMathiasEliasBrook
console.log(names.join(' ')) // Asabeneh Mathias Elias Brook
console.log(names.join('  ')) // Asabeneh  Mathias  Elias  Brook
console.log(names.join(' # ')) // Asabeneh # Mathias # Elias # Brook

webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(webTechs.join()) // HTML,CSS,JavaScript,React,Redux,Node,MongoDB
console.log(webTechs.join( '#' )) // HTML#CSS#JavaScript#React#Redux#Node#MongoDB

// slice array elements
numbers = [1,2,3,4,5]
numbers .slice(1,3)
console.log(numbers)
console.log(numbers.slice()) // copied all items [1,2,3,4,5]
console.log(numbers.slice(0)) // copied all items [1,2,3,4,5]
console.log(numbers.slice(0,numbers.length)) // copied all items [1,2,3,4,5]
console.log(numbers.slice(1,4)) // [2,3,4] it does not include the ending position


// splice method in array
numbers = [1,2,3,4,5]
numbers.splice('')
console.log(numbers) // remove all items

numbers = [1,2,3,4,5]
numbers.splice(0,1) // remoce the first item
console.log(numbers)

numbers = [1,2,3,4,5,6]
console.log(numbers.splice(3,3,7,8,9))
console.log(numbers) // started from 3rd index removed next three item and replaced the three item with 7,8,9

// adding item to an array using push
array = ['item1','item2','item3']
console.log(array)
array.push('new item')
console.log(array) //  ['item1', 'item2', 'item3', 'new item']

numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers) // [1, 2, 3, 4, 5, 6]

// .pop()
numbers = [1,2,3,4,5,6]
numbers.pop(6)
console.log(numbers) // [1, 2, 3, 4, 5] removed one item from the end

fruits = ['banana','orange','mango','lemon']
friuts.push('apple')
console.log(friuts) // ['banana', 'orange', 'mango', 'lemon', 'apple']
friuts.push('lime')
console.log(friuts) //  ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// removing the end element using pop
numbers = [1,2,3,4,5]
numbers.pop()
console.log(numbers)//[1, 2, 3, 4]

// removing pne array element in the beginning of the array
numbers = [1,2,3,4,5]
numbers.shift()
console.log(numbers) // [2, 3, 4, 5]

// add element to beginning of the array

numbers = [1,2,3,4,5]
numbers.unshift(0)
console.log(numbers) // [0, 1, 2, 3, 4, 5]

// reversing array order
number = [1,2,3,4,5]
numbers.reverse()
console.log(numbers) // [5, 4, 3, 2, 1, 0]

// Sorting elements in array
webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
console.log(webTechs)
webTechs.sort()
console.log(webTechs)// ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']

// Array of arrays
let firstNums = [1,2,3]
let secondNums = [1,4,9]

let arrayOfArray = [[1,2,3],[1,2,3]]
console.log(arrayOfArray[0]) // [1,2,3]

let frontEnd = ['HTML','CSS','JS','React','Redux']
let backEnd = ['Node','Express','MongoDB']
let fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]