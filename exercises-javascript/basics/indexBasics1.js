//==========================Exercises080120================================================================================================
//local global
// console.log(local); // not there
// Conditional assignment with the ternary operator
//brackets notation [0]
// `'\`, `\"`, `\n` for a new line
// .trim() deletes spaces beginning and end
// Numbers
// Integers vs. Floats
// isNaN // is not a number
// Converting Strings into Numbers

//=========================================================================================================================================

//1. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.

//-------------my answer------------------------------------------------------------------------------------------------------------
let str8 = "my grandpa is";
let str9  = " 88"
console.log(`${str8} ${str9}`)

//---------Hadis answer--------------------------------------------------------------------------------------------------------------
let var1 = "This is a string";
let var2 = 22;
let longStr2 = var1 + var2;
console.log(longStr2);

// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let newString = "trying";
let firstletter = newString[0];
let lastletter = newString[newString.length - 1];
let shortStr3 = newString.substring(1, newString.length - 1);
console.log(shortStr3);
console.log(lastletter + shortStr3 + firstletter);

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

//-------------------my answer----------------------------------------------------------------------------------------------------
 // let grandpa = 88;
 // console.log(grandpa>18 ? "and he can drive":"and he can't drive");
 // console.log(str9 %);

// isEven ? (console.log(str9 % 2));

//-------------------Hadis answer 1-------------------------------------------------------------------------------------------------
let numX = 30%2
console.log (numX == 0 ? "is even" : "is odd");

//------------------Hadis answer 2--------------------------------------------------------------------------------------------------
let num101 = 30
let numY = num101 % 2;
console.log(numY);
console.log(numY == 0 ? `${num101} is even` : `${num101} is odd`);

let integer = "1005"
let realNum = parseInt(integer);
console.log(realNum);

let float = "10.5";
let reallFloat = parseFloat(float);
console.log(reallFloat);
 
//what if you write parseInt instead of parseFloat
let float1 = "10.5";
let reallFloat1 = parseInt(float1);
console.log(reallFloat1);


//============================Exercises080120=============================================
//Modulo %
//*+-/++--
// Exponentiation ** the power of (new added) 
//Math.floor()
//Math.ceil()
// Math.max()
// Math.min()
//========================================================================================

// exercise A: Create a variable with the value of “123”. Convert it to a number.
let varX = "123";
let newNum4 = parseInt(varX, 10);

//------------------Hadis solution-----------------------------------------------------------
console.log(parse(StrInt1));

//-------------------------------------------------------------------------------------------

// exercise B: Create a variable with the value of “130.7". Convert it to a number.

let varZ = "130.7";
let newNum5 = parseFloat(varZ, 10);
//-----Hadis solution---------------------------------------------------------------------------
console.log(parseFloat(strFloat1));

//-------------------------------------------------------------------------------------------


// exercise C: Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let varK = "isDog"
let isDog = true
true ? console.log("pat, pat") : console.log("find me a dog to pat!")

//-----Hadis solution---------------------------------------------------------------------------

console.log(isDog ? "pat, pat" : "find me a dog to pat");

//-------------------------------------------------------------------------------------------

// exercise D: Declare a variable named speedCheck. If speed limit is 50km/h, and your speed is above that, print ‘you’re going too fast!’. If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
let varXx = "speedCheck";
let speedCheck = 60;
console.log(speedCheck>50 ? "you’re going too fast!":"You’re driving below the speed limit, Oma");

//-----Hadis solution 1---------------------------------------------------------------------------
let speedCheck1 = 60;
let SpeedLimit1 = 50;
console.log(speedLimit1<speedCheck1 ? "you’re going too fast!":"You’re driving below the speed limit, Oma")

//-----Hadis solution 2---------------------------------------------------------------------------
let speedCheck2 = 50;
let speedLimit2 = 50;
let textStrTrue2 = "you’re going too fast!"
let textStrFalse2 = "You’re driving below the speed limit, Oma"
console.log(speedLimit2 <= speedCheck2 ? textStrTrue2 : textStrFalse2);

//-------------------------------------------------------------------------------------------

// exercise E: Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
let varXxx     = "age";
let age = 14;
//console.log(varXxx>16 ? "serve butter beer":"serve beer");
age > 16 ? console.log ("serve butter beer"): console.log("serve beer");

//-----Hadis solution---------------------------------------------------------------------------
let age1 = 14;
console.log(age1<16 ? "serve butter beer" : "serve beer")

//-------------------------------------------------------------------------------------------

// exercise F: Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
let varVar1 = "isStudent";
let isStudent = false;
true ? console.log("Ticket costs €5,00") : console.log("Ticket costs €12,00");

