//=============EXERCISES210120=========================================================================

// FUNCTIONS
// place where i exec this line multiple times whenever i call the function
// function sum (){...}
// everything that happens in the function stays in the function
// function declaration and function call
// create  a function picking the names with 4 characters in an array
// create a function grabbing the names that starts with the letter "o"
  
//====================================================================================================

// 1. Reverse the  a whole array

let arrRev1 = ["one", "two", "three", "four"];

// function strToArr2(array) {
//  let revStr2 = arrRev[i].split("");
// revStr2.reverse("");
// let revStr3 = revStr1.join("");
// return result;
// }

// console.log(strToArr2(arrRev1));

//----------------hadis solution---------------------------------------------------------------------------

function reverseNames(arr) {
  let newArray = [];
  let strToArr = "";
  let str = "";
  let revStr = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    strToArr = str.split(""); // "" split by letter is teh meaning
    strToArr.reverse();
    revStr = strToArr.join("");
    newArray.push(revStr);
  }
  return newArray;
}

console.log(names);
console.log(reverseNames(names));

//------------------------hadis professional solution:---------------------------------------------------------

function reverseNames(arr) {
  let newArray = []; // this will create a new array // therefore the empty array
  let str = ""; //
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("") // this will live inside of str
      .reverse() // this will live inside of str // important to not write semi-colons until the end
      .join(""); // this will live inside of str
    newArray.push(str);
  }
  return newArray;
}

console.log(arrRev1);
console.log(reverseNames(arrRev1));

//-----------------------------------------------------------------------------------------------------

//=============EXERCISE2S10120=========================================================================

// ES6 system uses => instead of the function word. it is assigning the function result to a variable. var sum = function(z,s){}
// Array.map(value, index =>{} // creates a new array
// its not about naming system but about the order
// Array.reduce()
// const reducer = (acc, cur) => acc + value;
// its also a call back function
// call stack
// 6000 max. of functions inside functions
// function <name>(<parameter>){...}
// parameters are values used inside of the function, value comes when i apply my function call
// when i have two parameters i separate them with a comma
// ES6 system would be
// create a function without parameter and without return:
// variables in function
  
//====================================================================================================

// 1. Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
// --> For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// --> If the number cannot be divided evenly by 4, simply return the number.
// --> The given integer will always be equal to or greater than 1.
// --> Include the given number (the number in the parameters).
// Examples:
// --> amplify(4) ➞ [1, 2, 3, 40]
// --> amplify(3) ➞ [1, 2, 3]
// --> amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

