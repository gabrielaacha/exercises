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



function savedMoney(curAge, retAge, monthWage, saving) {

    let savToRet = (monthWage / 100 * saving) * (retAge - curAge);

    if (curAge > retAge) {
        return `You’re already retired!`;
    } else {
        return `Rita will save ${savToRet}€ till retirement`;
    }
}

console.log(savedMoney(40, 65, 1000, 10));

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

let first = { firstName: "John" }
let last = { lastName: "Smith" }

// const obj1 = { 1: 2, 2: 300 }; // this is the source
// const obj2 = { 1: 4, 3: 3224 }; // this is the target
// const obj3 = { 2: 450, 5: 980 }; //this turns into target and will replace any previous properties with same name
// const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); // this will target the object ad the source object
// console.log(totalObj);
// // expected outcome: { '1': 4, '2': 450, '3': 3224, '4': 55, '5': 980 }

//............................................................................................................................................
