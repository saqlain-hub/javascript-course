// Object Literals

let x;

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

x = person.name; // dot syntax
x = person["age"]; // bracket syntax
x = person.address.state;
x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

const person1 = {
  "first name": "brad",
  "last name": "traversy",
};

x = person1["first name"];

console.log(x);
