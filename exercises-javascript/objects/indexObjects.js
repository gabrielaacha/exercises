//==============================EXERCISE==040220=============================================================================

// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.

const person2 = {
  profession: "programmer",
  destination: "peru",
  vacationDays: 10
};

for (let prop in person2) {
  console.log(`person.${prop} : ${person2[prop]}`);
}

//=========================================================================================================================

//==============================EXERCISE==040220=============================================================================

// Get Values. Create a function that returns an array of all values of an object’s properties.
// getObjectValues({
// choice1: "tea",
// choice2: "coffee",
// choice3: "milk"
// })
// Expected output:
// ["tea", "coffee", "milk"]

const getObjectValues = {};
(getObjectValues["choice1"] = "tea"),
  (getObjectValues["choice2"] = "coffee"),
  (getObjectValues["choice3"] = "milk"),
  console.log(Object.values(getObjectValues));

//.......................Hadis solution..............................................................................

const getValues = object => {
  return Object.values(object);
};
console.log(getValues(person));
console.log(getValues(car));

//...................................................................................................................

// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
// Example
// let person = {
// firstName: "Ali",
// job: "painter",
// age: 20,
// city: Berlin
// }
// Example of Expected Output “Ali is a 20 year old  in Berlin”.

// const person3 = {
//   age: 20,
//   firstName: "Ali",
//   job: "painter",
//   city: "Berlin",
//   print: function() {
//     console.log(`Ali is a ${age} year old ${job} in ${city}`);
//   }
// };
// console.log(person3.print());

//.......................Hadis solution..............................................................................

// const person3 = {
//     age: 20,
//     firstName: "Ali",
//     job: "painter",
//     city: "Berlin",
//     person3.printOut = () => {
//   return `Ali is a ${person3.age} year old ${person3.job} in ${person3.city}`;
// }
// };
// console.log(person3.printOut());

//=========================================================================================================================
//=======================EXERCISE==040220===========================================================================================

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
// let student = {
// name: "Mike",
// class: "4A"
// course: "English"
// }
// Expected output:
// ["name", "class", "course"]

const student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

console.log(Object.getOwnPropertyNames(student));

//....................Hadis solution..................

const getProperties = obj => {
  return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person));

// expected output  : [
// 'name',      'age',
// 'birthYear', 'print',
// 'old',       'birthDay',
// 'p1',        'p2',
// 'p3'
// ]

//....................................................

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// console.log(arrSpliting("small"));

function countLetters(str) {
  // const letArr = [];
  const word = str.toLowerCase().split("");
  console.log(word);
  const objObj = {};

  for (let i = 0; i < word.length - 1; i++) {}

  //   for (let prop in word) {
  //     console.log(`${word[prop]} : ${prop}`);
  //     word.push(letArr);

  for (let [key, value] of Object.entries(word)) {
    const valueKey = `${value} : ${key}`;
    //objObj.push(valueKey);
    Object.assign(valueKey);
    return valueKey;
  }
}

countLetters("tree");

// const obj1 = { 1: 2, 2: 300 }; // this is the source
// const obj2 = { 1: 4, 3: 3224 }; // this is the target
// const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
// const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
// console.log(totalObj);

//...............Hadis solution....................

function countLetters(str) {
  let arr = str.split("");
  console.log(arr);
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == letter) {
        counter++;
        // console.log(counter);
      }
    }
    return counter;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; //
    result[currentChar] = countOccurrences(str, currentChar); // here assigning the key / property with the bracket notation // inner function // object part
  }
  return result;
}

console.log(countLetters("tuesday"));

//...................................................

//========================================Exercise==050220=====================================================================

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}

const first = { firstName: "John" };
const second = { secondName: "Smith" };

function para(object1, object2) {
  return (totalObj = Object.assign(object1, object2));
}

console.log(para(first, second));
// expected outcome : { firstName: 'John', secondName: 'Smith' }

