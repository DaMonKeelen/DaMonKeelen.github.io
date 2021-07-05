// Functions 
 
/* 
Reusable blocks of code that accept inputs, process those inputs, and returns a new data value.
There are 4 parts to a function declaration

    * Name
    * Parameter(s)
    * Function body (where the code runs)
    * Return statement
    
Defining Functions:
function name(parameter) {
    <function body>
    <function body>
    return statement
}

Function Parameters
•	Functions can optionally take parameters. 
So they can take no parameters or as many are required.
* Parameters are just placeholders for arguments that are 
later “passed” or given to the function at call time

* Parameters are placeholders for data input coming into the function.
    * If the Function needs parameters, put them inside the parentheses:      
    * If no parameters are needed, leave the parentheses empty: 
    
Return statement stops the execution of that function and returns a value from that function.

Calling Function:

name(arguments)
Function and function calls : Key Points
* unctions are predefined commands for performing an action
* A Function Call tells the computer to perform that action once.
* Function Calls in JavaScript are written: nameOfFunction();

* Arguments are Data inputs for a Function Call
    * If the Function needs arguments, put them inside the parentheses: 
    * If no arguments are needed, leave the parentheses empty:
    
Function return statement
* Functions can optionally have a return statement
* The return statement will pull a value from a function call (pull value out of local scope);
* Return statements can only be used in a function body
*/

/*
Function can optionally have a return statement 
the return statement will pull a value from a function call (pull vale out of a local scope);

Return statements can only be used in a function body
*/
// create a function giving it a name add and two parameters
// inside function body return the sum of num1 and num2

//function add(num1,num2){
 // return num1 + num2;
  //console.log(sum)
  
  //Example 
  // create a function named, add, returning the sum of two numbers 
  //I: Two number values (num1, num2))
  //O: A number value ( the sum of the two inputs)
function add(num1, num2) {
 return num1 + num2;
}
// Printing to the console the sum of my arguments
console.log(add(1,2));
console.log(add(5,2));
console.log(add(50,2));


 // Create a function with the name subtract(sub) and take in 2 inputs (2 perameters).  return the subtraction of the two inputs
// Input(s): num1, num2 {Number} 
// Output: a number value that has the difference between num1 and num2 {Number}
function sub(num1, num2) {
 return num1 - num2;
}
// Printing to the console the difference of my arguments
console.log(sub(1,2));
// create function namd divide4 :
// I : one number value (num1)
// o: quotient of num1 and 4


function divide4(num1) {
  return num1 / 4;
}
//call the function (argument)
console.log(divide4(24));


//Create a function named concat that takes 3 parameters all three parameters concateaneted (+) 
// Input: str1, str2, str3 {Strings}
//Output: all of our paramters concatanated
//constraints: Use the (+) operator
function concat(str1, str2, str3) {
  return str1 + str2 + str3;
}
concat("Hello, ", "my name ", "is Shewit");
// Output: Print 'Hello World'
function print() {
}
// Printing to the console
console.log(print("Hello World"));
// Test the function 
print();


//Create a function called increment that will increment our "functionCalls" varible
//input :n/a
//output : n/a
var functionCalls = 0;
// using ou r cuntion (increment) give our 'functionCalls' variable 
function increment() {
  functionCalls++;
}
increment(); //increases once
increment(); // increases twice
increment(); // increases three times 
//check new value function variable 
console.log(functionCalls);


//Create a function called addToArray that will add a value to our data arrayL
//input : Any value to add as an element ot the array 
//Output n/a 
var data = []
function addToArray(val) {
   data.push(val);
  //  data[data.length] = element is also an option
}


// function addToArray(array,val){
  //Add  val to the passed in array
  // array.push(val);
// }
//add some values to the data array using the addToArray
addToArray("first value");
addToArray(4);


//  ////////////////////////////////
// Declaring a function with two numeral values as arguments and will print all numbers in the range (inclusive) to the console.
// I : num1 , num2 {numbers}
// O: none (printing to the console)
function range(num1, num2) {
  for (var i = num1; i <= num2; i++) {
    console.log(i);
  }
}
//calling the  function 2 times with 2 different sets of numbers
range(2,8);
range(15,20);
console.log(range(4,8));


 /// Second version