function amp(arr) {
    let result2 = [];
    let mulBy4 = result2 * 10;
    for (let i = 0; i < arr.length; i++) {
      if (amp[i] % 4 == 0) {
        result2 = mulBy4;
      } else {
        result2 = [i];
      }
    }
    return result2;
  }
  
  console.log();
  
  //----------Hadi's solution---------------------------------------------------------------------------
  
  function amp(num) {
    let result = [];
    let ampTen = 0;
    for (let i = 1; i <= num; i++) {
      if (i % 4 == 0) {
        ampTen = i * 10;
        result.push(ampTen);
      } else {
        result.push(i);
      }
      return result;
    }
  }
  console.log(amp(4)); // the value is given in the function call and this will generate the new array
  
  
  //----------ES6 version-----------------------------------------------------------------------------------
  
  const amp2 = num => {let result = [];
    let ampTen = 0;
    for (let i = 1; i <= num; i++){
     if (i % 4 == 0) {
         ampTen = i * 10;
         result.push(ampTen);
    
     }else {
    result.push(i);
    
     }
     return result;
    }   
    console.log(amp2(4));
     
//-----------------------------------------------------------------------------------------------------

  // 2. One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
  // Examples:
  // --> unique([3, 3, 3, 7, 3, 3]) ➞ 7
  // --> unique([0, 0, 0.77, 0, 0]) ➞ 0.77
  // --> unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
  
  // let uniNum = [3, 4, 5, 3, 4, 5, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9];
  // let unlike = uniNum.map(uniNUm.find(num, index => num ^ uniNUm));
  // console.log(unlike);
  
  //---------------hadis solution-----------------------------------------------------------------------
  
  function  unique(arr){
    let currentValue = 0;
    let current = []; // we have 2 arrays at first ( current and remainder)
    let remainder = []; // we have 2 arrays at first (current and remainder)
    for (let i = 0; i < arr.length; i++) {
        if(current.length == 0 || current[0] == arr[i]){
            current.push(arr[i]);
            currentValue ++; // currentValue = currentValue + 1;
  
        } else if (current[0] !== arr[i]){
            remainder.push(arr[i]);
        }
    }
    
    if (currentValue === 1) {
        return currentValue[0]
  
    } else {
        return remainder[0];
  
  }
  }
  
  let arr = [1,1,1,1,1,4,1,1,1,1,1,1];
  console.log(unique(arr));
  
//-----------------------------------------------------------------------------------------------------

  
  let p = 0;
  p++ // or ++p the result would be 1 
  let c = p;
  console.log(c);

//-----------------------------------------------------------------------------------------------------


//==================EXERCISES230120===========================================================================

//=====================================================================================================

//------------Exercise 1-----------------------------------------
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

//-----------solution--------------------------------------------
// 1. check that there are no upper cases
// 2. create empty array and empty value
// 3. then first split
// 4. create a loop
// 5. letters[i] = 4; --> condition after if (if a letter is == A, then the letter will be replaced by 4)
// 6. hackedArr.push(letters[i]); --> this is to push it into the new string
// 7. the do the same for every replacement
// 8. let result = hackedArr.join("") outside the brackets --> this will bring the letters together again
// 9. let codeStr = "Hi i am nice aaaa"; --> this is to implement the string that we wanna have replaced
// 10. console.log(hacking(codeStr)); --> this will print the first declared variable (hacking) including the declared string (codeStr)

const hacking = str => {
    let hackedArr = []; // first start with empty array,
    let toSmall = str.toLowerCase();
    let letters = toSmall.split(""); // empty double quotes because i wanna separate every word with a space
    for (let i = 0; i < letters.length; i++) {
      //it will loop until the condition is falthy
      if (letters[i] == "a") {
        letters[i] = 4;
        hackedArr.push(letters[i]);
      } else if (letters[i] == "e") {
        letters[i] = 3;
        hackedArr.push(letters[i]);
      } else if (letters[i] == "i") {
        letters[i] = 1;
        hackedArr.push(letters[i]);
      } else if (letters[i] == "o") {
        letters[i] = 0;
        hackedArr.push(letters[i]);
      } else if (letters[i] == "s") {
        letters[i] = 5;
        hackedArr.push(letters[i]);
      } else {
        hackedArr.push(letters[i]);
      }
    }
  
    let result = hackedArr.join(""); // default setting, we will replace later
    return result;
  };
  
  let codeStr = "Hi i am nice aaaa";
  let codeStr2 = "javascript is cool";
  let codeStr3 = "programming is fun";
  console.log(hacking(codeStr));
  console.log(hacking(codeStr2));
  console.log(hacking(codeStr3));
  
  //------------Exercise 2------------------------------------------------------------------
  // Is it Symmetrical? Create a function that takes a number as an argument and returns true or false
  // depending on whether the number is symmetrical or not.
  // NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.
  
  // Examples:
  // isSymmetrical(7227) ➞ true
  // isSymmetrical(12567) ➞ false
  // isSymmetrical(44444444) ➞ true
  // isSymmetrical(9939) ➞ false
  // isSymmetrical(1112111) ➞ true
  
  //------------------------solution-----------------------------------------------------------
  // 1. turn the variable into a string
  // 2. turn it into a string
  
  function isSymmetrical(num) {
    let numToStr = num.toString();
    let result = numToStr
      .split("")
      .reverse()
      .join("");
    if (numToStr == result) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isSymmetrical(1122332211));
  
  //----------------------------------------------------------------------------------------
  
  // Exercise 3
  // snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
  // Examples:
  // toCamelCase(“hello_world”) ➞ “helloWorld”
  // toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”
  
  //-------------solution-------------------------------------------------------------------
  
  const toCamelCase = str => {
    let splitStr = str.split("_");
    let camelArr = [];
    for (let i = 0; i < splitStr.length; i++) {
      let firstChr, restStr;
      if (splitStr[i] == splitStr[0]) {
        camelArr.push(splitStr[0]);
        continue; // jumps to the loop again but skipping what is after the continue
      } else {
        firstChr = splitStr[i].slice(0, 1);
        restStr = splitStr[i].slice(1, splitStr[i].length);
      }
      let newWord = firstChr.toUpperCase() + restStr;
      camelArr.push(newWord);
    }
    let result = camelArr.join("");
    return result;
  };
  console.log(toCamelCase("snake_log_hi"));
  
  //----------------------------------------------------------------------------------------

  // Exercise 4
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
  
  //-----------------Solution GA-------------------------------------------------------
  
  // const pigLat = str => {
  //   let firstStr = pigLat.split(" ");
  //   let secondStr = firstStr[i][0].slice;
  //   let vowStr = firstStr.join(" ");
  //   let consStr = secondStr.join(" ");
  //   let pigArr = [];
  //   let endWay = "way";
  //   let endAy = "ay";
  //   for (let i = 0; i < vowStr.length || constStr.length; i++) {
  //     if (firstStr[i][0] == "A") {
  //       vowStr.concat(endWay);
  //     } else if (firstStr[i][0] == "E") {
  //       vowStr.concat(endWay);
  //     } else if (firstStr[i][0] == "I") {
  //       vowStr.concat(endWay);
  //     } else if (firstStr[i][0] == "O") {
  //       vowStr.concat(endWay);
  //     } else if (firstStr[i][0] == "U") {
  //       vowStr.concat(endWay);
  //     } else {
  //       firstStr.push(0);
  //       consStr.concat(endAy);
  //     }
  //   }
  
  //   let pigWord = vowStr.concat(endWay) || consStr.push(0).thirdStr.concat(endAy);
  //   let result = pigArr.push(pigWord);
  //   return result;
  // };
  
  // console.log(pigArr.push(pigWord));
  
  //---------------------------solution 2 GA-------------------------------------------
  // array with vowel
  
  // const pigLat2 = str => {
  //  let firstStr2 = pigLat.split(" ");
  //  let secondStr2 = firstStr[i][0].slice;
  //  let vowStr2 = firstStr.join(" ");
  //  let consStr2 = secondStr.join(" ");
  //  let pigArr2 = [];
  //  let vowArr = ["a", "e", "i", "o", "u"];
  //  let endWay2 = "way";
  // let endAy2 = "ay";
  //   for (let i = 0; i < vowStr2.length || constStr2.length; i++) {
  //    if (firstStr2[i][0] == vowArr) {
  //     vowStr2.concat(endWay2);
  //   } else {
  //    firstStr2.push(0);
  //    consStr2.concat(endAy2);
  //  }
  //  }
  
  // let pigWord2 =
  //   vowStr2.concat(endWay2) || consStr2.push(0).thirdStr2.concat(endAy);
  
  // let result2 = pigArr2.push(pigWord2);
  // return result2;
  // };
  
  // console.log(result2);
  
  //-----------------Solution Hadi-------------------------------------------------------
  
  function pigLatin(str) {
    let translation = [];
    let lowerCase = str.toLowerCase();
    let splitStr = lowerCase.split(" "); // empty space as a rule
    const vowels = ["a", "e", "o", "i", "u"];
    for (let i = 0; i < splitStr.length; i++) {
      let firstChr = splitStr[i][0]; // take the very first character of my index
      let remainder = splitStr[i].slice(1, splitStr[i].length); // this is splitting the first character
      if (vowels.includes(firstChr.toLowerCase)) {
        let firstChrVal =
          (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
      } else {
        if (i == 0) {
          let firstChrRan = remainder[0];
          let wordRem = remainder.slice(1, remainder.length); //its taking the whole word except the 1st character
          remainder = firstChrRan.toUpperCase() + firstChrRan; //
        }
  
        const firstChrMain = remainder + firstChr + "ay"; // igo + h + ay
        translation.push(firstChrMain);
      }
    }
    let result = translation.join(" ");
    return result;
  }
  
  const strPig = "are is the way";
  console.log(pigLatin(strPig));
  
  
  //------------------------------------------------------------------------------------------

//==============================Exercises-recap-functions-270120==================================================================================

// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.

// this is the old school way:

// function mul(x, y) {
//   // let result = x * y;
//   console.log(x, y);
// }
// console.log(mul(2, 4));

function multiplyTwoNumbers(a, b) {
  let result = a * b;
  console.log(result);
}

multiplyTwoNumbers(2, 3);

//-----------------------------------------------------------------------------------------------------------------------------

// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

const multiply = function(x, y) {
  console.log(x * y);
};

multiply(4, 7);
//-----------------------------------------------------------------------------------------------------------------------------

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

// 3rd way to formulate functions

const mul = (x, y) => {
  return x * y; // every function shall have return but its not must
};

console.log(mul(4, 9));

//-----------------------------------------------------------------------------------------------------------------------------

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.

//____version1

function div(x, y) {
  console.log(x % y);
}

//____version2

const div1 = function(a, b) {
  console.log(a % b);
};

//____version3

const div2 = (a, b) => a % b;

div(4, 2);
div(7, 4);
div(3, 5);

//-----------------------------------------------------------------------------------------------------------------------------

// Print Exponential Values
// --> Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// --> For example if we have function(3, 5) The function should print 3 9 27 81 243.
// --> Prints 5 exponential values of 3.
// --> function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

// function exp(x, y) {
//   let expNum = [];
//   result = 0;
//   for (i = 0; i < y; i++);
// }
// expNum = typeof exp;
// console.log(expNum);
// // if ((expNum = number)) {
// //   console.log(exp(Math.pow(x, x)));
// // } else {
// //   console.log(`${exp} is not a number`);
// // }
// const newStr2 = (expNum.length = y);
// expNum.push(newStr2);
// // return result;
// // console.log(exp(3, 8));

//----------------Hadis-------------------------------------------------------------------------------------------------------

function printValue(x, y) {
  // never write name of the function inside the function, only the parameter
  if (typeof x == "number" && typeof y == "number") {
    // console.log(true);
    let result = 1;
    let values = ""; // gives  order to the output
    for (let i = 0; i < y; i++) {
      result *= x; // you can use math.pow
      values += `${result} `; // to print the numbers in a presentable situation, important to make the space otherwise the will get printed together
    }
    return values;
  } else {
    return "One of your vars is not a number";
  }
}

console.log(printValue(4, 3));

//-----------------------------------------------------------------------------------------------------------------------------

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store
// your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.

// function printFavoriteFruit(favFruit) {
//   console.log(favFruit);
// }

// favFruit("pear");

//----------------Hadis-------------------------------------------------------------------------------------------------------

let fruit = "Apple";
function printFavoriteFruit() {
  fruit = "Banana";
  console.log(`my favorite fruit is ${fruit}`);
}

printFavoriteFruit();

//-----------------------------------------------------------------------------------------------------------------------------

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible?
// Why/Why not? Comment your answer in the index.js file.

function exponent(x, y) {
  for (i = 0; i < y; i++);
  console.log(exponent);
}

exponent(2, 5);

//----------------Hadis-------------------------------------------------------------------------------------------------------

function exponent(staterNum, exponent) {
  let result = 0;
  let multi = staterNum * staterNum;
  for (let i = 0; i < exponent; i++) {
    result += multi; // variable multiplied by itself
  }

  return result;
}

console.log(exponent(2, 4));

//=========================================Exercises==290120=============================================================================================

// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number

//------------------------------------------------------------------------------------------------------------------------

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function userSalNet(name, salary, ...kids) {
  let x = 0;
  for (let i = 0; i < kids.length; i++) {
    if (kids[i] == 1) {
      x = 30;
    } else if (kids[i] == 2) {
      x = 25;
    } else if (kids[i] > 2) {
      x = 20;
    } else {
      x = 55;
    }
  }

  let totalSal = (salary / 100) * x;
  return `The netto salary of ${name} per month is ${totalSal}€`;
}

console.log(userSalNet("pluto", 7000, "ff"));

//------------------------------------------------------------------------------------------------------------------------

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

// function phoneNum () {

// }

//------------------------------------------------------------------------------------------------------------------------

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

// function () {

// }

//------------------------------------------------------------------------------------------------------------------------

//==================EXERCISE==230120==========================================================

//------------Exercise 1-----------------------------------------
// c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// Examples:
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

//-----------solution--------------------------------------------
// 1. check that there are no upper cases
// 2. create empty array and empty value
// 3. then first split
// 4. create a loop
// 5. letters[i] = 4; --> condition after if (if a letter is == A, then the letter will be replaced by 4)
// 6. hackedArr.push(letters[i]); --> this is to push it into the new string
// 7. the do the same for every replacement
// 8. let result = hackedArr.join("") outside the brackets --> this will bring the letters together again
// 9. let codeStr = "Hi i am nice aaaa"; --> this is to implement the string that we wanna have replaced
// 10. console.log(hacking(codeStr)); --> this will print the first declared variable (hacking) including the declared string (codeStr)

const hacking = str => {
  let hackedArr = []; // first start with empty array,
  let toSmall = str.toLowerCase();
  let letters = toSmall.split(""); // empty double quotes because i wanna separate every word with a space
  for (let i = 0; i < letters.length; i++) {
    //it will loop until the condition is falthy
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]);
    }
  }

  let result = hackedArr.join(""); // default setting, we will replace later
  return result;
};

