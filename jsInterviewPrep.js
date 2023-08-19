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

