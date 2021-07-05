//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
 return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var keys = Object.keys(object);
    return keys.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
var val = [];
//loop through the object to get string values
for (var keys in object) {
    if (typeof object[keys] === "string") {
        val.push(object[keys]);
    }
}
return val.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if (Array.isArray(collection)) {
       return "array";
   } 
   else {
       return "object";
   }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string[0].toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitArr = string.split(" ");
 for( var i = 0; i < splitArr.length; i++) {
     splitArr[i] = splitArr[i][0].toUpperCase() + splitArr[i].slice(1);
 }
 return splitArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  var capObj = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return `Welcome ${capObj}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
        var capName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    var capSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    return `${capName} is a ${capSpecies}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        if(!object.noises || !object.noises.length) {
        //return there are no noises
        return "there are no noises";
    } else {
        //otherwise return the noises array joined by a space
         return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var newArray = string.split(" ");
    for(var i = 0; i < newArray.length; i++) {
        if(newArray[i] === word) {
            return true;
        }
    }
            return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//add name to the object's friends array
object["friends"].push(name);

//return the object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
     //returning false if friend’s array does not exist
   //returning false if friend’s array does not exist
  if(!object.friends){
      return false;
  }
  if(object.friends){
      //looping over friend’s array if such array exists
      for(var i = 0; i < object.friends.length; i++){
          //checking to see if name exists within friend’s array;
          //using toUpperCase() method to avoid case sensitivities
          if(object.friends[i].toUpperCase() === name.toUpperCase()){
              return true;
          }
      }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//creating an empty array to later push names into
   let notFriends = [];
   //looping over array to get access to its elements
   for(let i = 0; i < array.length; i++){
       //checking to see if the name in array doesn’t match the name we’re looking for
       //implementing isFriend function to see if certain elements in the array are not friends with name parameter
       if(array[i].name !== name && !isFriend(name, array[i])){
           //pushing the name into nonHomies array
           notFriends.push(array[i].name);
       }
   }
   return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
 for (var i = 0; i < array.length; i++) {
        for (var key in object) { 
            if (object.hasOwnProperty(array[i])) {
                delete object[array[i]];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let unique = [...new Set(array)];
        return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}