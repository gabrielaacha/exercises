// Test - Programming Basics

// Test Instructions

// Work from the index.js file provided in this repository.
// Follow all of the instructions below to complete the test.
// Important: Make sure that the names of your variables/functions match the names in the instructions below.
// Print solutions to the console where specified.
// Make sure to commit and push your test.
// Good luck four_leaf_clover

//.............................................................................................................................................

// Data Structure

// Objects

// 1. Key Pair Values
// Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.

const profileData = {
  name: "Hélène",
  surname: "Smith",
  age: 200,
  city: "Geneva"
};

//.............................................................................................................................................

// 2. Object to Array
// Convert an object into a nested array of key pair values. Look the example below.
// Given Object

// myObj = {
//   "1": 10,
//   "2": 20,
//   "3": 30
// };

// Expected Output:

// [
//   ["1", 10],
//   ["2", 20],
//   ["3", 30]
// ];

const myObj = {
  "1": 10,
  "2": 20,
  "3": 30
};

const getObjectValues = {};
(getObjectValues["1"] = 10),
  (getObjectValues["2"] = 20),
  (getObjectValues["3"] = 30),
  console.log(Object.values(getObjectValues));

function arrObj() {
  let newArr = [];
  for (let [key, value] of Object.entries(myObj)) {
    // now we have for of (instead of for in)
    newArr.push(`${key} : ${value}`);
  }
  return newArr;
}

console.log(arrObj());

// const getObjectValues = {};
// (getObjectValues["choice1"] = "tea"),
//   (getObjectValues["choice2"] = "coffee"),
//   (getObjectValues["choice3"] = "milk"),
//   console.log(Object.values(getObjectValues));

//..................................................................................................................................

// Arrays

// 1. Data Manipulation
// Create a function named "convertArrayData". Use array methods to manipulate the data the array below.
// The first two items in the array should switch positions and the third item should be replaced by a new item.
// Change the data to get the result below. Print your solution to the console.

// Original Array
// ["coffee", "tea", "juice"];

// Expected output
// ["tea", "coffee", "milk"];

function convertArrayData(arr) {
  let newArr = []; // creating new array to store the last item
  let firstChange = (arr[2] = "milk"); // here I am replacing item 2 (the last) for "milk"
  newArr.push(firstChange); // making a new array with the item "milk"
  let secondChange = arr.pop(); // cutting last item
  let thirdChange = arr.reverse(); // reversing the 2 remaining items ("coffee and tea")
  let fourthChange = thirdChange.concat(newArr); // bringing all items together

  return fourthChange;
}

let array = ["coffee", "tea", "juice"]; // ["tea", "coffee", "milk"];
console.log(convertArrayData(array));

//....................................................................................................................................

// 2. Create Grid (Optional)

// Create a function called "createGrid", which returns a grid of a 2D array by accepting two arguments:
//size (which determines the number of nested arrays and the number of elements in each nested array) and
//char (which determines the characters in each nested array). Print your solution to the console.

// Create Grid Function Call
// createGrid(3, "*");

// Expected Output
// [
//   ["*", "*", "*"],
//   ["*", "*", "*"],
//   ["*", "*", "*"]
// ];

// function createGrid (size, char) {

// }

// createGrid (x, y);

//........................................................................................................................................

// 3. Word Converter

// Given an array of words, create a function named "wordConverter" which uses an array method to add "er" to the end of each string in the array.
//Look at the expected output below. Important: Do not use a loop to complete this task. Print your solution to the console.

// Array of words
// ["smart", "kind", "sweet", "small", "clear"];

// Expected output
// ["smarter", "kinder", "sweeter", "smaller", "clearer"];

function wordConverter(arr) {
  let newArr = [];
  let addEr = arr.map(word => word + "er"); // call back, method creates new array and through call back adds new end to each index
  return addEr;
}

let wordArr = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(wordArr));

//..........................................................................................................................................

// 4. Hour Calculation

// Create a function called "calculateHours" which calculate how many hours (total) this person worked in the week based on the data structure
// hourTracking below. Note: start is always morning time, end is always afternoon. Print your solution to the console.

