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
