//For Loops

/*
//for - loops through a block of code a number of times
//for/in - loops through the properties of an object
*/
var i = 0;
//Increment Operator
// i = 1 +1;
i++;

// addition assigment operator 
// i = 1 + 2
i += 2;

//Decrement operator 
// i = i - 1
i-- ;
// console.log(i);

//for loops:
//Create a for loop that prints the string of y your name to the console ______ times
//Start: 0
//Stop: (including) 5
i = 0; //loop 1
i = 1; //loop 2
i = 2; //loop 3
i = 3; //loop 4
i = 4; //loop 5
for(var i = 0; i <= 5; i++) {
  console.log("Tumma");
}
console.log(i);


// Creating a loop  that prints a string from 0 -- 9
//start : 0
//Stop (including)9
for(var count = 0; count <= 9; count++ ){
  console.log(count);
}


//Console log the numbers 0 2, 4, 6, 8 using a loop. 
//start: 0
//stop: 8
for(var i = 0; i <= 8; i += 2) {
  console.log(i);
}


//Console log the numbers 0 3, 6, 9, 12 using a loop. 
//start: 0
//stop: 12
for(var i = 0; i <= 12; i += 3) {
  console.log(i);
}


//Declare for loop to run decrimentally from 5 to 1.
//start:5
//stop:1
for(var i = 5; i >= 1; i--) {
  //print variable i to log
  console.log(i);
}


//using a for-loop, log all elements in the colors array 
var colors = ["red", "orange", "yellow", "green", "blue"];
//start : red (0 index)
//stop :colors.length - 1
for(var i = 0; i <= colors.length - 1; i++) {
 console.log(colors[i]);
}


//using a for-loop, log all elements in the colors array 
var colors = ["red", "orange", "yellow", "green", "blue"];
//or
//start : red (0 index)
//stop :colors.length; (<)
for(var i = 0; i < colors.length; i++) {
 console.log(colors[i]);
}


// Declaring a variable named myObject and assiging it to an object 
var myObject = {};
// Using dot notation add the 
myObject.name = "Batman";
myObject.city = "Gotham";
myObject.favFood = "Pizza";
console.log(myObject);
//console.log(key + " : " + myObject[key]);
// Print 10 - 0
// Start: 10
// Stop (included): 0
var i = 10;
while (i >= 0) {
  console.log(i--);
}

//For.. In Loop

/*
A for...in loop only iterates over enumerable, non-Symbol properties. For...in loops are used to iterate
though and access objects.
*/

for (var variable in object) {
  //statement
}

//Variable - A different property name is assigned to variable on each iteration.
//Object - Object whose non-Symbol enumerable properties are iterated over.

//While Loops

//The while loop loops through a block of code as long as a specified condition is true.
while (condition) {
  // code block to be executed
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}