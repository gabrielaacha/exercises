//==========================EXERCISES160120===============================================================

// there is a way to avoid to repeat the code
// there are 3 kinds of loops (while / do, while / for)
// it will repeat what is written until the condition becomes falthy
// for : different syntax but same task
// in "for" the order is very important
// declaring, condition, increment/decrement
// mostly used in nested situations
// print out only the even number
//for (..) {}
// control/Strg+D when selecting a variable and then select all the variables with the same name whose name we want to change
// DRY --> do not repeat yourself!!
// in javascript everything almost can be nested, also loops

//==================================================================================================

// 1.Addition. Write a program to add up the numbers 1 to 20.

for (let a = 1; a <= 20; a++) {
  console.log(a);
}

//--------------------------Hadis solution---------------------------------------------------------
let counterSum = 0;
for (let i = 1; i <= 20; i++) {
  counterSum += i; // will add the previous numbers to the current number
}
console.log(counterSum);

//---------------------------------------------------------------------------------------------------

// 2.There are i bottles of beer on the wall. Write a program that will output,
// “There is one bottle of beer on the wall.” “There are two bottles of beer on the wall” up until there are five bottles.

for (let a = 1; a <= 5; a++) {
  if (a == 1) {
    console.log(`There is ${a} bottle of beer on the wall`);
  } else {
    console.log(`There are ${a} bottles of beer on the wall`);
  }
}

//--------------------------Hadis solution---------------------------------------------------------

let text = "of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    // you can also write i > 1 instead of ==
    console.log(`There is ${a} bottle ${text}`);
  } else {
    console.log(`There is ${a} bottles ${text}`);
  }
}

//-------------------------------------------------------------------------------------------------------------

// 3.The odd/even reporter. Write a program that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for (let a = 0; a <= 20; a++) {
  if (a % 2 == 0) {
    console.log(`${a} is even`);
  } else {
    //you can also write (i % 2 == 1)...in this case you have to use "else if" cause there are two conditionings, not just "else"
    console.log(`${a} is odd`);
  }
}

// trick string.repeat(x) --> x = how many times
// for (let i = 1; i <= 10; i++);

//-------------------------------------------------------------------------------------------------------------

// EXCERCISE

// YYYY
// YYYY
// YYYY
// YYYY

let box = "";
for (let i = 0; i <= 4; i++) {
  box += "XXXX \n"; // it will add to the current element whatever you had before
}
console.log(box);

// @@@@
// @@@
// @@
// @

let box3 = "";
let i = 1;
let result = box3 * i;
for (let i = 1; i <= 4; i++) {
  box3 += "@ \n";
}
console.log(result);

// let box = "";
// for (let i = 0; i <= 4; i++) {
// box += "XXXX \n"; // it will add to the current element whatever you had before
// }
// console.log(box);

// T
// TT
// TTT
// TTTT

let y = "T";
let result2 = 0; // this is declared but the value is not so important, just the declaration, to avoid problems better to declare 0
while (y <= 4) {
  result2 = y * 4;
  console.log(`${y} * 4 = ${result2}`);
  y++; // very important to not forget this in order to stop the forever repetition
}

let x = 3;
if (x <= 10) {
  x += 1;
} else {
  x -= 1;
}

while (x <= 10) {
  console.log("T");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

// 1, 2, 4, 8... 128 //

for (let i = 1; i < 128; ) {
  // i++ or i-- go inside the brackets, othrwise outside
  console.log(i);
  i = i * 2;
}

// 0, 2, 4... 10  // SOLVED

for (let e = 0; e <= 10; e++) {
  if (e % 2 == 0) {
    console.log(e);
  }
}

for (let t = 0; t <= 10; ) {
  console.log(t);
  t += 2;
}

// 3, 6, 9 ... 15 // SOLVED

let counterSum1 = 0;
for (let a = 3; a <= 15; a++) {
  if (a % 3 == 0) {
    console.log(a);
    counterSum1 += a;
  }
}

// 9, 8, 7... 0 // SOLVED

let count = 9;
while (count >= 0) {
  console.log(count);
  count--;
}

// hadis solution
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4 // SOLVED

let resultx = 0;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    resultx = i;
    console.log(`${i}`);
  }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 // SOLVED

let result3 = 0;
for (let i = 0; i <= 4; i++) {
  for (let i = 0; i <= 4; i++) {
    result3 = i;
    console.log(`${i}`);
  }
}


// hadis:
let counter = 0;
for (let i = 0; )


//-----------------------------------------------------------------------

// @@@@
// @@@
// @@
// @

let count = 4;
while (count >= 1) {
  if (count == 4) {
    console.log("@@@@");
  } else if (count == 3) {
    console.log("@@@");
  } else if (count == 2) {
    console.log("@@");
  } else if (count == 1) {
    console.log("@");
  }
  count--;
}

//hadis

let atbox2 = "@@@@@@";
for (let i = 0; i <= 5; i++) {
  console.log(atbox2.slice(i));
}

// let box = "";
// for (let i = 0; i <= 4; i++) {
// box += "XXXX \n"; // it will add to the current element whatever you had before
// }
// console.log(box);

// T
// TT
// TTT
// TTTT

//let box = "";
// for (let y = 1; i <= 4; i++) {
// if (y == 1) {
//   console.log("TTTT");
// }
// if (y == 2) {
//   console.log("TT");
// } else if (y == 3) {
// console.log("TTT");
//} else if (y == 4) {
//   console.log("TTTT");
// } else {
//  console.log("else");
// }//
//}

// let result2 = 0; // this is declared but the value is not so important, just the declaration, to avoid problems better to declare 0
// while (y <= 4) {
//  result2 = y * 4;
// console.log(`${y} * 4 = ${result2}`);
// y++; // very important to not forget this in order to stop the forever repetition

let x = 1;
if (x <= 4) {
  x += 1;
} else {
  x -= 1;
}

while (x <= 2) {
  console.log("T");
  x++;
}

while (x <= 3) {
  console.log("TT");
  x++;
}

while (x <= 4) {
  console.log("TTT");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

while (x <= 5) {
  console.log("TTTT");
  x++; // it will increase a number in every round and it will stop when the number gets higher than 10 // x = x + 1 increase 1 or x = x - 1 decreases 1
}

// hadis:

let Tbox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 9; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      Tbox += "T";
      console.log(Tbox);
    }
  }
} // replies here:  https://github.com/FBw-26/live-coding/blob/master/16-01/index.js