let codeStr = "Hi i am nice aaaa";
let codeStr2 = "javascript is cool";
let codeStr3 = "programming is fun";
console.log(hacking(codeStr));
console.log(hacking(codeStr2));
console.log(hacking(codeStr3));

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

//------------------------solution--------------------------
// 1. turn the variable into a string
// 2. turn it into a string

function isSymmetrical(num) {
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
}
console.log(isSymmetrical(1122332211));

//------------Exercise 3-----------------------------------------

// snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
// Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

//-------------solution------------------------------------------

const toCamelCase = str => {
  let splitStr = str.split("_");
  let camelArr = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr;
    if (splitStr[i] == splitStr[0]) {
      camelArr.push(splitStr[0]);
      continue; // jumps to the loop again but skipping what is after the continue
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArr.push(newWord);
  }
  let result = camelArr.join("");
  return result;
};
console.log(toCamelCase("snake_log_hi"));

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

//-----------------Solution GA------------------------------

// const pigLat = str => {
//   let firstStr = pigLat.split(" ");
//   let secondStr = firstStr[i][0].slice;
//   let vowStr = firstStr.join(" ");
//   let consStr = secondStr.join(" ");
//   let pigArr = [];
//   let endWay = "way";
//   let endAy = "ay";
//   for (let i = 0; i < vowStr.length || constStr.length; i++) {
//     if (firstStr[i][0] == "A") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "E") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "I") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "O") {
//       vowStr.concat(endWay);
//     } else if (firstStr[i][0] == "U") {
//       vowStr.concat(endWay);
//     } else {
//       firstStr.push(0);
//       consStr.concat(endAy);
//     }
//   }

