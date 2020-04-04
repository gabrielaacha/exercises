// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

function salary3(name, salary, ...kidNames) {
  let x = kidNames.length;
  let obj = [
    { tax1: salary * 0.3 },
    { tax2: salary * 0.25 },
    { tax3: salary * 0.2 }
  ];

  switch (x) {
    case 1:
      return ` ${name} makes a salary of ${salary -
        Object.values(obj[1])}€ per month`;
    case 2:
      return ` ${name} makes a salary of ${salary -
        Object.values(obj[1])}€ per month`;
    default:
      return ` ${name} makes a salary of ${salary -
        Object.values(obj[1])}€ per month`;
  }
}

console.log(salary3("didi", 3000, "dodo", "dudu", "dada"));
