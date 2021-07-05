//VARIABLES

/* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//Let

/*let is now preferred for variable declaration. It's no surprise as it comes as an improvement
to var declarations. Variables declared with the const maintain constant values. const declarations 
share some similarities with let declarations.
*/

/*Let - let is block scoped, anything within curly braces is a block. So a variable declared
in a block with let  is only available for use within that block. Just like var,  a variable 
declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared 
within its scope. Just like  var, let declarations are hoisted to the top. Unlike var which is 
initialized as undefined, the let keyword is not initialized. So if you try to use a let variable 
before declaration, you'll get a Reference Error.
*/
   let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined


//Const

/*
Variables declared with the const maintain constant values. Like let declarations, const declarations 
can only be accessed within the block they were declared. This means that the value of a variable 
declared with const remains the same within its scope. It cannot be updated or re-declared. 
*/
    const greeting = {
        message: "say Hi",
        times: 4
    };
    
        greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.

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