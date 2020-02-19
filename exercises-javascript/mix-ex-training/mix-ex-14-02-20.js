//============================exercises==20-01-20===================================================
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);
// 1. sumOfNumbers: Create a program that adds up the numbers in an array (of at least 3 numbers).
// Bonus: Print to screen both the sum and the product of these numbers.

let arr = [1, 2, 3];

function addNum(num) {
  return arr.push(num);
}

addNum(4);
console.log(arr);
addNum(5);
console.log(arr);
addNum(6);
console.log(arr);

//..................
console.log(
  "------------------------------------------exercise-1-------------------------------------------------------"
);

let arr2 = [1, 2, 3, 4];
let result = 0;

function sum() {
  for (let i = 0; i < arr2.length; i++) {
    let x = (result += arr2[i]);
    console.log(x);
  }
}

sum();

//.................................................................................................
console.log(
  "------------------------------------------exercise-2-------------------------------------------------------"
);
// 2. Hello Friend: Create an array filled with your friends’ and family’s names.
// Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
// Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

let names = ["wolfgang", "karl", "florian", "ralf"];
for (let i = 0; i < names.length; i++) {
  let hello = names[i];
  let index = names.indexOf(names[i]);
  console.log(`Hello my dear ${hello}, you are index nr. ${index}`);
}

//.................................................................................................
console.log(
  "------------------------------------------exercise-3-------------------------------------------------------"
);
// 3. City Names.: Create an array of city names.
// Loop through the array and add the city names to a string.
// Example of expected output: “Berlin, Paris, Prague, Rome”.

const cityNames = ["Berlin", "Paris", "Prague", "Rome"];
const newArr = " ";

for (let i = 0; i < cityNames.length; i++) {
  let x = cityNames.join();
  console.log(x);
  return x;
}

let y = newArr.push(x);
console.log(newArr);

//................................................................................................
console.log(
  "------------------------------------------exercise-4-------------------------------------------------------"
);
// a. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
// Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

const arr3 = [3, 5, 2, 4];
let z = arr3.map(x => x + 1);
console.log(z);

const intArray = [2, 3, 5, 6, 8];
let result4 = intArray.map(x => x + 1); // increase every individual index with 1
console.log(result4);

//.................................................................................................
console.log(
  "------------------------------------------exercise-5-------------------------------------------------------"
);
// b. Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

//.................................................................................................