//.................................Hadis solution........................................................................

const fun = (x, o) => {
  return Object.assign(x, o);
};

const o1 = { name: "Ali" };
const o2 = { lastName: "G" };

console.log(fun(o1, o2)); // function call
console.log(fun({ name: "Ali" }, { lastName: "G" }));
// you can pass a variable or a complete parameter, it's the same

//.....

const fun2 = (x, o) => {
  const result = { ...x, ...o }; // this result will be an object / spread operator will copy an object or an array and it can be used any time
  return result;
  // the function is returning an object (instead of a variable)
};
const o3 = {
  something: "ccc"
};

console.log(fun({ name: "GG", age: 33 }, { lastNAme: "Allin" }));
// expected outcome: { name: 'GG', lastNAme: 'Allin' }

//========================================================================================================================

// userName
// birthday
// birthmonth
// birthyear

// const userName: "peter",
// const birthDay: 17,
// const birthMonth: "September",
// const birthYear: 1903

//..........................

function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDate: day,
    birthMonth: month,
    birthYear: year,
    starSigns: function() {
      let signs = [
        { astro: acuarius, from: 0120 },
        { astro: piscis, from: 0219 },
        { astro: aries, from: 0321 },
        { astro: taurus, from: 0420 },
        { astro: gemini, from: 0521 },
        { astro: cancer, from: 0622 },
        { astro: leo, from: 0723 },
        { astro: virgo, from: 0823 },
        { astro: libra, from: 0923 },
        { astro: scorpio, from: 1024 },
        { astro: sagittarius, from: 1122 },
        { astro: capricorn, from: 1222 }
      ];
    }
  };
  let x = day + month;
  // let y = result.starSigns.signs.find(sign => sign < signs.from());
  return x;
  //   let x = 0;
  //   for (let i = 0; i < starSigns.signs.length; i++);
  //   if (x > signs[i].from()) {
  //     console.log(signs[i]);
}

console.log(x);

// zodiac("Hadi", 01, "09", "1989");
// console.log(`signs ${signs.astro} : ${signs.from}`);
// console.log(
//   `hadi was born on the ${day}.${month}.${year} and his star sign is ${starSign.astro}`
// );

// Aries Mar. 21 - April 19 (month == 2 && date >= 21 && date <=31) || (month === 3 && date >= 1 && date <= 19)
// Taurus April 20 - May 20 (month == 3 && date >= 20 && date <=30) || (month === 4 && date >= 1 && date <= 20)
// Gemini May 21 - June 21 (month == 4 && date >= 21 && date <=31) || (month === 5 && date >= 1 && date <= 21)
// Cancer June 22 - July 22 (month == 5 && date >= 22 && date <=30) || (month === 6 && date >= 1 && date <= 22)
// Leo July 23 - Aug. 22 (month == 6 && date >= 22 && date <=31) || (month === 7 && date >= 1 && date <= 22)
// Virgo Aug. 23 - Sept. 22 (month == 7 && date >= 23 && date <=31) || (month === 8 && date >= 1 && date <= 22)
// Libra Sept. 23 - Oct. 23 (month == 8 && date >= 23 && date <=30) || (month === 9 && date >= 1 && date <= 23)
// Scorpio Oct. 24 - Nov. 21 (month == 9 && date >= 24 && date <=31) || (month === 10 && date >= 1 && date <= 21)
// Sagittarius Nov. 22 - Dec. 21 (month == 10 && date >= 22 && date <=30) || (month === 11 && date >= 1 && date <= 21)
// Capricorn Dec. 22 - Jan. 19 (month == 11 && date >= 22 && date <=31) || (month === 0 && date >= 1 && date <= 19)
// Aquarius Jan. 20 - Feb. 18 (month == 0 && date >= 20 && date <=30) || (month === 1 && date >= 1 && date <= 18)
// Pisces Feb. 19 - Mar. 20 (month == 1 && date >= 19 && date <=28) || (month === 2 && date >= 1 && date <= 20)

