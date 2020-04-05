//==================================================EXERCISE=030220===========================================================================

// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires?
// Output: $30000
console.log(
  "---------------------------------------exercise-1------------------------------------------------------------------------------------"
);

//===============================================EXERCISE=040220============================================================================

// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
console.log(
  "---------------------------------------exercise-2------------------------------------------------------------------------------------"
);

//..........................................................................................................................................

// Get Values. Create a function that returns an array of all values of an object’s properties.
// getObjectValues({
// choice1: "tea",
// choice2: "coffee",
// choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]
console.log(
  "---------------------------------------exercise-3------------------------------------------------------------------------------------"
);

//..........................................................................................................................................

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
// firstName: "Ali",
// job: "painter",
// age: 20,
// city: Berlin
// }
// Example of Expected Output “Ali is a 20 year old  in Berlin”.
console.log(
  "---------------------------------------exercise-4------------------------------------------------------------------------------------"
);

//..........................................................................................................................................

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
// name: "Mike",
// class: "4A"
// course: "English"
// }
// Expected output:
// ["name", "class", "course"]
console.log(
  "---------------------------------------exercise-5------------------------------------------------------------------------------------"
);

let student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

function array(obj) {
  return Object.keys(obj);
}

console.log(array(student));

//..........................................................................................................................................

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// console.log(arrSpliting("small"));
console.log(
  "---------------------------------------exercise-6------------------------------------------------------------------------------------"
);

//========================================EXERCISE=050220===================================================================================

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
console.log(
  "---------------------------------------exercise-7------------------------------------------------------------------------------------"
);

// const obj1 = { 1: 2, 2: 300 }; // this is the source
// const obj2 = { 1: 4, 3: 3224 }; // this is the target
// const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
// const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
// console.log(totalObj);
// // expected outcome: { '1': 4, '2': 450, '3': 3224, '4': 55, '5': 980 }

//............................................................................................................................................

//..................................................................................................

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store
// your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.
console.log(
  "-------------------------exercise--------------------------------------------------------------"
);
let fruits = ["apple", "banana", "strawberries"];
function printFavouriteFruits(arr) {
  return `my favourite fruit is ${arr[2]}`;
}

console.log(printFavouriteFruits(fruits));

//..................................................................................................

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible?
// Why/Why not? Comment your answer in the index.js file.

//..................................................................................................

//============================exercises==28-01-20===================================================

// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

//..................................................................................................

// Create a function that calculates the user age e.g. 2000 -> 20. (Date().getFullYear);

//..................................................................................................

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

//..................................................................................................

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

//..................................................................................................

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

//..................................................................................................

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

//..................................................................................................

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

//..................................................................................................

// Count Occurrences. Create a function that accepts two arguments: a string and a letter.
// The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

//..................................................................................................

// Create a function which calculates how old a dog is in doggie years.
// The function should accept one argument that is the puppy’s age in human years.
// Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

//..................................................................................................

// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack.
// The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// i.e. calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

//..................................................................................................

// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// --> Total number of slices. --> slices
// --> Number of recipients. --> recipients
// --> How many slices each person gets. --> person
// Examples:
// --> equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// --> equalSlices(8, 3, 2) ➞ true
// --> equalSlices(8, 3, 3) ➞ false
// --> equalSlices(24, 12, 2) ➞ true

//..................................................................................................

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

// @ and . not at the beginning and not at the end but they are in the string
console.log(
  "-------------------------exercise--------------------------------------------------------------"
);

//============================exercises==29-01-20===================================================

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

console.log(
  "-------------------------exercise-v1-------------------------------------------------------------"
);

//.....................................version 2...............................................................
console.log(
  "-------------------------exercise-v2-------------------------------------------------------------"
);

//.....................................version 3...............................................................
console.log(
  "-------------------------exercise-v3-------------------------------------------------------------"
);

//..................................................................................................

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number
console.log(
  "-------------------------exercise--------------------------------------------------------------"
);
//..................................................................................................

//============================exercises==30-01-20===================================================

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

//..................................................................................................

//============================exercises==31-01-20===================================================

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true
console.log(
  "-------------------------exercise--------------------------------------------------------------"
);

//..................................................................................................
