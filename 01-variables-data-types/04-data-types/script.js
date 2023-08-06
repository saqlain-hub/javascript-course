// String
const firstName = "Sara";

// Number
const age = 30; // integer
const temp = 98.9; // float - decimal

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined

let score;
const score1 = undefined;

// Symbol
const id = Symbol("id");

//  BigInt
const n = 90007199254740991n;

// Reference Types

// arrays , functions , objects

const numbers = [1, 2, 3, 4];

const person = {
  name: "Brad",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;
console.log(output, typeof output);
