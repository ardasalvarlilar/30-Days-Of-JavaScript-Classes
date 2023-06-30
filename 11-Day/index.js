// Destructuring and Spread
// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// Destructing an array
// syntax and usage
const arr = [1,2,3]
let [numOne, numTwo, numThree] = arr
console.log(numOne, numTwo, numThree) // 1 2 3
console.log(arr) // (3) [1, 2, 3]

let names = ['Asabeneh', 'Brook', 'David', 'john']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(names) // (4) ['Asabeneh', 'Brook', 'David', 'john']
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // Asabeneh Brook David john

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
console.log(e, pi, gravity, bodyTemp, bodyTemp) // 2.72 3.14 9.81 37 37

let fullStack = [['HTML','CSS','JavaScript','React'], ['Node','Express','MongoDB']]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd) // (4) ['HTML', 'CSS', 'JavaScript', 'React']
console.log(backEnd) // (3) ['Node', 'Express', 'MongoDB']

// If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

let numbers = [1,2,3]
const  [numberOne, , numberThree] = numbers // 2 is omitted
console.log(numberOne, numberThree) // 1 3

const userNames = ['Asabeneh', 'Brook', 'David', 'John']
const [, personTwo , , personFour] = userNames // first and third person omitted
console.log(personTwo, personFour) // Brook John 

// We can use default value in case the value of array for that index is undefined:
names = [undefined, 'Brook', 'David']
let [
  personFirst = 'Asabeneh',
  personSecond,
  personThird,
  personFourth = 'John'
] = names
console.log(personFirst, personSecond, personThird, personFourth) // Asabeneh Brook David John
// first person was undefined we defined it and there was no fourth person we created 

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

numbers = [1,2,3,4,5,6,7,8,9,10]
let [firstNum, secondNum, ThirdNum, ...rest] = numbers
console.log(firstNum, secondNum, ThirdNum) // 1 2 3
console.log(rest) // (7) [4, 5, 6, 7, 8, 9, 10]

// Destructuring during iteration

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Denmark', 'Oslo']]
for(const [country, city] of countries){
  console.log(country, city)
}
/*
Finland Helsinki
Sweden Stockholm
Norway Oslo
*/

fullStack = [
  ['HTML','CSS','JavaScript','React'], 
  ['Node','Express','MongoDB']
]
for(const [first, second, third] of fullStack)[
  console.log(first, second, third)
]
/*
HTML CSS JavaScript
Node Express MongoDB
*/

// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
let rectange = {
  width: 20,
  height: 10,
  area: 200
}
// let {widh, height, area, perimeter} = rectange
// console.log(width, height, area, perimeter) // 20 10 200 undefined
// Renaming during structuring
let {widh: w, height: h, area: a, perimeter: p} = rectange
console.log(w, h, a, p) // 20 10 200 undefined
// If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.
rectange = {
  width: 20,
  height: 10,
  area: 200
}
// let {width, height, area, perimeter = 60} = rectange 
// console.log(width, height, a, perimeter) // 20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80
rectange = {
  width: 30,
  height: 10,
  area: 300,
  perimeter: 80
}
let {width, height, area, perimeter = 60} = rectange
console.log(width, height, area, perimeter) // 30 10 300 80 even if we assigned perimeter as 60 but it retuned 80 because we declared it as 80 in the object so it's more dominant

// Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.
//Object parameter without destructuring

// Without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectange => {
  return 2* (rectange.width + rectange.height)
}
console.log(calculatePerimeter(rect)) // 60 with destructuring

// Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring
const getPersonInfo = obj =>{
  const skills = obj.skills
  const formattedSkills = obj.skills.slice(0,-1).join(', ')
  const languages = obj.languages
  const formattedLanguages = obj.languages.slice(0,-1).join(', ')
  let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. he is ${obj.age} years old. He is an ${obj.job} he teaches ${formattedSkills} and ${skills[skills.length -1]}. He speaks ${formattedLanguages} and little bit of ${languages[2]}.`
  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. he is 250 years old. He is an Instructor and Developer he teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and litle bit of Suomi(Finnish).
*/

// Object parameter with destructuring
const newCalculatePerimeter = ({width, height}) =>{
  return 2* (width + height)
}
console.log(newCalculatePerimeter(rect)) // 60

// Let us create a function which give information about the person object with destructuring
const thisPersonInfo = ({
  name,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) =>{
  const skillsFormatted = skills.slice(0,-1).join(', ')
  const languagesFormatted = languages.slice(0,-1).join(', ')
  let personInfo = `${name} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job} he teaches ${skillsFormatted} and ${skills.length -1}. he speaks ${languagesFormatted} amd little bit of ${languages[2]} `
  return personInfo
}
console.log(thisPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

// Destructuring object during iteration
const todoList = [
  {
    task: 'Prepare JS test',
    time: '4/1/2020 8:30',
    completed: true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }  
]
for(const {task, time ,completed} of todoList){
  console.log(task, time, completed)
} 
/* 
Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false
*/

// Spread or Rest operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

// Spread operator to get the rest of array elements
const nums = [1,2,3,4,5,6,7,8,9,10]
let [num1, num2, num3, ...restOf] = nums
console.log(num1, num2, num3) // 1 2 3 number
console.log(restOf) // (7) [4, 5, 6, 7, 8, 9, 10] object

const newCountries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]
let [gem, fra, ...nordicCountries] = newCountries
console.log(gem, fra) // Germany France
console.log(nordicCountries) // (6) ['Belgium', 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']


// Spread operator to copy an array
let evens = [0,2,4,6,8,10]
let evenNumbers = [...evens]

let odds = [1,3,5,7,9]
let oddNumbers = [...odds]

let wholeNumbers = [...evenNumbers,...oddNumbers]
console.log(oddNumbers) // [1, 3, 5, 7, 9]
console.log(evenNumbers) // [0, 2, 4, 6, 8, 10]
console.log(wholeNumbers) // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9] 

const thisFrontEnd = ['HTML','CSS','JS','React']
const thisBackEnd = ['Node', 'Express', 'MongoDB']
const thisFullStack = [...thisFrontEnd,...thisBackEnd]
console.log(thisFullStack) // ['HTML', 'CSS', 'JS', 'React', 'Node', 'Express', 'MongoDB']

// Spread operator to copy an object
// we can copy an object sing a spread operator

const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
}
const copiedUser = {...user,title:'instructor'}
console.log(copiedUser) // {name: 'Asabeneh', title: 'instructor', country: 'Finland', city: 'Helsinki'}

// Spread operator with arrow function
const sumAllNums = (...args) => {
  console.log(args)
}
sumAllNums(1,2,3,4,5) // [1, 2, 3, 4, 5]


const allSumNums = (...args) =>{
  let sum = 0
  for(const num of args){
    sum += num
  }
  return sum
}
console.log(allSumNums(1,2,3,4,5)) // 15