//............................................................

// if I wanna access both of them : object.entries()
// for (let [key, value] of Object.entries(starSign)) {
//     // now we have for of (instead of for in)
//     console.log(`${key} : ${value}`);
//   }

// for (let prop in signs) {
//     const whatIsYourStarSign = {

//         starSigns = () => {
//         if ((month == 2 && date >= 21 && date <=31) || (month === 3 && date >= 1 && date <= 19)){
//                 return Object.values(signs[0]); // aries
// }

//         starSign = () => {
//             if ((month == 3 && date >= 20 && date <=30) || (month === 4 && date >= 1 && date <= 20)){
//                 return Object.values(signs[1]); // taurus
// }

//         starSign = () => {
//             if ((month == 4 && date >= 21 && date <=31) || (month === 5 && date >= 1 && date <= 21)){
//                 return Object.values(signs[2]); // gemini
// }

//         starSign = () => {
//             if ((month == 5 && date >= 22 && date <=30) || (month === 6 && date >= 1 && date <= 22)){
//                 return Object.values(signs[3]); // cancer
// }

//         starSign = () => {
//             if ((month == 6 && date >= 22 && date <=31) || (month === 7 && date >= 1 && date <= 22)){
//                 return Object.values(signs[4]); // leo
// }

//         starSign = () => {
//             if ((month == 7 && date >= 23 && date <=31) || (month === 8 && date >= 1 && date <= 22)){
//                 return Object.values(signs[5]); // virgo
// }

//         starSign = () => {
//             if ((month == 8 && date >= 23 && date <=30) || (month === 9 && date >= 1 && date <= 23)){
//                 return Object.values(signs[6]); // libra
// }

//         starSign = () => {
//             if ((month == 9 && date >= 24 && date <=31) || (month === 10 && date >= 1 && date <= 21)){
//                 return Object.values(signs[7]); // scorpio
// }

//         starSign = () => {
//             if ((month == 10 && date >= 22 && date <=30) || (month === 11 && date >= 1 && date <= 21)){
//                 return Object.values(signs[8]); // sagittarius
// }

//         starSign = () => {
//             if ((month == 11 && date >= 22 && date <=31) || (month === 0 && date >= 1 && date <= 19)){
//                 return Object.values(signs[9]); // capricorn
// }

//         starSign = () => {
//             if ((month == 0 && date >= 20 && date <=30) || (month === 1 && date >= 1 && date <= 18)){
//                 return Object.values(signs[10]); // aquarius
// }

//         starSign = () => {
//             if ((month == 1 && date >= 19 && date <=28) || (month === 2 && date >= 1 && date <= 20)){
//                 return Object.values(signs[11]); // piscis
// }

//==========================Exercise==060220=====================================================================================

// Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

let person = {
  name: "Ali",
  job: "teacher"
};

function keysToValues(obj) {
  const keysValuesPair = Object.entries(obj); // it will take my parameter
  console.log(keysValuesPair); // [ [ 'name', 'Ali' ], [ 'job', 'teacher' ] ]
  let reversArr = [];
  for (let i = 0; i < keysValuesPair.length; i++) {
    reversArr.push(keysValuesPair[i].reverse()); // this will make:
  }
  console.log(reversArr); // expected outcome: [ [ 'Ali', 'name' ], [ 'teacher', 'job' ] ]
  console.log(Object.fromEntries(reversArr)); // expected outcome: { Ali: 'name', teacher: 'job' }
}

keysToValues(person);

//

// Object.getOwnPropertyNames

// clones vs. references

// Simple values are always clones

// primitive

// string number boolean

let arr3 = [2, { name: "Ali", age: 22 }, 6];
console.log(arr3[1]["age"]); // will grab the object property within the array // bracket notation // expected outcome : 22
console.log(arr3[1].age); // will grab the object property within the array // dot notation // expected outcome : 22
