/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array 
of objects as the first parameter and a string as the second. The 
`keyInObjectArray` function will return `true` if any of the objects contains 
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" },
  { name: "Drew", location: "undefined"}
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  // declare a variable to hold true / false value
  let result = false;
  // loop through the array with for each
  objArray.forEach(function (obj) {
    // check if object contains the keyString as a key
    //if object contains the keyString change the variable to true
    if (keyString in obj) {
      result = true;
    }
  })

  //return the result
  return res
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