//-----Hadis solution---------------------------------------------------------------------------
let isStudent = false;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00")

//-------------------------------------------------------------------------------------------

// exercise G: Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
let varVar = "okMarie"
let okMarie = "cake"
cake ?

//-----Hadis solution---------------------------------------------------------------------------
let okMarie = "Apple";
print(okMarie === "cake" ? "Let them eat cake" : "Oh, bother")

//-------------------------------------------------------------------------------------------

//====================Exercise090120===========================================================

// we create this short cut to not have to use console.log all the time
// every information entered by the user will first appear as string, it has to be turned into number tu be calculated
// same with decimals, we use the US system but since european users will enter data with commas we have to be aware of that
// round up and down
// Addition
// x + y * s
// String + Number
// Concatenation
// String + Boolean
// String + String
// typeof (Objects, functions, console...)
// (0.1 * 0.2)
// 1.23e+5 some number have an e (big number that is replaced by e)
// x = 3.444
//console.log(x.toFixed(2));
// && || (and or)
// = Assigning
// == vs ===
// 2 times = to check if one number is equal to the other
// 3 times = to
// console.log(x == OhNo ? "yeah it is" : "nope it is not");
// console.log(xx === OhNo2 ? "yeah it is" : "nope it is not");
// Truthy and falthy values: false, undefined, null, 0, ''
// what is not a number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// strings
// Math.random // we will constantly use it in react

//=============================================================================================

// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4));

// b. Highest Number
// Print out the highest number between -1 and 4.

console.log(Math.max(-1, 0, 1, 2, 3, 4));

//------------------------------------------------------------------------------

// 2. Rounding
// a. Round up
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.

let roundup1 = 3321;
let roundup2 = 326.76;
let roundup3 = -9.78;
let roundup4 = 43.342;
console.log(Math.ceil(roundup1));
console.log(Math.ceil(roundup2));
console.log(Math.ceil(roundup3));
console.log(Math.ceil(roundup4));

//------------------------------------------------------------------------------

// b. Round down
// Round down the following numbers: 3321, 326.76, 76788.7, -9.78,

let rounddown = 3321;
let rounddown2 = 326.76;
let rounddown3 = 76788.7;
let rounddown4 = -9.78;
console.log(Math.floor(rounddown));
console.log(Math.floor(rounddown2));
console.log(Math.floor(rounddown3));
console.log(Math.floor(rounddown4));

//------------------------------------------------------------------------------

// 3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.

console.log(Math.floor(Math.random() * 6) + 1);

//=============================================================================================

//=================Exercises130120=============================================================
// console.log(x.toFixed(4));
// boolean inversion with !
// console.log(crazy ! "Yeah" : "nope");
// givenName || firstName || "ABC";
// let's do some algorithms

//=============================================================================================

// 1. Nancy's income is 500€ per week. how much does Nancy makes every year?
const nancySalary = 500 * 52;
// console.log(nancySalary)
console.log(`Nancy Salary ${nancySalary} Euro in one year`);

// the amount of hours Nancy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 what is nancy's average hour?

const nancyAverage = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(nancyAverage);
console.log(`Nancy average hours of ${nancyAverage} in a week`);

// hadis version
const nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage2 = nancyWorkingHours / 10;
console.log(
  `Nancy worked last two weeks ${nancyWorkingHours}, the average is ${nancyAverage2}`
);

//------------------------------------------------------------------------------

//=================Exercises130120=============================================================


// if (<boolean>){...}
// false && true is understood as false
// is the statement is true then it will print Nice, otherwise it will print Not cool
// `if` vs. ternary operator | if (true) {condition} curly brackets for the truthy situation {} if this is not true java script will ignore it
// preserved words can't be used as variables in java script, for example if

//=============================================================================================

// A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
const mathStudent = 75 + 70 + 85 + 90 + 100;
const studentAverageTest5 = mathStudent / 5;
const studentAverageTest6 = 85 * 6;

console.log(studentAverageTest6 - mathStudent);

// Expected output: Score in the sixth test: --.

let studentGrade = studentAverageTest6 - mathStudent;

console.log(`the expected score in the 6th test should be ${studentGrade}`);

//------------------------------------------------------------------------------

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?

const jamesAverage8 = 78 * 8;
const jamesRequiredGrade = 80 * 9;
const jamesAverage9 = jamesRequiredGrade - jamesAverage8;

console.log(jamesRequiredGrade - jamesAverage8);

if (jamesAverage9 <= 96) {
  console.log("1st class degree");
} else {
  console.log("2nd class degree");
}

//Expected output: James needs a minimum of --% to get an 80% average.

console.log(`James needs a minimum of ${jamesAverage9}% to get an 80% average`);

