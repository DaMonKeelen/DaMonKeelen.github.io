// String Manipulations

// Operators

// Concatenation
// The Addition operator /* "+", */ can be used to concatenate strings together.

// Formatting Data
// The STRING function is used to format data into a string. 
//The READS procedure can be used to read values from a string into IDL variables.

// Case Folding
/*The .toLowerCase() method returns a copy of the string converted to lowercase.

Similarly, the .toUpperCase() method returns a copy converted to uppercase. 

The CapWords() method returns a copy where the first letter of each word is capitalized. 
*/

// White Space Removal
// The Compress() and Trim() methods can be used to eliminate unwanted white space. 

// Length
// The Strlen() method (or STRLEN function) returns the length of the string.

// Substrings
/*CharAt(), Extract(), IndexOf(), Insert(), LastIndexOf(), Remove(), Replace(),
Reverse(), and Substring() methods.


// Splitting and Joining
The Split() method is used to break strings apart, and the Join() method 
can be used to join them. 

// Comparing Strings
The "EQ" operator can be used to directly compare two strings. 
The Contains(), EndsWith(), Matches(), and StartsWith() methods 
can be used to compare portions of strings.
*/

// String Methods

concat() - //Combines the text of two or more strings and returns a new string.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


indexOf() –// Returns the starting index of a substring within another string. A –1 is returned if no match is found.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1


charAt() – //Returns the character at the specified location.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"


lastIndexOf() - //Returns the index within the string of the last occurrence of the specified value, or -1 if not found
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
 
match() - //Used to match a regular expression against a string.
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]


substring() – //A portion of a string is returned. A starting and ending location are passed to this function.
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"


replace() – //Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


search() - //Executes the search for a match of a regular expression. If successful, search returns the index of the match inside the string. Otherwise, it returns -1.
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."


slice() - //Extracts a section of a string and returns a new string.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


split() - //Splits a string into an array of strings by separating the string into substrings.
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


length() – //The length of the string is returned as the count of the number of characters it contains.
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4// expected output: "Life, the universe and everything. Answer: 42"


toLowerCase() – //Converts the entire string to lower case.
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."


toUpperCase() – //Converts the entire string to upper case.
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."