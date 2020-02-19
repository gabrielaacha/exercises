//============================exercises==21-01-20===================================================

// 1. Make an array of your siblings’ names or your favorite movie characters’ names.
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);

let movieChar = ["Elisabeth", "Dorothy", "Babs", "Laura"];

//..................................................................................................

// 2. Make an array of your parents’ names.
console.log(
  "------------------------------------------exercise-2-------------------------------------------------------"
);

let parNames = ["Pablo", "Edurne"];

//..................................................................................................

// 3. Combine these two arrays.
console.log(
  "------------------------------------------exercise-3-------------------------------------------------------"
);

let comb = movieChar.concat(parNames);
console.log(comb);
//.................................................................................................

// 4. Add your pets’ names.
console.log(
  "------------------------------------------exercise-4-------------------------------------------------------"
);

comb.push("curro");
comb.push("croquetas");
console.log(comb);

//.................................................................................................

// 5. Reverse the order of the array.
console.log(
  "------------------------------------------exercise-5-------------------------------------------------------"
);
console.log(
  "--------------------------------------reverse each name's order-------------------------------------------------------"
);
function reverse() {
  let finalArr = [];
  let strNam = "";
  let strNam2 = "";
  let revStr = "";
  for (let i = 0; i < comb.length; i++) {
    strNam = comb[i];
    strNam2 = strNam.split("");
    // console.log(strNam2);
    strNam2.reverse();
    revStr = strNam2.join("");
    finalArr.push(revStr);
  }
  return finalArr;
}
console.log(reverse(comb));

console.log(
  "------------------------------------------reverse order-------------------------------------------------------"
);
let revArr = comb.reverse("");
console.log(revArr);

//.................................................................................................

// 6. Access one of your parents’ names.
console.log(
  "------------------------------------------exercise-6-------------------------------------------------------"
);

let filterNam = comb.filter(name => name.includes(parNames));
console.log(filterNam);

//.................................................................................................

// 7. Update the name of one of your parents
console.log(
  "------------------------------------------exercise-7-------------------------------------------------------"
);
//============================exercises==21-01-20===================================================

// create  a function picking the names with 4 characters in an array
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);

const names2 = ["Ali", "Hadi", "Nancy", "Olga"];

function fourChr(strStr) {
  //let result = [];
  let x = strStr.filter(name => name.length === 4);
  // let y = result.push(x);
  return x;
}

console.log(fourChr(names2));

//...............................................................................................

// create a function grabbing the names that starts with the letter "o"
console.log(
  "------------------------------------------exercise-2-------------------------------------------------------"
);

function o(strStr2) {
  const result = [];
  // const x = strStr2.split("").toLowerCase();
  // console.log(x);
  for (let i = 0; i < strStr2.length; i++) {
    if (strStr2[i][0] === "o" || strStr2[i][0] === "O") {
      result.push(strStr2[i]);
    }
  }
  return result;
}

console.log(o(names2));
//.................................................................................................

// 1. Reverse the  a whole array
console.log(
  "------------------------------------------exercise-3-------------------------------------------------------"
);

function revNames(names) {
  let result = names.reverse("");
  return result;
}

console.log(revNames(names2));
//..................................................................................................

//============================exercises==22-01-20===================================================

// 1. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
// --> For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// --> If the number cannot be divided evenly by 4, simply return the number.
// --> The given integer will always be equal to or greater than 1.
// --> Include the given number (the number in the parameters).
// Examples:
// --> amplify(4) ➞ [1, 2, 3, 40]
// --> amplify(3) ➞ [1, 2, 3]
// --> amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function amplify(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 4 == 0) {
      result.push(num[i] * 10);
    } else {
      result.push(num[i]);
    }
  }
  return result;
}

console.log(amplify(arrNum));

//..................................................................................................

// 2. One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
// Examples:
// --> unique([3, 3, 3, 7, 3, 3]) ➞ 7
// --> unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// --> unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
console.log(
  "------------------------------------------exercise-2-------------------------------------------------------"
);

// function unique(num) {
//   let result = [];
//   let invisible = [];
//   for (let i = 0; i < num.length; i++);
//   if (num[] ) {
//     invisible.push(num[i]);
//   } else {
//     result.push(num[i]);
//   }
//   return result;
// }

// const arrUni = [1, 1, 1, 4, 2, 2, 7, 7, 9];
// console.log(unique(arrUni));

//------------------Hadis solution-------------------------------------------------------------

