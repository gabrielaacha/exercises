//=============EXERCISE200120=========================================================================

// array name <value 1>, <value2>,...
// Array(num) // to create an array with num slots
// Array.of() creating array
// Accessing using square brackets
// Adding items
// deleting items;
// array.pop()
// array.shift()
// Array.slice() // slice would cut
// Array.split()

//====================================================================================================

// 1. Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

//-----------------------------------------------------------------------------------------------------

// 1b. Declare another variable and assign the second item of the array as a value.

let euroCity2 = euroCities[1];

//-----------------------------------------------------------------------------------------------------

// 2. Change the first item in the array to “Berlin”.

euroCities[0] = "Berlin";
console.log(euroCities);

//-----------------------------------------------------------------------------------------------------

// 3. Print the length of the array “euroCities”.

console.log(euroCities.length);

//-----------------------------------------------------------------------------------------------------

// 4. Remove the last item of the array “euroCities”.

euroCities.pop();
console.log(euroCities);

//-----------------------------------------------------------------------------------------------------

// 5. Use an array method to add “Budapest” to the euroCities array.

let euroCity = "Budapest";

euroCities.push(euroCity);
console.log(euroCities);

//-----------------------------------------------------------------------------------------------------

// 6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ["Tokio", "Shanghai", "Hanoi", "New Dehli", "Bangkok"];

//-----------------------------------------------------------------------------------------------------

// 7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

console.log(asianCities.slice(1, 4)); // slice and splice work same

let newArray = asianCities.splice(1, 3); // always create new variable and assign the value
console.log(newArray);

//-----------------------------------------------------------------------------------------------------

//=============EXERCISE200120=========================================================================

// Array.join() // erases spaces in between word

//====================================================================================================

// 1. sumOfNumbers: Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.

let sumOfNumbers = [3444, 7373, 54, 940, 3];
let sum = 0; // you just start with 0
let product = 1;
for (var i = 0; i < sumOfNumbers.length; i++) {
  sum += sumOfNumbers[i]; // each time the
  product *= sumOfNumbers[i];
}

console.log(`The sum  is ${sum} The product is ${product}`);

const sumOfNumbers3 = [3444, 7373, 54, 940, 3];
const add = (a, b) => a + b;
const sum3 = sumOfNumbers3.reduce(add);

console.log(sum3);

//-----------------------------------------------------------------------------------------------------

// 2. Hello Friend: Create an array filled with your friends’ and family’s names.
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
// Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

let friendsName = ["Samuel", "Maria", "Luke", "Mary"];
for (let i = 0; i < friendsName.length; i++) {
  // or i keep the = and add -1 // the friends.length counts the amount of elements in the array, you write that if you don't know this amount
  console.log(`Hello ${friendsName[i]} and he is index ${i}`);
}

//-----------------------------------------------------------------------------------------------------

// 3. City Names.: Create an array of city names.
// Loop through the array and add the city names to a string.
// Example of expected output: “Berlin, Paris, Prague, Rome”.

let cityNames = ["Berlin", "Paris", "Prague", "Rome"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    cityNamesStr += ".";
  } else {
    cityNamesStr += ", ";
  }
}

console.log(cityNamesStr);

//-----------------------------------------------------------------------------------------------------

// a. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
// Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(numArr);

//-----------------------------------------------------------------------------------------------------

// b. Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

const arrNames = ["sAra", "akI", "nancy"]; // it doesn't work
for (let i = 0; i < arrNames.ĺength; i++) {
  arrNames[i] =
    arrNames[i][0].toUpperCase() + arrNames[i].substr(1).toLowerCase(); // the first [i] value is a string // this kind of syntax is everywhere
}
console.log(arrNames);

//-----------------------------------------------------------------------------------------------------

//=============EXERCISE210120=========================================================================

// Array.isArray(arr) // to check if it is an array
// Array.includes() // to ask which array i am using now // is this array including "hadi"?
// Array.reverse() // Reverse
// Array.concat() // combines several arrays into one array
//Array.filter() // creates a new array // narrow down choices, will create a new array with the results
// Array.find() // return the value of the first element
// find will come up with the very first result it finds, as opposed to filter, which will chose several options
// Array.map() // creates a new array // it would replace "for" by this in order to alter the individual indexes

//====================================================================================================

// 1. Reverse the string: “JavaScript”
// expected outcome :
//[
//  'J', 'a', 'v', 'a',
//  'S', 'c', 'r', 'i',
//  'p', 't'
// ]
// tpircSavaJ
const str1 = "JavaScript";
let strToArr = str1.split("");
console.log(strToArr);
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);

//-----------------------------------------------------------------------------------------------------

// 1. Make an array of your siblings’ names or your favorite movie characters’ names.
let arrMov = ["Alma", "Elisabeth", "Dorothy"];

//-----------------------------------------------------------------------------------------------------

// 2. Make an array of your parents’ names.
let arrPar = ["Edurne", "Pablo"];

//-----------------------------------------------------------------------------------------------------

// 3. Combine these two arrays.
let arrNames = arrMov.concat(arrPar);
console.log(arrNames);

//-----------------------------------------------------------------------------------------------------

// 4. Add your pets’ names.
arrNames.push("Croquetas");

//-----------------------------------------------------------------------------------------------------

// 5. Reverse the order of the array.
let arrRev = arrNames.reverse();
console.log(arrRev);

//-----------------------------------------------------------------------------------------------------

// 6. Access one of your parents’ names.
let resultPar = arrNames.find(parName => parName == "Edurne");
console.log(resultPar);

console.log(arrNames[2]);

//-----------------------------------------------------------------------------------------------------

// 7. Update the name of one of your parents

let newName = (arrNames[2] = "Nieves");
console.log(arrNames);

//-----------------------------------------------------------------------------------------------------

// another solution

mom = "Nieves";
arrNames[2] = mom;
console.log(arrNames);

//-----------------------------------------------------------------------------------------------------
