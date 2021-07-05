// Control Flow

/* Control flow refers to the orders in teh which a sequence of code is executed statements
statements will execute from top to bottom. */

var condition;
console.log("a");

if (condition === true) {
    console.log("b");
}
else {
    console.log("c");
}
console.log("d");
//  or
if (condition) {
  //  block of code to be executed if condition1 is true
} else if (condition) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

//Switch Statement

/*
There is also the java script Switch Statement- which is used to perform different actions
based on different conditions
*/

//The syntax for the switch statement is as follows - 
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
};