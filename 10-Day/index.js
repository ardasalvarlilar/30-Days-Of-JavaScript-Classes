// Set
// Set is a collection of elements. Set can only contains unique elements. Let's create a set 

// Creating an empty set
// let companies = new Set()
// console.log(companies) // Set(0) {}

// Creating set from array
let languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
// Set is an iterable object and we can iterate through each elements.
languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const newSetOfLanguages = new Set(languages)
for(const language of newSetOfLanguages){
  console.log(language)
}
/*
  English
  Finnish
  French
  Spanish
*/

// Adding an element to a set
let companies = new Set() // creating an empty set
console.log(companies.size) // 0
companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5
console.log(companies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// We can also use loop to add element to a set

let newCompanies = ['Google ', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
let thisSetOfCompanies = new Set()
for(const company of newCompanies){
  thisSetOfCompanies.add(company)
}
console.log(thisSetOfCompanies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

// Deleting an element a set
// We can delete an element from a set using delete method
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set

// checking an element in the set
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// clearing the set
// it removes all the elements from a set

companies.clear()
console.log(companies) // Set(0) {}

// See the example below to learn how to use set.

languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}

const counts = []
const count = {}

for(const l of langSet){
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang)
  counts.push({lang: l, count: filteredLang.length})
}
console.log(counts) 
/*
[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
]  
*/

//Other use case of set. For instance to count unique item in an array.
const numbers = [5,3,2,5,5,9,4,5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers) // Set(5) {5, 3, 2, 9, 4}

// Union of sets
// To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)
let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C) // Set(6) {1, 2, 3, 4, 5, 6}

// intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

let x = [1,2,3,4,5]
let y = [3,4,5,6]

let X = new Set(x)
let Y = new Set(y)
let z = x.filter((num) => Y.has(num))
let Z = new Set(z)
console.log(Z) // Set(3) {3, 4, 5}

// Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

let q = [1,2,3,4,5]
let w = [3,4,5,6]

let Q = new Set(q)
let W = new Set(w)

let u = q.filter(num => !W.has(num))
let U = new Set(u)
console.log(U) // Set(2) {1, 2}


// Map
// Creating an empty map
const map = new Map()
console.log(map) // Map(0) {}

// Creating a map from an array
let thisCountries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const newMap = new Map(thisCountries)
console.log(newMap) //  Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(newMap.size) // 3

// adding values to the map
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland','Helsinki')
countriesMap.set('Sweden','Stockholm')
countriesMap.set('Norway','Oslo')
console.log(countriesMap) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size) // 3

// getting a value from map
console.log(countriesMap.get('Finland')) // Helsinki


// Checking key in map
console.log(countriesMap.has('Finland')) // true

// getting all valuesfroum map using loop

for(const country of countriesMap){
  console.log(country)
  /* 
    (2) ["Finland", "Helsinki"]
    (2) ["Sweden", "Stockholm"]
    (2) ["Norway", "Oslo"]
  */
}
for(const [country, city] of countriesMap){
  console.log(country, city) 
  /*
    Finland Helsinki
    Sweden Stockholm
    Norway Oslo
  */
}