let x;

// Challenge 1
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();
x = arr;

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// let arr3 = [...arr1, ...arr2];

let arr3 = arr1.concat(arr2);

// arr3.splice(4, 1);

arr3 = arr1.slice(0, 4).concat(arr2);

x = arr3;

// console.log(x);

// Challenge 1
const ar = [1, 2, 3, 4, 5];

ar.reverse();
ar.push(0);
ar.unshift(6);

// Result: [6, 5, 4, 3, 2, 1, 0]
// console.log(ar);

// Challenge 2
const ar1 = [1, 2, 3, 4, 5];
const ar2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const ar3 = ar1.slice(0, 4).concat(ar2);

// Solution 2
const ar4 = [...ar1, ...ar2];
ar4.splice(4, 1);

console.log(ar4);
