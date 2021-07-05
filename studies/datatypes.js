/*
* DATATYPES:
*
* 0. There are two different types of data. Primitive and Complex.
*
* 1. Primitive data types are immutable: meaning they do no hold, collet, or aggregate other values. 
*
* 2. Also, this data type is copy by value meaning operations on simple values return new simple values, they do not alter the original value.
*
* 3. The different types of simple data types are:
*/

// 1. Number : Numeric Value //
1;

// 2. String: Character Data//
"string";

// 3. Boolean: true or false//
true;

// 4. Nan: Not a Number //
NaN;

// 5. undefined: no-value, incept, uninitiialized//
undefined;

// Datatypes

/*In computer science, data is anything that is meaningful to the computer.
JavaScript provides eight different data types which are undefined, null, 
boolean, string, symbol, bigint, number, and object. */


//  Numbers
/*
- Any numerical value: postive, negative, or with decimal points
- Like regular numbers , we can add subtract divide and multiply.
- And new values can be created with arithmetic expressions. */

// Number Examples:

var myNumber = 5;  // Regular Number
myNumber = 1.5; // Decimal Number
myNumber = 4 + 5; // Mathematical Expression



// String Data types
/*
- textual data wrapped in quotation marks “quotations”: “hello”, “70119”, “!@?”
- We can access individuals characters in a string with bracket notation
- Can be combined using the + operator
- Have a length property that returns the total number of characters the string contains
*/

// String Examples

var myVariable; // <—Declaring a variable
myVariable= ‘Nguyen’; // <— String made with single quotes (’)
myVariable = “Connor”; // <— String made with double quotes



// Booleans
/*
- A true or false value related to logic.
- You can also almost think of them as similar to on/off switch.
- Typically used in conditional statements.
- Can be created with boolean expressions using comparison operators.
*/

// Boolean Examples

var myBoolean = true; // Boolean Value
myBoolean = false; // Boolean Value
myBoolean = 1 === “1"; // Comparison



//Array
/*A list-like complex data that
is used to store similar data values.
Are list-like complex data type that is used to store similar data values
In JavaScript, arrays are created with square brackets […] 
and allow duplicate elements.
*/ 

[]; // This is an array

var myArray = []; /* this is an array assigned
to a variable named myArray */


myArray = [ “a”, “b”, “c”];  // this is an array with string data types


/*
Index -

a number that specifies a position inside of an array
Brackets notation returns the value in the array at the index provided
List/ collection - a more specific term to describe an array
Method - a function (or action) that a specific data type can do.
*/

var sports = [“basketball”, “soccer”, “volleyball”, “football”];
console.log(sports[0]);
return basketball

console.log(sports.length - 1);
// access the number of properties in the array

console.log(sports.length); // return 4
sports.push(“baseball”);

//adds to the back of an array
sports.pop()

// removes the last property in the array // football
sports.unshift(“baseball”)

//puts baseball in the front of the array
sports.shift()

// removes basketball from the array
sports.join()

//concatenates the array into a string


// Object

/*
- objects a collect data in the form of {“key”: value} pairs called properties .
- An object is created with curly braces {…} and a list of properties.
*/


{};// this is an object literal
var myObject = {}; // this is an object literal assignment to a variable named my Object
myObject = {key1 : ‘a’, key2: ‘b’};



var gear = {
shoes: “white”,
jersey: “blue”,
socks: “black”
};

gear[“number”] = 4; //how to add another property
console.log(gear[“shoes”]);
console.log(gear.jersey);
console.log(gear.number);
console.log(gear);

// Functions

/*
-Reusable blocks of code that accepts inputs, process those inputs,
and return a new data value.

- There are 4 parts to a function declaration
    - Name
    - Paramater(s)
    - Function Body (where the code runs)
    - return statement.
    */
    
    
// Defining functions

/* function Name (parameter) {
    <function body>
    <function body>
    return statement
    */
    
    
// FUNCTION PARAMETERS

/*
- Functions can optimally take parameters.  So they can take no parameters
or as many required.
- Parameters are just placeholders for arguments that are later “passed” or
given to the function at call time.
*/
// function example
/*
- Functions - are predefined commands for performing an action
- parameters  are placeholders for data input coming into  the function

[if the function needs parameters put them inside parantheses : EX) (num1, num2)

If no parameters are needed leave them empty:]

- Return Statements - stops the execution of that function and return
a value from that function.*/


function add(num1,num2){
  return sum = (num1 + num2);
  console.log(sum)

  
  
//   Function and calling functions

/* FUNCTION ARGUMENTS

The input 4 is known as an ARGUMENT
- not all function calls require arguments
- arguments can be any DATA TYPE
*/


moveForward(4);  //
turnRigh();

// Examples

function nameOfFunction(parameter1, parameter2){ // <-- function declaration
    return “return statement”;
}
nameOfFunction(argument1, argument2); // < function call/ function invocation

/*
- Functions are predefined commands for performing an action
- A funciton call tells the computer to perfrom the action once.
*/
// Functions return Statement
/*
-Functions can optionally have a return statement
- the return statement will pull a value from a
functions call( pull value out of local scope);
- return statements can only be used in a function body
*/


// Undefined

/* The undefined data type represents value that is not assigned.
If a variable is declared but the value is not assigned,
then the value of that variable will be undefined. For example,
*/
let name;
console.log(name); // undefined


/* It is also possible to explicitly assign a variable value undefined.
For example:
*/
name = undefined;
console.log(name); // undefined


// null

/* In JavaScript, null is a special value that represents empty or unknown
value. For example, */
const number = null;


// NaN

/*
NaN is a property of the global object. In other words, it is a variable in global scope.
The initial value of NaN is Not-A-Number — the same as the value of Number.NaN.
NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.
It is rather rare to use NaN in a program. There are five different types of operations that return NaN:
NaN values are generated when arithmetic operations result in undefined or unrepresentable values.
Such values do not necessarily represent overflow conditions. A NaN also results from attempted coercion
to numeric values of non-numeric values for which no primitive numeric value is available.
For example, dividing zero by zero results in a NaN — but dividing other numbers by zero does not.
*/

/*
/*Number cannot be parsed (e.g. parseInt(“blabla”) or Number(undefined)) */
/*Math operation where the result is not a real number (e.g. Math.sqrt(-1)) */
/*Operand of an argument is NaN (e.g. 7 ** NaN) */
/*Indeterminate form  (e.g. 0 * Infinity, or undefined + undefined) */
/*Any operation that involves a string and is not an addition operation (e.g. “foo” / 3) */


// Infinity

/*
Infinity is a property of the global object. In other words, it is a variable in global scope.
The initial value of Infinity is Number.POSITIVE_INFINITY.
The value Infinity (positive infinity) is greater than any other number.
*/