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
function validateEmail(str) {
  if (str.includes("" + "@" + "" + "." + "")) {
    return true;
  } else {
    return false;
  }
}

console.log(validateEmail("john@gmail.com"));

//============================exercises==29-01-20===================================================

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

console.log(
  "-------------------------exercise-v1-------------------------------------------------------------"
);
function salary(userName, salary, ...kidsNames) {
  let x = kidsNames.map(str => str).length;
  let y = 0;

  if (x === 1) {
    y = 0.3;
  } else if (x === 2) {
    y = 0.25;
  } else if (x > 2) {
    y = 0.2;
  } else {
    y = 0;
  }

  let taxes = salary * y;
  console.log(taxes);
  let finalSal = salary - taxes;
  console.log(finalSal);

  return `${userName}'s netto salary is ${finalSal}`;
}

console.log(salary("pep", "3000", "pop", "pup", "pip"));

//.....................................version 2...............................................................
console.log(
  "-------------------------exercise-v2-------------------------------------------------------------"
);

function salary2(name, salary, ...kidNames) {
  let x = kidNames.length;

  if (x === 1) {
    return `${name} makes ${salary - salary * 0.3}€ a month`;
  } else if (x === 2) {
    return `${name} makes ${salary - salary * 0.25}€ a month`;
  } else if (x > 2) {
    return `${name} makes ${salary - salary * 0.2}€ a month`;
  } else {
    return `i don't know`;
  }
}

console.log(salary2("mino", 3000, "mano", "muno"));

//.....................................version 3...............................................................
console.log(
  "-------------------------exercise-v3-------------------------------------------------------------"
);

function salary3(name, salary, ...kidNames) {
  let x = kidNames.length;
  let obj = [
    { tax1: salary * 0.3 },
    { tax2: salary * 0.25 },
    { tax3: salary * 0.2 }
  ];

  switch (x) {
    case 1:
      return ` ${name} makes a salary of ${salary -
        Object.values(obj[1])}€ per month`;
    case 2:
      return ` ${name} makes a salary of ${salary -
        Object.values(obj[1])}€ per month`;
    default:
      return ` ${name} makes a salary of ${salary -
        Object.values(obj[1])}€ per month`;
  }
}

console.log(salary3("didi", 3000, "dodo", "dudu", "dada"));

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
function dictionary(str, word) {
  if (word.includes(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("hel", "cat"));

//..................................................................................................
