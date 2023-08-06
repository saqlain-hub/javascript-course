let x = new String("hello world");

// capitalize = x.charAt().toUpperCase();
// capitalize = capitalize + x.substring(1);

capitalize = x[0].toUpperCase();
capitalize = capitalize + x.slice(1);

console.log(capitalize);