//   let pigWord = vowStr.concat(endWay) || consStr.push(0).thirdStr.concat(endAy);
//   let result = pigArr.push(pigWord);
//   return result;
// };

// console.log(pigArr.push(pigWord));

//---------------------------solution 2 GA-------------------------------------------
// array with vowel

// const pigLat2 = str => {
//  let firstStr2 = pigLat.split(" ");
//  let secondStr2 = firstStr[i][0].slice;
//  let vowStr2 = firstStr.join(" ");
//  let consStr2 = secondStr.join(" ");
//  let pigArr2 = [];
//  let vowArr = ["a", "e", "i", "o", "u"];
//  let endWay2 = "way";
// let endAy2 = "ay";
//   for (let i = 0; i < vowStr2.length || constStr2.length; i++) {
//    if (firstStr2[i][0] == vowArr) {
//     vowStr2.concat(endWay2);
//   } else {
//    firstStr2.push(0);
//    consStr2.concat(endAy2);
//  }
//  }

// let pigWord2 =
//   vowStr2.concat(endWay2) || consStr2.push(0).thirdStr2.concat(endAy);

// let result2 = pigArr2.push(pigWord2);
// return result2;
// };

// console.log(result2);

//-----------------Solution Hadi------------------------------

function pigLatin(str) {
  let translation = [];
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(" "); // empty space as a rule
  const vowels = ["a", "e", "o", "i", "u"];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0]; // take the very first character of my index
    let remainder = splitStr[i].slice(1, splitStr[i].length); // this is splitting the first character
    if (vowels.includes(firstChr.toLowerCase)) {
      let firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
    } else {
      if (i == 0) {
        let firstChrRan = remainder[0];
        let wordRem = remainder.slice(1, remainder.length); //its taking the whole word except the 1st character
        remainder = firstChrRan.toUpperCase() + firstChrRan; //
      }

      const firstChrMain = remainder + firstChr + "ay"; // igo + h + ay
      translation.push(firstChrMain);
    }
  }
  let result = translation.join(" ");
  return result;
}

