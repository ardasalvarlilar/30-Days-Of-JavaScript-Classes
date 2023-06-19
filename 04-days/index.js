// CONDITIONALS
/*  
Conditions can be implementing using the following ways
if 
if else
if else if else
switch
ternary operator
*/

// If
// if(condition){
//   // this part of code runs for truthy conditions
// }

let num = 3 
if (num > 0){
  console.log(`${num} is a positive number`)
}

let isRaining = true
if(isRaining){
  console.log('Remember to take your rain coat')
}

// If else
//If condition is true the first block will be executed, if not the else condition will be executed.

// if(condition){
//     // this part of code runs for truthy conditions
// }else{
//     // this part of code runs for false conditions
// }

num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.


// If else if else
// if (condition) {
//   // code
// } else if (condition) {
// // code
// } else {
//  //  code
// }

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
if(weather == 'rainy'){
  console.log('you need a rain coat')
}else if(weather == 'cloudy'){
  console.log('It might be cold, yo need a jacket')
}else if(weather == 'sunny'){
  console.log('go out freely')
}else{
  console.log('no nee for rain coat')
}

// SWITCH
// switch(caseValue){
  // case 1:
    // code
    // break
  // case 2:
    // code
    // break
  // case 3:
    // code
    // break
  // default:
    // code
// }

weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('you need a rain coat')
    break;
  case 'cloudy':
    console.log('It might be cold, you need a jacket')
    break;
  case 'sunny':
    console.log('Go out freely')
    break
  default:
    console.log('No need for rain coat')
}

// switch case example
// let dayUserInput = prompt('What day is today?')
// let day = dayUserInput.toLowerCase()

// switch(day){
//   case 'monday':
//     console.log('today is monday')
//     break
//   case 'tuesday':
//     console.log('today is tuesday')
//     break
//   case 'wednesday':
//     console.log('today is wednesday')
//     break
//   case 'thursday':
//     console.log('today is thursday')
//     break
//   case 'friday':
//     console.log('today is friday')
//     break
//   case 'saturday':
//     console.log('today is saturday')  
//     break
//   case 'sunday':
//     console.log('today is sunday')
//     break
//   default:
//   console.log('it is not a week day')  
//   }

// num = prompt('enter number')

// switch(true){
//   case num > 0:
//     console.log('positive')
//     break
//   case num == 0:
//     console.log('zero')
//     break
//   case num < 0:
//     console.log('negative')
//     break
//   default:
//     console.log('not a number')
// }

isRaining = true
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')