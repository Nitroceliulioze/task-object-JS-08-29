// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction(obj) {
  return obj.country;
}

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

function myFunction(obj) {
  return obj["prop-2"];
}

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction(obj, key) {
  return obj[key];
}

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists

function myFunction(a, b) {
  return a.hasOwnProperty(b);
}

//tas pats:

function myFunction(a, b) {
  return b in a;
}

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

function myFunction(a, b) {
  return Boolean(a[b]);
}

// tas pats:
function myFunction(a, b) {
  return !!a[b];
}

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object

function myFunction(a) {
  return { key: a };
}

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction(a, b) {
  return { [a]: b };
}

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b) {
  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}
//tas pats:
function myFunction(a, b) {
  return Object.fromEntries(a.map((v, index) => [v, b[index]]));
}

// Write a function that takes an object (a) as argument
// Return an array with all object keys

function myFunction(a) {
  return Object.keys(a);
}

// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
  return Object.values(a).reduce((total, cv) => total + cv, 0);
}

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function myFunction(x, y) {
  const { b, ...resty } = y;
  return { ...x, ...resty, d: b };
}

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}

//tas pats:
function myFunction(a, b) {
  return Object.entries(a).reduce(
    (pv, cv) => ({ ...pv, [cv[0]]: cv[1] * b }),
    {}
  );
}

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}

//tas pats:
function myFunction(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [val]: key };
  }, {});
}

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === "") newObj[key] = null;
  }
  return newObj;
}

//tas pats:
function myFunction(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, !v.trim() ? null : v])
  );
}

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}
//tas pats:
function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: obj.size + "cm" }),
    ...(obj.weight && { weight: obj.weight + "kg" }),
  };
}

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

function myFunction(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction(a) {
  return a.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}

//tas pats:
function myFunction(a) {
  return a.reduce((pv, cv) => ({ ...pv, [cv]: pv[cv] ? pv[cv] + 1 : 1 }), {});
}
