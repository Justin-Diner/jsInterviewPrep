// Function Declaration 

// Q1 - What is Function Declarations? 
//(function square(num) {
//  return num * num
//})()

// Q2 - What is Function Expression? 
// Store a function inside a variable. 
//const square = function(num) {
//  console.log(num * num); 
//}

// The part after square is an anonymous function because it has no name. 

// Q3 - What are First Class Functions? 
// In a language where a function can be treated like a variable. These are first-class functions. 
// It can do anything that a variable can do. Functions are first class functions in JS. 
//function displaySquare(fn) {
//  console.log("Square is " + fn(5))
//}

//displaySquare(square);

// Q4 - What is IIFE? 
// Immediately Invoked Function Expressions 
(function square(num) {
  console.log(num * num)
})(5);
// This is immediately invoked. 
(function(x) {
  return (function (y) {
    console.log(x) // 1
  })(2)
})(1)
// This gives the output of 1. Searches the innerscope. Then it searches the parent's scope. Since x exists there it finds it. This is CLOSURE. 
// The ability of a function to access variables outside of its scope is closure. 

// Q7 - Function Scope - O/P Based Question
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i)
  }, i * 1000)
}
// Every time the variable runs it creates a new block scope for the function. If it has let, it has block scope. If it is var, which does not have block scope, it will produce 5, 5, 5, 5, 5. 

// Hoisting 
// The below works because functions are hoisted completely. It does not work with variables. 
functionName()

function functionName() {
  console.log("Roadside Coder")
}

// This does not work because the variable is not hoisted. FUNCTIONS are hoisted compeltely. 
//console.log(x);
//x = 12

// When a variable is within a local scope, you will not check the global scope. 

// Functions in JavaScript
// Q10 - Params vs Arguments 

              // params
//function square(num) {
//  console.log(num * num);
//}

//square(5) Arguments 

// Spread vs Rest Operators 

//                  REST OPERATOR
//function multiply(...nums) {
//  console.log(nums);
//}

//var arr = [5, 6]
//multiply(...arr) // SPREAD OPERATOR 
// Rest must be the last parameter. 

// Q12 - Callback functions
// A function passed into another function as an argument. 
// Examples - Map Reduce Event Listeners. 

// Q13 - Arrow Functions

