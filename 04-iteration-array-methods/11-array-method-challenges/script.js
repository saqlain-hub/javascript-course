const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

// Challenge 1
// Solution #1 | My try
// const youngPeople = people
//   .filter((person) => person.age > 0 && person.age <= 25)
//   .map((person) => {
//     return {
//       name: `${person.firstName} ${person.lastName}`,
//       email: person.email,
//     };
//   });

// console.log(youngPeople);

// Challenge 1
//  Solution #2 | Tutorial Try
// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((person) => ({
//     name: person.firstName + " " + person.lastName,
//     email: person.email,
//   }));

// console.log(youngPeople);

// Challenge 2
//Solution #1 | My try

// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const sum = numbers
//   .filter((number) => number > 0)
//   .reduce((acc, cur) => {
//     return (acc += cur);
//   }, 0);

// console.log(sum);

// Challenge 2
// Solution #2 | Tutorial

const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum);

// Challenge 3
// Solution 1 | My Try

// Did not succeed
// const words = ["coder", "programmer", "developer"];

// const capitalizedWords = words
//   .filter((word) => word)
//   .map((word) => word[0].toUpperCase());

// console.log(capitalizedWords);

// Challenge 3
// Solution 2 | Tutorial

// const words = ["coder", "programmer", "developer"];

// const cWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1, word.length);
// });

// console.log(cWords);
