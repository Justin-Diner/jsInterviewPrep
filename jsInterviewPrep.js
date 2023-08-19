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
//(function square(num) {
//  console.log(num * num)
//})(5);
//// This is immediately invoked. 
//(function(x) {
//  return (function (y) {
//    console.log(x) // 1
//  })(2)
//})(1)
// This gives the output of 1. Searches the innerscope. Then it searches the parent's scope. Since x exists there it finds it. This is CLOSURE. 
// The ability of a function to access variables outside of its scope is closure. 

// Q7 - Function Scope - O/P Based Question
//for (let i = 0; i < 5; i++) {
//  setTimeout(function() {
//    console.log(i)
//  }, i * 1000)
//}
// Every time the variable runs it creates a new block scope for the function. If it has let, it has block scope. If it is var, which does not have block scope, it will produce 5, 5, 5, 5, 5. 

// Hoisting 
// The below works because functions are hoisted completely. It does not work with variables. 
//functionName()

//function functionName() {
//  console.log("Roadside Coder")
//}

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
// Differences - 
// 1. Syntax is different. 
// 2. Implicit return on one liners. 
// 3. Arguments - Cannot use arguments keyword inside arrow function. 
// 4. this - 

//let user = {
//  username: "Justin",
//  rc1: () => {
//    console.log("User is " + this.username);
//  }, 
//  rc2() {
//    console.log("User is" + this.username)
//  }
//}

// Closures 
// Function that references variables in the outerscope from its innerscope. 
// Lexical Scope - THe current context of your code. Can be global or local. We also have our block scope. 
//var username = "Justin" // This is in the global scope. 
//function local() {
//  // local scope
//  console.log(username)
//}

//local();
// Lexical scope means that a variable defined outside a function can be accessed inside the function. 
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function. 

// Closure Scope Chain
// functions have access to its outerscope, and its parent. 

// CLOSURE QUESTIONS
// Ques 1: What will be logged to console? 
//let count = 0; 
//(function printCount() {
//  if (count === 0) {
//    let count = 1; // Shadowing (block scope)
//    console.log(count);
//  }
//  console.log(count) // 0
//})(); 

//// Ques 2 - Write a function that would allow you to do this
//function createBase(num) {
//  return function(innerNum) {
//    return num + innerNum
//  }
//}

//var addSix = createBase(6);
//console.log(addSix(10))
//console.log(addSix(21))

// Create a closure where the value is always 6. This is one of the use cases of closures. 

// Ques 3 - Time Optimazation. 
//function find(index) {
//  let a = [];

//  for (let i = 0; i < 1000000; i++) {
//    a[i] = i * i;
//  }
//  return function(index) {
//    console.log(a[index])
//  }

//}

//const closure = find();
//console.time("6");
//closure(6);
//console.timeEnd("6");
//console.time("50");
//closure(50);
//console.timeEnd("50")

// Ques 4: Block Scope and setTimeout

//function consoleI() {
//    for (var i = 0; i < 3; i++) {
//      function inner(i) {
//        setTimeout(function log() {
//          console.log(i)
//        }, i * 1000)
//    }
//    inner(i)
//  }
//}

//consoleI()

// Var does not have a block scope, it has a function scope. setTimeout only runs after the code has ran successfully. 
// Solution is to use let. Let is BLOCK scoped. It has a completely different scope. 

// Ques 5: How would you use closure to create a private counter? 
//function counter() {
//  var _counter = 0; 

//  function add(increment) {
//    _counter += increment
//  }

//  function retrieve() {
//    return "Counter = " + _counter;
//  }

//  return {
//    add, 
//    retrieve
//  }
//}

//const c = counter(); 

//c.add(5);
//c.add(10);

//console.log(c.retrieve());

// Ques 6: What is a Module Pattern? 
var Module = (function () {
  function privateMethod() {
    console.log("private")
  }

  return {
    publicMethod: function() {
      console.log("public")
    },
  };
})(); 
// Private functions are not returned. This makes them inaccessible outside of the public namespace. If we don't want the user to access it directly. 
// We make it exactly as the developer wants it to work. 

Module.publicMethod(); 

// Ques 7: Make this run only once. 
//let view; 
//function likeTheVideo() {
//  let called = 0; 

//  return function() {
//    if (called > 0) {
//      console.log("Function already called.");
//    } else {
//      view = "Roadside Coder";
//      console.log("Subscribe to", view);
//      called++; 
//    }
//  }
//}

//let isSubscribed = likeTheVideo(); 
//isSubscribed(); 
//isSubscribed(); 
//isSubscribed(); 

// Ques 8: Once Polyfill
//function once(func, context) {
//  let ran; 

//  return function() {
//    if (func) {
//      ran = func.apply(context || this, arguments);
//      func = null;
//    }
//    return ran; 
//  }
//}

//const hello = once(() => console.log("hello"))
// hello();


// Ques 3: Memoize Polyfill
function myMemoize(fn, context) {
  const res = {};
  return function(...args) {
    var argsCache = JSON.stringify(args);
    if(!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return 
  }
}

res = {
  "5, 6": 30, 
}
const clumsysquare = (num1, num2) => {
  for (let i = 1; i < 100000000; i++) {
  }

  return num1 * num2
}

console.time("First call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First call")

console.time("Second call");
console.log(clumsysquare(9467, 7649)); 
console.timeEnd("Second call")