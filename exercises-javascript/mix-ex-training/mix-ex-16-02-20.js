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
(function moneyNum(currentAge, retirementAge, monthlyWage, percentageSaved) {
  let ageNow = currentAge;
  let ageRet = retirementAge;
  let wage = monthlyWage;
  let perCent = percentageSaved;
  let remainingSav = (ageRet - ageNow) * ((wage / 100) * perCent);
  if (ageNow > 60) {
    console.log(`You’re already retired!`);
  } else {
    console.log(`you still need to save ${remainingSav}€ until you retire.`);
  }
})(40, 60, 1000, 10);

//===============================================EXERCISE=040220============================================================================

// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
console.log(
  "---------------------------------------exercise-2------------------------------------------------------------------------------------"
);

const person = {
  name: "Hélène",
  lastName: "Smith"
};

for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

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

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
};

function objVal(obj) {
  let arr = [];
  for (let prop in getObjectValues) {
    arr.push(getObjectValues[prop]);
  }
  return arr;
}

console.log(objVal(getObjectValues));

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

let person2 = {
  firstName: "Ali",
  job: "painter",
  age: 20,
  city: "Berlin",
  hobbies: function() {
    return `${this.firstName} is a ${this.age} year old in ${this.city}`;
  }
};

console.log(person2.hobbies);

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

function values(obj) {
  return Object.values(obj);
}
console.log(values(student));

//..........................................................................................................................................

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// console.log(arrSpliting("small"));
console.log(
  "---------------------------------------exercise-6------------------------------------------------------------------------------------"
);

function counterLetters(word) {
  let wordSplit = word.split("");
  console.log(wordSplit);
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (wordSplit[i] === letter) {
        counter++;
        //console.log(counter);
      }
    }
    return counter;
  }

  for (let i = 0; i < wordSplit.length; i++) {
    let currentChar = wordSplit[i]; //
    result[currentChar] = countOccurrences(word, currentChar);
  }
  return result;
}

console.log(counterLetters("hello"));

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

function objPar(obj1, obj2) {
  const total = Object.assign(obj1, obj2); // Object.assign
  return total;
}

let first = { firstName: "John" };
let last = { lastName: "Smith" };
console.log(objPar(first, last));

// const obj1 = { 1: 2, 2: 300 }; // this is the source
// const obj2 = { 1: 4, 3: 3224 }; // this is the target
// const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
// const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
// console.log(totalObj);
// // expected outcome: { '1': 4, '2': 450, '3': 3224, '4': 55, '5': 980 }

//............................................................................................................................................
