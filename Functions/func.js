function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();
// Heyya, World

// Passing values to functions as arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}

ourFunctionWithArgs(10, 5);
// 5

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(10, 5);
// 15

// Global Scope with Function
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += " myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

// Local Scope with Functions
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();
// 5

// Global Scope vs Local Scope in functions
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
// sweater
console.log(outerWear);
// T-Shirt

// Use Return to Return a value from a function
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));
// 3

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5));
// 25

function addFive() {
  sum += 5;
}

// console.log(addFive());
// Error sum undefined

// Assignment with a returned value.
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);
// 2

// Stand in Line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
// Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6));
// 1
console.log("After: " + JSON.stringify(testArr));
// After: [2,3,4,5,6]

// Boolean Values
function welcomeTOBooleans() {
  return true;
}

// Use COnditional Logic with If statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true));
// Yes, that was true

// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
// Not Equal

// Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict("7"));
// Not Equal
console.log(testStrict(7.0));
// Equal

// Practice Comparing Different Values
function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
// Equal

// Comparison with the InEquality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
// Not Equal

// Comparison with the trict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));
// Not Equal

// Comparisons with the Logical And Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}

console.log(testGreaterThan(10));
// 10 or Under

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}

console.log(testGreaterOrEqual(10));
// 10 or Over

// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}

console.log(testLessThan(10));
// Under 25

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}

console.log(testLessOrEqual(10));
// Smaller Than or Equal to 12

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(10));
// No

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(10));
// Inside

// Else Statements
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(4));
// 5 or Smaller


// Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(7));
// Between 5 and 10

// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));
// Less than 10

// Chaining If Else Statements
/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/
function chainedIfElseStatements(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(chainedIfElseStatements(7));
// Small
console.log(chainedIfElseStatements(20));
// Huge


// Switch Statements
/*
Write a switch statement which tests values and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
function caseInSwitch(val) {
  var answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta";
      break;

    case 3:
      answer = "gamma";
      break;

    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));
// aplha
console.log(caseInSwitch(2));
// beta
console.log(caseInSwitch(3));
// gamma
console.log(caseInSwitch(4));
// delta

// Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff("a"));
// apple
console.log(switchOfStuff(2));
// stuff

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Medium";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));
// Low
console.log(sequentialSizes(5));
// Medium
console.log(sequentialSizes(8));
// High

// Replacing If Else Chains with Switch
// BEFORE
function chainToSwitch(val) {
  var answer = "";

  if (val == "bob") {
    answer = "Marley";
  } else if (val == 42) {
    answer = "The Answer";
  } else if (val == 1) {
    answer = "There is no #1";
  } else if (val == 99) {
    answer = "Missed me by this much!";
  } else if (val == 7) {
    answer = "Ate Nine";
  }
  return answer;
}
// AFTER
function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}


// Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}

console.log(isLess(10, 15));
// true
console.log(isLess(20, 15));
// false

// Returning Early Pattern from Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));

// Card Counting
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdBet = "Hold"

  if (count > 0) {
    holdBet = 'Bet'
  }
  return count + " " + holdBet;
}

cc(2);
cc('K');
cc(10);
cc('K');
cc('A');
console.log(cc(4));
// -2 Hold

// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));
// NaN

// Use the parseInt Function with a Radix
// Radix - specifies the base of a number in a string
function convertToInteger(str) {
  return parseInt(str, 2);  
}

console.log(convertToInteger("10011"));
// 19

// Use the Conditional (Ternary) Operator
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
  // if (a === b) {
  //   return true;
  // } else {
  //   return false;
  // }
  // Using the ternary operator
  return a === b ? true : false;
  // Another simpler way
  // return a === b;
}

console.log(checkEqual(1, 2));
// false

// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));
// positive

