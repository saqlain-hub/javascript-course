//  Calculator Challenge

// if-else solution
// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else {
//     return "Error";
//   }
// }

// switch-statement solution
// function calculator(num1, num2, operator) {
//   switch (true) {
//     case operator === "+":
//       return num1 + num2;
//     case operator === "-":
//       return num1 - num2;
//     case operator === "*":
//       return num1 * num2;
//     case operator === "/":
//       return num1 / num2;
//     default:
//       return "error";
//   }
// }

// x = calculator(5, 2, "+");
// console.log(x);
// x = calculator(5, 2, "-");
// console.log(x);
// x = calculator(5, 2, "*");
// console.log(x);
// x = calculator(5, 2, "/");
// console.log(x);
// x = calculator(5, 2, "&");
// console.log(x);

// improvised switch-statement
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operator";
  }
  console.log(result);
  return result;
}

calculator(5, 2, "&");
