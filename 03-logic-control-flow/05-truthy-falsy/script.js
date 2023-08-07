// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and Falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays
const posts = ["post one"];

if (posts.length > 0) {
  console.log("list posts");
} else {
  console.log("No posts");
}

// Checking for empty objects
const user = { name: "Saqi" };

if (Object.keys(user).length > 0) {
  console.log("list user");
} else {
  console.log("No user");
}

// Loose Equality (==)
console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);