//------------------------------------------------------------------------------

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let intMin = 50;
let intMax = 99;
let x = 55;
let z = 192;

if ((x >= 50 && x <= 99) || (z >= 50 && x <= 99)) {
  console.log("integer values are between 50 and 99");
}

//------------------------------------------------------------------------------

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let intNumNum1 = 67;
let intNumNum2 = 88;
let intNumNum3 = 1921;

if (
  (intNumNum1 >= 50 && intNumNum1 <= 99) ||
  (intNumNum2 >= 50 && intNumNum2 <= 99) ||
  (intNumNum3 >= 50 && intNumNum3 <= 99)
);
console.log(true);

//------------------------------------------------------------------------------

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a1 = 3;
let b1 = 9;
let c1 = 58;

console.log(Math.max(a1, b1, c1));

//------------------------------------------------------------------------------

// Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.

let str1 = "Py";
let str2 = "thon";

console.log(str1 + str2);
console.log(str1 + "thon");
console.log(`${str1}thon`);

let str = "Python";
if (str.substring(0, 2) === "Py") {
  console.log(str);
}

//------------------------------------------------------------------------------

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let intNum1 = 65;
let intNum2 = 7;
let y = intNum1 + intNum2;

if (y > 59 && y < 80) {
  console.log(65);
} else {
  console.log(80);
}

//------------------------------------------------------------------------------

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let intInt1 = 3;
let intInt2 = 5;
let intDiff = Math.abs(intInt1 - intInt2);
let intSum = intInt1 + intInt2;
console.log(intDiff);

if (intSum == 8 || intDiff == 8) {
  console.log(true);
}

//------------------------------------------------------------------------------

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let intNumero1 = 5;
let intNumero2 = 10;
let intSum2 = intNumero1 + intNumero2;

if (intNumero1 == 15 || intNumero2 == 15 || intSum2 == 15) {
  console.log(true);
}

//------------------------------------------------------------------------------

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let intMul1 = 45;
let intMul2 = 78;

if (
  intMul1 % 7 == 0 ||
  intMul1 % 11 == 0 ||
  intMul2 % 7 == 0 ||
  intMul2 % 11 == 0
);
{
  console.log("intMul is multiple of 7 or 11");
}

//------------------------------------------------------------------------------

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let givenInt1 = 23;
let givenInt2 = 23;
let givenIntTrip = (givenInt2 + givenInt1) * 3;

if (givenInt1 === givenInt2) {
  console.log(givenIntTrip);
}

//------------------------------------------------------------------------------

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let num1 = 3;
let numDiff = Math.abs(num1 - 19);
let numDo = numDiff * 2;
if (numDiff < 19) {
  console.log(numDo);
}

//------------------------------------------------------------------------------

// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Store Mark’s and John’s mass and height in variables.
// Calculate both their BMIs and store their BMIs in variables.
// Create a boolean variable containing information about whether Mark has a higher BMI than John.
// Print a string to the console containing the variable from step 3 using string interpolation.
// (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// Create an if statement which prints the name and BMI of the person with the highest BMI

let guy1 = "Mark";
let guy2 = "John";
let massMark = 82;
let massJohn = 75.5;
let heightMark = 1.83;
let heightJohn = 1.88;
let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`${guy1}'s BMI is higher than ${guy2}`);
} else {
  console.log(`${guy2}'s BMI is higher than ${guy1}`);
}

let bmiHighest = Math.max(bmiMark, bmiJohn);
console.log(bmiHighest);


//-----------------------hadi solution---------------------------------------------

let markMoreCookies = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  // if statement is true than print, else, print something else
  console.log(`${guy1}'s BMI is higher than${guy2}`);
} else {
  console.log(`${guy2}'s BMI is higher than ${guy1}`);
}

//-----------------------hadi solution---------------------------------------------

let markMoreCookies2 = bmiMark > bmiJohn;

if (markMoreCookies2) {
  console.log(`${guy1}'s BMI is higher than ${guy2}`);
} else {
  console.log(`${guy2}'s BMI is higher than ${guy1}`);
}

//------------------------------------------------------------------------------

// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

let firstName2 = "Micky";
let age = 15;

if (age < 13) {
  return console.log(`${firstName2} is a child`);
}
if (age >= 13 && age <= 20) {
  return console.log(`${firstName2} is a teenager`);
}
if (age >= 20 && age <= 30) {
  return console.log(`${firstName2} is a young adult`);
} else {
  return console.log(`${firstName2} is an adult`);
}

//--------------------------------------------------------------------------------------

let firstName6 = "Micky";
let age = 35;

if (age < 13) {
  console.log(`${firstName6} is a child`);
}

if (age >= 13 && age <= 20) {
  console.log(`${firstName6} is a teenager`);
}