// Declaring a function with two numeral values as arguments and will print all numbers in the range (inclusive) to the console.
// The function should work whether the first argument is greater than or less than the second 
// I : num1 , num2 {numbers}
// O: none (printing to the console)
function range(num1, num2) {
  if (num1 < num2) {
  for(var i = num1; i <= num2; i++) {
    console.log(i);
  }
  } else if(num1 > num2) {
    // Start:
    // stop (including) : num 1
  for (var i = num1; i <= num2; i--) {
console.log(i);
  }
  }
}
//calling the  function 2 times with 2 different sets of numbers
range(3, 7);


// Create a function printArray that accepts an array and prints te individual element ot te console 
var names = [ "Feven", "Haaben", "Justine"];
var dogs = [ "collie", "pitbull"];
//I:
//O:
 function printArrayElements( array) {
   //Start: 0th index 
   //Stop (including):
   for(var i = 0; i <= array.length - 1; i++) {
   console.log(i);
   }
 }
 printArrayElements(names);
 printArrayElements(dogs);
 
 
 //Create a function capitalizeValues that accepts an objects and capitalizes each value, and returns that object 
var randomObject = {
  key1: "vinyl",
  key2: "hello"
};
 //I: object
 //O: the passed in object with its value capitalized 
function capitalizeValues (object) {
// for in loop to loop over the objects key/value pairs 
for(var key in object) {
  console.log(key);
  object[key] = object[key].toUpperCase();
}
// return object 
 return object;
}
  //access each values  using dot or bracket notation
 capitalizeValues(randomObject);
addToArray(true);
console.log(data);

//Scope
/*
A scope in JavaScript defines what variables you have access to. There are two kinds of scope – 
global scope and local scope.
*/

/*
Global Scope - If a variable is declared outside all functions or curly braces ({}), it 
is said to be defined in the global scope. Once you’ve declared a global variable, you can use 
that variable anywhere in your code, even in functions. 
*/
const globalVariable = 'some value';

const hello = 'Hello Reader!';

function sayHello () {
  console.log(hello);
}

console.log(hello); // 'Hello Reader!'
sayHello(); // 'Hello Reader!'

/*
Local Scope - Variables that are usable only in a specific part of your code are considered 
to be in a local scope. These variables are also called local variables. In JavaScript, there 
are two kinds of local scope: function scope and block scope.
*/

//Function Scope
/*
When you declare a variable in a function, you can access this variable only within the 
function. You can’t get this variable once you get out of it.
*/
function sayHello () {
  const hello = 'Hello Reader!';
  console.log(hello);
}

sayHello(); // 'Hello Reader!'
console.log(hello); // Error, hello is not defined

//Block Scope
/*
When you declare a variable with const or let within a curly brace ({}), you can access 
this variable only within that curly brace.
*/
{
  const hello = 'Hello Reader!';
  console.log(hello); // 'Hello Reader!'
}

console.log(hello); // Error, hello is not defined

//Function Hoisting and Scopes

/*Functions, when declared with a function declaration, are always hoisted to the top of 
the current scope. So, these two are equivalent:
*/

// This is the same as the one below
sayHello();
function sayHello () {
  console.log('Hello Reader!')
};

// This is the same as the code above
function sayHello () {
  console.log('Hello Reader!')
}
sayHello();

//When declared with a function expression, functions are not hoisted to the top 
//of the current scope.

sayHello() // Error, sayHello is not defined
const sayHello = function () {
  console.log(aFunction)
};

/*Because of these two variations, function hoisting can potentially be confusing, 
and should not be used. Always declare your functions before you use them.Functions 
do not have access to each other’s scopes.Functions do not have access to each other’s
scopes when you define them separately, even though one function may be used in another.
In this example below, second does not have access to firstFunctionVariable.
*/

function first () {
  const firstFunctionVariable = `I'm part of first`
};

function second () {
  first()
  console.log(firstFunctionVariable) // Error, firstFunctionVariable is not defined
}