// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function salary2(name, salary, ...kidNames) {
  let x = kidNames.length;

  if (x === 1) {
    return `${name} makes ${salary - salary * 0.3}€ a month`;
  } else if (x === 2) {
    return `${name} makes ${salary - salary * 0.25}€ a month`;
  } else if (x > 2) {
    return `${name} makes ${salary - salary * 0.2}€ a month`;
  } else {
    return `i don't know`;
  }
}

console.log(salary2("mino", 3000, "mano", "muno"));
