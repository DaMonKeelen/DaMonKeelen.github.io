/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, name) {
    //iterate through array
    for (var i = 0; i < array.length; i++) {
    //return the animal's object if name exists
    if (array[i].name === name) {
        return array[i];
    } 
  }
  //return null if name doesnt exist
  return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //iterate through array
    for (var i = 0; i < animals.length; i++) {
        //compare object's name to the given name
        if (animals[i].name === name) {
            //if the name matches, set the object to the replacement
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
//iterate through array
for (var i = 0; i < animals.length; i++) {
    //see if the name exists
    if (animals[i].name === name) {
        return animals.splice(i, 1);
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
/*  check to see if the animal object has a name property with a length of 0 
    & a species property with a length of 0 */
    if (animal.name.length > 0 && animal.species.length > 0) {
        //check to see if any other animals have the same name
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].name === animal.name) {
                return;
            } else {
            animals.push(animal);
            }
        }
      //if (!search(animals, animal.name)) {
      //    animals.push(animal);
        }
    }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