const strPig = "are is the way";
console.log(pigLatin(strPig));


//===================================Exercise==280120=====================================================================

//================================exercises(mix)==============================================================================

// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

function str(string) {
  if (string.includes("JavaScript")) {
    console.log("I know it's crazy 😉");
  }
}

let str2 = "Python, JavaScript, C++, CSS";
str(str2);

//----------------------------------------------------------------------------------------------------------------------------

// Create a function that calculates the user age e.g. 2000 -> 20. (Date().getFullYear);

// function userAge(userNum2) {
//   let currentYear = 2020;
//   let resAge = 0;
//   let userNum2 = currentYear - userInput;
//   userAr.push(resAge);
//   return resAge;
// }

// const userInput = 2000;
// console.log(userAge(userNum2));

//------------------Hadis solution--------------------------------------------------------------------------------------------

function age(num) {
  let year = new Date().getFullYear();
  let userAge = year - num;
  return num < year && num > 1900
    ? `${userAge} years old`
    : `Please enter a valid year`;
}
console.log(age(1940));
console.log(age(2200));

//----------------------------------------------------------------------------------------------------------------------------

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const seasonWinter = ["December", "January", "February"];

const seasonSpring = ["March", "April", "May"];

const seasonSummer = ["June", "July", "August"];

const seasonAutumn = ["September", "October", "November"];

function userMonth(userText) {
  let result = "";
  switch (userText) {
    case January:
      result = monthNames[0];
      break;
    case February:
      result = monthNames[1];
      break;
    case March:
      result = monthNames[2];
      break;
    case April:
      result = monthNames[3];
      break;
    case May:
      result = monthNames[4];
      break;
    case June:
      result = monthNames[5];
      break;
    case July:
      result = monthNames[6];
      break;
    case August:
      result = monthNames[7];
      break;
    case September:
      result = monthNames[8];
      break;
    case October:
      result = monthNames[9];
      break;
    case November:
      result = monthNames[10];
      break;
    case December:
      result = monthNames[11];
      break;
    default:
      console.log("This is not a month");
  }
  return result;
}

let userText = "March";

if ((userMonth = seasonSpring)) {
  console.log(userMonth + ", Spring");
} else if ((userMonth = seasonSummer)) {
  console.log(userMonth + ", Summer");
} else if ((userMonth = seasonAutumn)) {
  console.log(userMonth + ", Autumn");
} else if ((userMonth = seasonWinter)) {
  console.log(userMonth + ", Winter");
} else {
  console.log(userMonth + ", not a season");
}

//----------------------------------------------------------------------------------------------------------------------------

const seasonWinter2 = ["", "December", "January", "February"];
const seasonSpring2 = ["", "March", "April", "May"];
const seasonSummer2 = ["", "June", "July", "August"];
const seasonAutumn2 = ["", "September", "October", "November"];

let arrMonth = seasonAutumn2 + seasonSpring2 + seasonWinter2 + seasonSummer2;

console.log(arrMonth);

// function userMonth2(userEntry2) {
//     let result = "";
//     let userArray = [];
//     for (let i=0; i < arrMonth.length; i++) {
//       if (userEntry2.includes(seasonWinter2)) {
//           console.log(seasonWinter2[i] + ", Winter");
//         } else if (userEntry2.includes(seasonSummer2)) {
//             console.log(seasonSummer2[i] + ", Summer");
//         } else if (userEntry2.includes(seasonAutumn2)){
//             console.log(seasonAutumn2[i] + ", Autumn")
//         } else if (userEntry2.includes(seasonSpring2)){
//             console.log(seasonSpring2[i] + " , Spring")
//         } else {
//             console.log("this is not a month");
//         }

//         return result;
//     }

//   userEntry2 = [March];
//   userMonth(userEntry2);

//----------------------------------------------------------------------------------------------------------------------------

