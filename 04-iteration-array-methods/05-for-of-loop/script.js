// for-of loop newer loop

// Loop Through arrays
const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Saqi" }, { name: "Kate" }, { name: "Ava" }];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = "Hello World";

for (const letter of str) {
  console.log(letter);
}

// Loop over maps
const map = new Map();
map.set("name", "john");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