// Working Hours
// const hourTracking = [
//   { day: "Monday", start: 8, end: 17 },
//   { day: "Tuesday", start: 9, end: 15 },
//   { day: "Wednesday", start: 10, end: 18 },
//   { day: "Thursday", start: 7, end: 14 },
//   { day: "Friday", start: 6, end: 12 }
// ];

// Expected Output
// 36;

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

function calculateHours(arr) {
  let totalHours = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let startTime = Object.values(arr[i][j].end);
      let endTime = Object.values(arr[i][j].start);
      let totalDaily = endTime - startTime;
      totalHours = totalHours += arr[i][j];
    }
  }
  return totalHours;
}

calculateHours(hourTracking);

//..............................................................................................................................................

// Classes

// Create a blueprint for a course at DCI - using the class syntax in javascript. The class should be named "Course"
// The class should contain who the teacher is, whether the group is learning marketing or web development and
// the number of students taking the course.
// The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on
// the number of students taking the course: 1 student = 2m². E.g. If a course has 10 students, then print:
// "The classroom should be 20m².". Print your solution to the console.
// Create a method named "details" to print all the information of the course:
// "This is a web development course taught by Ali. There are 10 students taking the course._".
// Print your solution to the console.
// Note: Please use the phrases found in the instructions above and just change the output depending on the teacher,
// course, number of students etc.
// Expected Output

// course.spaceNeeded();
// `The classroom should be 44m².`;

// course.details();
// `This is a web development course taught by Ali. There are 22 students taking the course.`;

class Course {
  constructor(_teacher, _courseName, _studentNumber) {
    this.teacher = _teacher;
    this.courseName = _courseName;
    this.studentNumber = _studentNumber;
  }

  spaceNeeded() {
    this.operation = this.studentNumber * 2;
    return `The classroom should be ${this.operation} m2.`;
  }

  details() {
    return `This is a ${this.courseName} course, taught by ${this.teacher}. There are ${this.studentNumber} taking the course.`;
  }
}

let dci = new Course("Hadi", "web development", 20);
console.log(dci.spaceNeeded());
console.log(dci.details());

//..............................................................................................................................................

// Problem Solving

// 1. Format your string
// Write function named "capitalizeFirstLetter" that accepts a string as an argument.
// The function should convert the first character of each word to uppercase.
// Example the quick brown fox → The Quick Brown Fox. Print your solution to the console.

// Expected Output
// capitalizeFirstLetter("hey there"); → `Hey There`

function capitalizeFirstLetter(str) {
  let finalStr = "";
  let tempArr = [];
  let splitArr = str.split(" "); // split the string into an array of items, separated by spaces
  //console.log(splitArr);
  for (let i = 0; i < splitArr.length; i++) {
    let upper = splitArr[i][0].toUpperCase();
    tempArr.push(upper);
  }

  return tempArr;
}

console.log(capitalizeFirstLetter("the quick brown fox"));
console.log(capitalizeFirstLetter("hey there"));

//..............................................................................................................................................

// 2. Validation
// Look at the unit tests for validating a pin. Create a function named "validPin" that fulfills the requirements of the tests.

// Requirements:
// 1. The pin code must consist of only numbers.
// 2. The pin code must be 4 digits long.
// 3. The pin should have at least two different digits.
// 4. The pin code's last digit should be even.
// 5. The pin code should add up to at least 5.
// 6. The function should print true if the pin meets all the requirements and false if it does not. Print your solution to the console.

// Expected Output
// validPin("1234"); → true
// validPin("1235"); → false // last number should be even
// validPin("wwww"); → false // should only consist of numbers
// validPin("12345"); → false // should be 4 digits, not 5
// validPin("2222"); → false // should have at least 2 different digits
// validPin("1000"); → false // does not add up to at least 5
// validPin("2224"); → true

function validPin(num) {
  let splitNum = num.split("");
  console.log(splitNum);
  let result = 0;
  // let newStr = num.toString();
  for (let i = 0; i < splitNum.length; i++) {
    // let numNum = parseInt(splitNum);
    // console.log(numNum);
    result = result += num[i];
    console.log(result);
    if (
      splitNum[i] === "number" &&
      splitNum.length === 4 &&
      splitNum[i] !== splitNum[i] &&
      (splitNum.length - 1) % 2 === 0 &&
      result >= 5
    ) {
      return true;
    } else {
      return false;
    }
  }
}

validPin("1232");