if (age >= 20 && age <= 30) {
  console.log(`${firstName6} is a young adult`);
}

if (age > 30) {
  console.log(`${firstName6} is an adult`);
}


//------------------Hadi's solution--------------------------------------------------------------------

const firstName3 = "Peter";
const age2 = "13";
if (age2 < 13) {
  console.log(`${firstName3} is a boy`);
} else {
  if (age2 < 20) {
    console.log(`${firstName3} is a teenager`);
  } else {
    if (age2 <= 30) {
      console.log(`${firstName3} he is an adult`);
    } else {
      console.log(`is not a number`);
    }
  }
}

// it's same but omitting the curly brackets // technically it is the same but this is more common
const age3 = "13";
if (age3 < 13) {
  console.log("he is a boy");
} else if (age3 < 20) {
  console.log("he is a teenager");
} else if (age3 >= 30) {
  console.log("he is an adult");
} else {
  console.log("is not a number");
}

//--------------Hadi's solution----------------------------------------------------

const firstName3 = "Peter";
const age2 = "13";
if (age2 < 13) {
  console.log(`${firstName3} is a boy`);
} else {
  if (age2 < 20) {
    console.log(`${firstName3} is a teenager`);
  } else {
    if (age2 <= 30) {
      console.log(`${firstName3} he is an adult`);
    } else {
      console.log(`is not a number`);
    }
  }
}


//===================Exercises150120===========================================================

// 1. Calculate the perimeter of a square. Assume each side is 4.75cm.

let side = 4.75;
let per = side * 4;
console.log(`the perimeter of a square is ${per}cm`);

//--------------------------------------------------------------------------------------

// 2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm (base), 7cm.

let tside1 = 5;
let tside2 = 6;
let tside3 = 7;
let tper = tside1 + tside2 + tside3;
console.log(`the perimeter of the triangle is ${tper}cm`);

//--------------------------------------------------------------------------------------

// 3. Calculate the area of a square. Each side is 5cm.

let qside = 5;
let qarea = Math.pow(5, 2);
console.log(`the area of the square is ${qarea}cm`);

//--------------------------------------------------------------------------------------

// 4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// For a triangle with sides a, b and c, the half-perimeter s = 1/2(a + b + c). Once you know s, you calculate area using this formula:
// Area = square root [s (s - a) (s - b) (s - c)]

let tside4 = 5;
let tside5 = 6;
let tside6 = 7;

let s = (tside4 + tside5 + tside6) / 2;
let tarea = Math.sqrt(s * (s - tside4) * (s - tside5) * (s - tside6));

console.log(`the area of the triangle is ${tarea.toFixed(2)}cm`);

//--------------------------------------------------------------------------------------

// 5. Calculate the volume of a cube. Length of each side is 9cm.

let cside = 9;
let cvol = Math.pow(9, 3);

console.log(`the volume of the triangle is ${cvol}cm3`);

//--------------------------------------------------------------------------------------

// 6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

let bill1 = 22.35;
let bill2 = 26.67;
let bill3 = 35.92;
let tip1 = (bill1 / 100) * 10;
let tip2 = (bill2 / 100) * 15;
let tip3 = (bill3 / 100) * 20;

let totalbill1 = bill1 + tip1;
console.log(`the first bill's total is ${totalbill1.toFixed(2)}€`);

let totalbill2 = bill2 + tip2;
console.log(`the second bill's total is ${totalbill2.toFixed(2)}€`);

let totalbill3 = bill3 + tip3;
console.log(`the thrird bill's total is ${totalbill3.toFixed(2)}€`);

//--------------------------------------------------------------------------------------

// Declare two variables: “a” with the value of true, and “b” with the value of false.
// Check the result of:
// a) a AND b.
// b) a OR b.
// c) NOT (a AND b).

const a = "true";
const b = "false";

console.log(a && b);
console.log(a || b);
console.log(!(a && b));

//--------------------------------------------------------------------------------------

// the second question is Declare three more variables “x”, “y”, “z”. Give these variables number values.
// Check the result of whether:
// a) x is greater than z AND x is greater than y.
// b) x is NOT equal to y.
// c) z is less than y OR z is greater than x.
// d) x is equal to z OR x is NOT equal to y.
// e) x is greater than or equal to 10 AND y is less than or equal to 10.
// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
// 16:33

let x = 6;
let y = 10;
let z = 7;

//--------------------------------------------------------------------------------------

console.log(x > z && x > y); // false
console.log(x !== y); // true
console.log(z < y || z > x); // true
console.log(x == z || x !== y); // true
console.log(x >= 10 && y <= 10); // false
console.log(x * z < 100 || x * y > 100); // true

//========================================================================================