const monthNames2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function monthSeason(userText2) {
  let result = [];
  let winter = monthNames2[i] + ", Winter";
  let summer = monthNames2[i] + ", Summer";
  let spring = monthNames2[i] + ", Spring";
  let autumn = monthNames2[i] + ", Autumn";
  for (let i = 0; i < monthNames2.length; i++) {
    if (userText2[i][0] || userText2[i][1] || userText2[i][2]) {
      winter.push(result);
    } else if (userText2[i][3] || userText2[i][4] || userText2[i][5]) {
      result.push(monthNames2[i] + ", Spring");
    } else if (userText2[i][6] || userText2[i][7] || userText2[i][8]) {
      result.push(monthNames2[i] + ", Summer");
    } else if (userText2[i][9] || userText2[i][10] || userText2[i][11]) {
      result.push(monthNames2[i] + ", Autumn");
    } else {
      result.push("this is not a month");
    }
  }

  return result;
}

console.log(monthSeason("February"));

//----------------------------------------------------------------------------------------------------------------------------

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function dictionary() {}
let arrDic = [];

//-----------------------------------------------------------------------------------------------------------------------------

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofor = who => {
  return `Two for me and one for ${who}`;
};

console.log(twofor("Ali")); // -> "Two for me and one for Ali"
console.log(twofor()); // -> "Two for me and one for you"

//-----------------------------------------------------------------------------------------------------------------------------

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp) => {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

//------------------------------------------------------------------------------------------------------------------------------------

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentDeg(array) {
  // let resultFin = [];
  let average = (array += grades[i] / grades[i].length);
  for (let i = 0; i < array.length; i++) {
    if (average <= 70) {
      resultFin.push("F");
    } else if (average >= 70 && average <= 80) {
      resultFin.push("C");
    } else if (average >= 80 && average <= 85) {
      resultFin.push("B");
    } else if (average >= 85 && average <= 90) {
      resultFin.push("A");
    } else if (average >= 90) {
      resultFin.push("A+");
    } else {
      resultFin.push("not a degree");
    }

    return resultFin;
  }

  grades = [89, 75, 80, 90, 83];
  console.log(studentDeg(resultFin));
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

// function hobbies(hobAr) {
//   let userData = ["name", "age", "address", ..."hobbies"];
//   // let result = 0;
//   for (i = 0; i < hobAr.length; i++) {
//     userData.map(hobAr);
//     console.log(hobAr);
//   }
// }

// let userInfo = ["gabriela", "34", "selchower", "swimming", "yoga", "read"];
// hobbies(userInfo);

// if (activities.includes(dance || party)) {
//   console.log("you are cool");
// }

//=========================more exercises===========================================================================

// Count Occurrences. Create a function that accepts two arguments: a string and a letter.
// The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

function countOccurrences(string, letter) {
  let amountChr = "";
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter++;
      console.log(counter);
    }
  }
  return counter;
}

countOccurrences("this is a string", "s");

//-------------------------------------------------------------------------------------------------------------------------------------

// Create a function which calculates how old a dog is in doggie years.
// The function should accept one argument that is the puppy’s age in human years.
// Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

function dogAge(x) {
  let result = 0;
  let dogYear = x * 7;
  console.log(`my dog is ${dogYear} years old`);
}

dogAge(5);

//-------------------------------------------------------------------------------------------------------------------------------------

// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack.
// The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// i.e. calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

function favSnack(age, nutsPacks) {
  let result = 0;
  let maxAge = 89;
  const nutsForLife = nutsPacks * 365 * (maxAge - age);
  console.log(
    `I will need ${nutsForLife} packets of nuts to last until I am 98`
  );
}

favSnack(20, 5);

//-------------------------------------------------------------------------------------------------------------------------------------

// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// --> Total number of slices. --> slices
// --> Number of recipients. --> recipients
// --> How many slices each person gets. --> person
// Examples:
// --> equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// --> equalSlices(8, 3, 2) ➞ true
// --> equalSlices(8, 3, 3) ➞ false
// --> equalSlices(24, 12, 2) ➞ true

function equalSlices(slices, recipients, person) {
  let totalSlices = slices * recipients;
  if (totalSlices == person) {
    console.log("true");
  } else if (totalSlices < person) {
    console.log("false");
  } else {
    console.log("something else");
  }
}

equalSlices(8, 3, 29);

//-------------------------------------------------------------------------------------------------------------------------------------

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

function exesAndOs(string) {
  let stringXO = string.toLowerCase();
  let splitStr = stringXO.split("");
  console.log(splitStr);
  let x = 0;
  let o = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == "o") {
      o++;
    } else if (splitStr[i] == "x") {
      x++;
    }
  }

  if (x == o) {
    console.log("true");
  } else if (x > o || x < o) {
    console.log("false");
  }
}
let XO = "ooxxo";
exesAndOs(XO);

//-------------------------------------------------------------------------------------------------------------------------------------

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

// @ and . not at the beginning and not at the end but they are in the string

function emailVal(str) {
  let x = str.includes("@", ".");
  if (
    x[0] == "@" ||
    x[0] == "." ||
    x.length - 1 == "@" ||
    x.length - 1 == "."
  ) {
    console.log("this email is invalid");
  } else {
    console.log("this email is valid");
  }
}

let emailStr = "hello";
emailVal(emailStr);

//-------------------------------------------------------------------------------------------------------------------------------------

//===================================Exercise==300120=====================================================================

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4),
// If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp = 2) => {
  // you can write the value of the parameter inside the parenthesis
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

