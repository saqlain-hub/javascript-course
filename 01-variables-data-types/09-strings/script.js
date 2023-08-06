let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals  |  ES6 2015 Update
x = `Hello, my name is ${name}  and I am ${age} years old`;

// String properties and methods
const s = new String("Hello World");

x = typeof s;

x = s.length;

// Access value by index
x = s[3];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("d");

x = s.substring(2, 5);

x = s.substring(7);

x = s.slice(-11, -6);

x = "         hello world";
x = x.trim();

x = s.replace("World", "John");

x = s.includes("He");

x = s.valueOf();

x = s.split("");

console.log(x);
