// LOOPS

// for loop

for(let i = 0; i <= 5; i++){
  console.log(i)
}
// 0 1 2 3 4 5

for(let i = 5; i >=0; i--){
  console.log(i)
}
// 5 4 3 2 1 0

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
/*
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
*/

let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i])
}
console.log(newArr) // ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

let numbers = [1,2,3,4,5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum) // 15

numbers = [1,2,3,4,5]
let pow = []
for(let i = 0; i < numbers.length; i++){
  pow.push(numbers[i] **2) 
}
console.log(pow) //  [1, 4, 9, 16, 25]

countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// while loop
let i = 0
while(i <= 5){
  console.log(i)
  i++
}
// 0 1 2 3 4 5

// do while loop
let j = 0
do{
  console.log(j)
  j++
}while(j <= 5)
// 0 1 2 3 4 5

// for of loop
numbers = [1,2,3,4,5]
for(let num of numbers){
  console.log(num)
}
// 1 2 3 4 5 

for(let num of numbers){
  console.log(num * num)
}
// 1 4 9 16 25
let summ = 0
for(let num of numbers){
  summ += num
}
console.log(sum) // 15
console.log('-------------------------------------------------------------')
let webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
for(const tech of webTechs){
  console.log(tech.toUpperCase())
}
// HTML CSS JAVASCRIPT REACT REDUX NODE MONGODB
for(const tech of webTechs){
  console.log(tech[0])
}
// H C J R N M

countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let myArr = []
for(let country of countries){
  myArr.push(country.toUpperCase())
}
console.log(myArr) //  ['FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND']

// break
// Break is used to interrupt a loop.
for(let i=0;i<=5;i++){
  if(i == 3){
    break
  }
  console.log(i)
}
// 0 1 2 

// continue
// We use the keyword continue to skip a certain iterations.
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}
// 0 1 2 4 5