//--------------------------------------------------------------------------------

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentD(...avg) {
  // let degrees = [];
  let average = 0;
  let sum = 0;
  for (let i = 0; i < avg.length; i++) {
    sum = sum += avg[i];
    console.log(sum);
    average = sum / avg.length;
    console.log(average);

    if (average > 70 && average < 80) {
      console.log("C");
    } else if (average > 80 && average < 85) {
      console.log("B");
    } else if (average > 85 && average < 90) {
      console.log("A");
    } else if (average > 90) {
      console.log("this is an A+");
    } else {
      console.log("this is an error");
    }
  }

  return average;
}

studentD(78, 90, 67, 86, 83, 73);

//-------------------my solution-------------------------------------------------------------

// function studentDeg(array) {
//   let resultFin = [];
//   let average = (array += array[i] / array.length);
//   for (let i = 0; i < array.length; i++) {
//     if (average <= 70) {
//       resultFin.push("F");
//     } else if (average >= 70 && average <= 80) {
//       resultFin.push("C");
//     } else if (average >= 80 && average <= 85) {
//       resultFin.push("B");
//     } else if (average >= 85 && average <= 90) {
//       resultFin.push("A");
//     } else if (average >= 90) {
//       resultFin.push("A+");
//     } else {
//       resultFin.push("not a degree");
//     }

//     return resultFin;
//   }

//   grades = [89, 75, 80, 90, 83];
//   console.log(studentDeg(resultFin));
// }

//-----------------------------Hadis solution---------------------------------------------------

const studentDe = (...args) => {
  let result = "";
  let sum = 0;
  let avg = 0;
  sum = args.reduce((acc, cur) => acc + cur);
  avg = Math.floor(sum / args.length);
  //   for (let i = 0; i < args.length; i++) {
  //        sum += args[i];

  if (avg < 70) {
    result = `this student has F mark the was ${avg}`;
  } else if (avg >= 70 && avg <= 80) {
    result = `this student has C mark the was ${avg}`;
  } else if (avg > 90) {
    result = `this student has C mark the was ${avg}`;
  } else {
    result = `sorry, something went wrong`;
  }

  console.log(sum);
  return result;
};

console.log(studentDe(33, 4, 55, 66, 778, 34, 2));

//----------------------------------------------------------------------------------------------------------------

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

//-------------------Hadis solution-----------------------------------------------------------------------------------------

