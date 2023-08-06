// Fahrenheit to Celsius
// Challenge 1  |  My Try
// Solution 1
function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}
console.log(`Function: The temperature is ${getCelsius(128)} \xB0C`);

// Solution 2
const getCelsiusArrow = (f) => ((f - 32) * 5) / 9;
console.log(`Arrow Function: The temperature is ${getCelsiusArrow(40)} \xB0C`);

// Challenge 2 | My Try | minMax() arrow function that returns an object

const minMax = (num) => {
  return { max: Math.max(...num), min: Math.min(...num) };
};

console.log(minMax([24, 21, 44, 10]));

// Tutorial Solution
function minMaxOne(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(max);

  return {
    min,
    max,
  };
}

console.log(minMaxOne([1, 2, 3, 4, 5]));

// Challenge 3

(function (length, width) {
  console.log(length * width);
})(10, 5);

// Challenge 3 | tutorial try
((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
