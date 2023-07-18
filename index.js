// Error Handling

/*
JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.
*/

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
/*
try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
*/

// Example:
try{
  let firstName = 'Arda'
  let fullName = firstName + ' ' + lastName
}catch(err){
  console.log(err) /*ReferenceError: lastName is not defined
  at index.js:27:36*/
}

try{
  let lastName = 'Şalvarlılar'
  let FullName = firstName + ' ' + lastName
}catch(err){
  console.log(err) /* ReferenceError: firstName is not defined
  at index.js:35:18 */

}finally{
  console.log('In any case I will be executed') // In any case I will be executed
}

// The catch block take a parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message.

try {
  let lastName = 'Şalvarlılar'
  let fullName = firstName + ' ' + lastName
}catch(err){
  console.log('name of the error', err.name) // name of the error ReferenceError
  console.log('error message', err.message) // error message firstName is not defined
}finally{
  console.log('in any case i will be executed') // in any case i will be executed
}

/*
throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:
*/

const throwErrorExampleFun = () =>{
  let message
  let x = prompt('Enter a number:')

  try{
    if(x == '') throw 'empty'
    if(isNaN(x)) throw 'not a number'
    x = Number(x)
    if(x < 5) throw 'too low'
    if(x > 10) throw 'too high'
  }catch(err){
    console.log(err)
  }
}

// Error Types

// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
// let firstName = 'Arda'
// let fullName = firstName + ' ' + lastName
//console.log(fullName)
 /* index.js:79 Uncaught ReferenceError: lastName is not defined
    at index.js:79:34
    */

// SyntaxError: A syntax error has occurred
// let square = 2 x 2
// console.log(square) // index.js:83 Uncaught SyntaxError: Unexpected identifier 'x' (at index.js:83:16)
// console.log('Hello, world")

// TypeError: A type error has occurred
let num = 10
console.log(num.toLowerCase())  /*
index.js:92 Uncaught TypeError: num.toLowerCase is not a function
    at index.js:92:17 */