const bankChecker = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split("");
  console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    console.log();
    let remainderStr = strToArr[i].slice(2, strToArr[i].length);
    console.log(remainderStr);
    if (firstTwoChr == "de") {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a vallid bank account ${strToArr[i]}`;
        counter++;
      } else if (remainderStr.lenth == 20) {
        result = `The bank account is DE${remainderStr}`;
        counter++;
      }
    }
  }

  if (counter == 0) {
    return `There was no bank account in the text`;
  }

  return result;
};

console.log("bank");
console.log(bankChecker("de my bank account is"));

//========================EXERCISES==300120======================================================================================
// find three previous exercises and do them in a different way:
//=========================================================================================================================

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

function textUser(text) {
  let phoneArr = [];
  let phoneNr = text.toLowerCase().split(" "); // split text elements into an array
  console.log(phoneNr);
  console.log(typeof phoneNr); // type of elements
  for (let i = 0; i < phoneNr.length; i++) {
    let textToNr = parseInt(phoneNr[i]); // I turn elements of the array into numbers or NaN
    // textToNr.find(item => typeof item === "number");
    // console.log(textToNr);

    // if (typeof textToNr[i] === "number") {
    //   console.log("hello");
  }

  // console.log(textToNr.filter(elem => typeof elem === "number"));

  // console.log(textToNr);
  // if (typeof textToNr[i] === "number") {
  //   console.log(textToNr[i]);
}

//   if () {
//     // is it a number? // example found online : console.log(arr.filter(item => typeof item === 'number'));
//     phoneArr.push(phoneNr[i]);
//     console.log(phoneArr);
//   }
// }

// if (
//   phoneNr.length == 7 && // does it have 7 digits?
//   phoneArr[0] == "0" && // does it start with 030?
//   phoneArr[1] == "3" &&
//   phoneArr[2] == "0"
// ) {
//   console.log(phoneArr);
// } else {
//   console.log("this is not a number");
// }

//return phoneNr;

textUser("Hello my number is 015773941536");

//--------------------------------------------------------------------------------------------------------------------------

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function strAndWord(strand, word) {
  let wordStrand = 0;
  let wholeWord = 0;
  let strandToArr = strand.toLowerCase().slice("");
  console.log(strandToArr);
  let wordToArr = word.toLowerCase().slice("");
  console.log(wordToArr);
  // for (let i = 0; i < wordToArr.length; i++) {
  //   if (strandToArr.length == wordToArr[i][0]) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // }
}

strAndWord("be", "Belgium");

// //--------------------------------------------------------------------------------------------------------------------------

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

function userData(name, age, street, ...hobbies) {
  let userName = 0;
  let userAge = 0;
  let userHobbies = "";
  console.log(
    `Hello ${name}, ${age} years old, living in ${street}. You declared your hobbies are ${hobbies}`
  );

  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i] == "dance" || hobbies[i] == "party") {
      console.log("you are cool");
    }
  }
}

userData("peter", 58, "mahlower str", "dance", "walk", "cook");

//--------------------------------------------------------------------------------------------------------------------------

// Write a function will give the alphabetical order for a passed character
// i.e.  A -> 1
// B -> 2

function alphaBet() {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var letterPosition = alphabet.indexOf(letter) + 1;
  console.log(letterPosition);
}
let letter = "z";
alphaBet(letter);

//--------------------------------------------------------------------------------------------------------------------

const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 6;

console.log(
  "The character code " +
    sentence.charCodeAt(index) +
    " is equal to " +
    sentence.charAt(index)
);
// expected output: "The character code 113 is equal to q"

//--------------------------------------------------------------------------------------------------------------------

//========================EXERCISES==310120======================================================================================

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentD(...avg) {
  // let degrees = [];
  let average = 0;
  let sum = 0;
  for (let i = 0; i < avg.length; i++) {
    sum = sum += avg[i];
  }

  console.log(sum);

  average = sum / avg.length;
  console.log(average);

  if (average > 70 && average < 80) {
    console.log("C");
  } else if (average > 80 && average < 85) {
    console.log("B");
  } else if (average > 85 && average < 90) {
    console.log("A");
  } else if (average > 90) {
    console.log("this is an A+");
  } else {
    console.log("this is an error");
  }

  return average;
}

studentD(78, 90, 67, 86, 83, 73);

//--------------------------------------------------------------------------------------------------------------------

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

function strAndWord(strand, word) {
  let wordStrand = 0;
  let wholeWord = 0;
  let strandToArr = strand.toLowerCase().slice("");
  console.log(strandToArr);
  let wordToArr = word.toLowerCase().slice("");

  // for (let i = 0; i < wordToArr.length; i++) {
  //   if (strandToArr.length == wordToArr[i][0]) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // }
}

console.log(wordToArr);

strAndWord("be", "Belgium");


//====================================EXERCISES==030220=======================================================

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
// e.g. add(2)(3)

function add4(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add4(2)(3));

// Write a function multiplier that uses a closure to perform multiplication.
// However, the outer function should be stored in a variable which is then called.
function mul(num5, num6) {
  function mul2(n) {
    return n;
  }
  return mul2(num5 * num6);
}
console.log(mul(5, 2));

//--------------hadis-------------------------------------
function multiplier(num) {
  // outer function
  // do something
  return x => x * num; // inner function in ES6 style
}
const times = multiplier(5)(5); // the function is stored in a variable // this is the call for the outer function
console.log(times); // do other thing // separate the code for extra safety // this is the call for the inner function // i can have it in both lines
// the first call is the variable but the real function call is the second one.

//--------------------------------------------------------

var all = 3;
(function() {
  var all = "Hi";
  console.log(all);
})();
console.log(all);

//---------------------------------------------------------

// Write a function that accepts several parameters and calculates the number of money
// that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
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

function money(cur, ret, wag, per) {
  let ageCur = 0; // 40
  let ageRet = 0; // 60
  let monWag = 0; // 1000
  // let year = new Date().getFullYear();
  // let born = 0;
  let yearsToRet = ageRet - ageCur;
  let saving = (monWag / 100) * per * 12 * yearsToRet;
  console.log(saving);

  if (ageCur > ageRet) {
    console.log("you are already retired");
  } else {
    console.log(saving);
  }
}

console.log(money(35, 65, 1500, 10));

//---------------------------------Hadis solution------------------------------------------------------------

((currentAge, retirementAge, monthlyWage, pare) => {
  // this function is anonymous, it does not need a name
  if (currentAge >= retirementAge) {
    console.log("you are already retired");
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log(yearsToSave + " years to go");
    let monthsToSave = yearsToSave * 12;
    console.log(monthsToSave + " months to go");
    let amountSavedByMonth = (monthlyWage * pare) / 100;
    console.log(amountSavedByMonth);
    let totalSave = amountSavedByMonth * monthsToSave;
    console.log(
      `you will get retired in ${yearsToSave} and you will have ${totalSave} in your bank`
    );
  }
})(30, 65, 1000, 5);

//---------------------------------------------------
// function age(num) {
//   let year = new Date().getFullYear();
//   let userAge = year - num;
//   return num < year && num > 1900
//     ? `${userAge} years old`
//     : `Please enter a valid year`;
// }
// console.log(age(1940));
// console.log(age(2200));

//=================================================================================

// trim()
let str = " Hi ";
console.log(str.trim());

// trimEnd()
console.log(str.trimEnd());

//trimStart()
console.log(str.trimStart());

// startsWith()
let text = "Hi tonight I will have fun";
console.log(text.startsWith("Hi")); // true

//endsWith()
console.log(text.endsWith("fun")); // true

//charAt()
// will
let chr = "A"; //
console.log(chr.charAt(0));

// charCodeAt
let chr2 = "b"; // UTF-16 UTF-8 ASCII
console.log(chr2.charCodeAt(0) - 96); // the alphabet starts in 96

const icons = "🙃";
console.log(icons);