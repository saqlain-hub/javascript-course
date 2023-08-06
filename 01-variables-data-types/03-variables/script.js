// Ways to declare a variable
// var, let, const

let firstName = "Saqlain";
let lastName = "Javed";

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore / snakecase
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// const x = 100;

// x = 200; // TypeError : assignment to a constant variable

const x = 100;

const arr = [1, 2, 3, 4];

// re-assignment cannot be done when using const
// arr = [1, 2, 3, 4, 5];

// But can be manipulated with methods/functions
arr.push(5);

console.log(arr);

const person = {
  name: "Brad",
};

person.name = "John";
person.email = "brad@gmail.com";

console.log(person);

//  Declare multiple variables at once

let a, b, c; // if not assigned anything the default value will be 'undefined'

const d = 10,
  e = 10,
  f = 30;

console.log(d);

console.log(a);
