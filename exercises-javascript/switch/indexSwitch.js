//=====================EXERCISES140120=====================================================================================

// switch (<expression>){ ... } // it is used for ex. for currencies, for phone prefixes,
// an example of switch in order to choose one month of the year:
// another example for switch:
// switch` vs. `else if`
// the order is very important, the statement that is on the top gets the priority // if the string is empty it would be 0 and divisible by 3 and 5 so it would print FizzBuzz

//===================================================================================================================

//Let’s play mini FizzBuzz! For any given number, if the number is:
//divisible by 3, print “Fizz”.
//divisible by “5", print “Buzz”.
//divisible by both 3 and 5, print “FizzBuzz”.
//That is, if any of the above conditions apply, print the above words instead of the number.
//Otherwise, just print the number.

let miniFizz = 1;

if (miniFizz % 5 == 0 && miniFizz % 3 == 0) {
  // the order is very important, the statement that is on the top gets the priority // if the string is empty it would be 0 and divisible by 3 and 5 so it would print FizzBuzz
  console.log("Fizz");
} else if (miniFizz % 5 == 0) {
  console.log("Buzz");
} else if (miniFizz % 3 == 0) {
  console.log("FizzBuzz");
} else {
  console.log(miniFizz);
}

//-------------------------------------------------------------------------------

// homework

// Declare two variables: “a” with the value of true, and “b” with the value of false.
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).

let a = "true";
let b = "false";

console.log(a && b);
console.log(a || b);
console.log(!a && b);

//-------------------------------------------------------------------------------

// Declare three more variables “x”, “y”, “z”. Give these variables number values.
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

let x1 = 3;
let y1 = 4;
let z1 = 5;

console.log(x1 > z1 && x1 > y1);
console.log(x1 !== y1);
console.log(z1 < y1 || z1 > x1);
console.log(x1 == z1 || x1 !== y1);
console.log(x1 >= 10 && y1 <= 10);
console.log(x1 * z1 < 100 || x1 * y1 > 100);
