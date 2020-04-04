// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function salary(userName, salary, ...kidsNames) {
  let x = kidsNames.map(str => str).length;
  let y = 0;

  if (x === 1) {
    y = 0.3;
  } else if (x === 2) {
    y = 0.25;
  } else if (x > 2) {
    y = 0.2;
  } else {
    y = 0;
  }

  let taxes = salary * y;
  let finalSal = salary - taxes;

  return `${userName}'s netto salary is ${finalSal}€`;
}

console.log(salary("pep", "3000", "pop", "pup", "pip"));
