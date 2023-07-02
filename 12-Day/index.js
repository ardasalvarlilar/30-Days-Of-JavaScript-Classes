// Regular Expressions
/*
A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.
*/
// To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

// RegExp parameters
// a regular expression takes two parameters one required search pattern and an optional flag
/*
  Pattern
  a pattern could be a text or any form of pettern which some sort of similarity. For instance the word spam ib an email could be a pattern we are interested to look for in an email or aphone number format number might be our interest to look for.

  Flags
  Flags aree optional parameters in a regular expression which determine the type of searching. Let us see sıome of the flags:
  g: a global flag which means looking for a pattern in whole text
  i: case insensitive flag(it searches for foth lowercase and uppercase)
  m: multiline
*/

// Creating a pattern with RegExp Constructor
// Declaring regular expression without global flag and case insensitive flag.

// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)
console.log(regEx)

// Declaring regular expression with global flag and case insensitive flag.
let pattern1 = 'love'
let flag = 'gi'
let RegEx1 = new RegExp(pattern1, flag)
console.log(RegEx1)

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
let regEx1 = new RegExp('love','gi')


// Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.
let regExp = /love/gi
// The above regular expression is the same as the one which we created with RegExp constructor
let regExpr = new RegExp('love','gi')

// RegExpp Object Methods


// Testing for a match
// test(): TEsts for a match in a string. it returns boolean
let str = 'I love JavaScript'
let newPattern = /love/
let result = newPattern.test(str)
console.log(result) // true

// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
let thisStr = 'Ich leibe JavaScript'
let thisPattern = /leibe/
let thisResult = thisStr.match(thisPattern)
console.log(thisResult) // ['leibe', index: 4, input: 'Ich leibe JavaScript', groups: undefined🔥]

thisStr = 'Ich leibe JavaScript'
thisPattern = /leibe/g
thisResult = thisStr.match(thisPattern)
console.log(thisResult) // ['leibe]

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
str = 'I love JavaScript'
newPattern = /love/g
result = str.search(newPattern)
console.log(result) // 2
//it seems like love is the first index but it returns the first letter of the word so the 'l' letter is in the second index


// Replacing a substring
// replace():Executes a search for a match in a string and replaces the matched substing with a replacement substring
let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

txt =  '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
matchReplaced = txt.replace(/%/g, '')
console.log(matchReplaced)

/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/

// Let's use example to clarify the above meta characters

// Square Bracket
// Let's use square bracket to include lower and upper case