function unique(arr) {
  let currentValue = 0;
  let current = []; // we have 2 arrays at first ( current and remainder)
  let remainder = []; // we have 2 arrays at first (current and remainder)
  for (let i = 0; i < arr.length; i++) {
    if (current.length == 0 || current[0] == arr[i]) {
      current.push(arr[i]);
      currentValue++; // currentValue = currentValue + 1;
    } else if (current[0] !== arr[i]) {
      remainder.push(arr[i]);
    }
  }

  if (currentValue === 1) {
    return currentValue[0];
  } else {
    return remainder[0];
  }
}

let arr = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1];
console.log(unique(arr));

//..................................................................................................

//============================exercises==23-01-20===================================================

//------------Exercise 1-----------------------------------------
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);

function crypt(str) {
  let result = "";
  let newArr = [];
  let letters = ["a", "e", "i", "o", "s"];
  let speak = str.toLowerCase().split("");
  console.log(speak);
  for (let i = 0; i < speak.length; i++) {
    if (speak[i] == letters[0]) {
      newArr.push("4");
    } else if (speak[i] == letters[1]) {
      newArr.push("3");
    } else if (speak[i] == letters[2]) {
      newArr.push("1");
    } else if (speak[i] == letters[3]) {
      newArr.push("0");
    } else if (speak[i] == letters[4]) {
      newArr.push("5");
    } else {
      newArr.push(speak[i]);
    }
  }

  let x = newArr.join("");
  console.log(x);
  // result.push(x);
  return result;
}

console.log(crypt("hello my name is Gabriela"));

//..................................................................................................

//------------Exercise 2-----------------------------------------
// Is it Symmetrical? Create a function that takes a number as an argument and returns true or false
// depending on whether the number is symmetrical or not.
// NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.

// Examples:
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
console.log(
  "------------------------------------------exercise-2-------------------------------------------------------"
);

function symmetrical(num) {
  let newNum = num.toString();
  let newNum2 = newNum
    .split("")
    .reverse()
    .join("");
  console.log(newNum);
  if (newNum2 == num) {
    return true;
  } else {
    return false;
  }
}

console.log(symmetrical(7887));

//..................................................................................................

//------------Exercise 3-----------------------------------------
// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”
console.log(
  "------------------------------------------exercise-3-------------------------------------------------------"
);

//..................................................................................................

//-----------------Exercise 4------------------------------
// Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end of it,
// then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// Move the first letter of each word to the end of the word.
// Add “ay” to the end of the word.
// Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// Extra Practice
// Preserve proper capitalization as in the examples below.

// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.” // 1st letter goes to the end of the word and then + "ay" or "way" if word starts with vowel
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”
console.log(
  "------------------------------------------exercise-4-------------------------------------------------------"
);

function pigLatin(str) {
  let newStr = str.toLowerCase().split(" ");
  console.log(newStr);
  let temporaryLetter = [""];
  let vowelArr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < newStr.length; i++) {
    temporaryLetter.push(newStr[i][0]);
  }
  return temporaryLetter;
}

console.log(pigLatin("Cats are great pets."));

//==============================Exercises-recap-functions=270120=================================================================================

// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.

// this is the old school way:

// function mul(x, y) {
//   // let result = x * y;
//   console.log(x, y);
// }
// console.log(mul(2, 4));
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);
//..................................................................................................

// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.
console.log(
  "------------------------------------------exercise-2-------------------------------------------------------"
);
//..................................................................................................

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.
console.log(
  "------------------------------------------exercise-3-------------------------------------------------------"
);
//..................................................................................................

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.
console.log(
  "------------------------------------------exercise-4-------------------------------------------------------"
);
//..................................................................................................

// Print Exponential Values
// --> Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// --> For example if we have function(3, 5) The function should print 3 9 27 81 243.
// --> Prints 5 exponential values of 3.
// --> function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

function expVal(num1, num2) {
  let result = 0;
  let tempNum = num1 * num1;
  for (let i = 0; i < num2; i++) {
    result += tempNum;
    console.log(result);
  }
  return result;
}

console.log(expVal(3, 5));

//..................................................................................................

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store
// your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.

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

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

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

// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

//..................................................................................................

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

// @ and . not at the beginning and not at the end but they are in the string

//============================exercises==29-01-20===================================================

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

//..................................................................................................

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

//..................................................................................................

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

//============================exercises==30-01-20===================================================

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

//..................................................................................................

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

//..................................................................................................

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

//..................................................................................................

//============================exercises==31-01-20===================================================

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

//..................................................................................................

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

//..................................................................................................
