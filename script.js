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
//tas pats:
function myFunction(x, y) {
  y['d']=y.b
  delete y['b']
  return {...x, ...y}
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
//tas pats: 
function myFunction(obj) {
  let t={}
  for (let i in obj) {
  t[i] = (obj[i]).trim()==''?null:obj[i]
  }
  return t
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




//DATES JS



// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

function myFunction(a, b) {
   
    return a.getTime() === b.getTime()
 }

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b) {
   return Math.abs(a - b) / (24 * 60 * 60 * 1000)
 }

 //tas pats: 
 function myFunction(a, b) {
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24
 }

 // Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

function myFunction(a, b) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth() === b.getMonth() &&
           a.getDate()=== b.getDate()
  }

  // Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

function myFunction(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 60
 }

 //tas pats: 
 function myFunction(a, b) {
   return Math.abs(a - b) <= 60 * 60 * 1000
 }

 // Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

function myFunction(a, b) {
    return a < b
 }

 // Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

function myFunction(a, b) {
       return a.setDate(a.getDate() + b)
 }

 //tas pats: 
 function myFunction(a, b) {
  const currentDays = a.getDate();
  return a.setDate(currentDays + b)
}


// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds

function myFunction(a, b) {
    const hrs = Math.abs(a.getHours() - b.getHours());
    const min = Math.abs(a.getMinutes() - b.getMinutes());
    const sec = Math.abs(a.getSeconds() - b.getSeconds());
    return { hrs, min, sec }
 }

 //tas pats:
 function myFunction(a, b) {
    const dif = Math.abs(a - b);
    const hrs = Math.floor(dif / 1000 / 60 / 60);
    const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
    const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
    return { hrs, min, sec }
  }

  // Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
   return ((~~(date.getMinutes() / 15) + 1) * 15) % 60
}

// tas pats

function myFunction(date) {
    const quarter = 15 * 60 * 1000;
    const closestQuarter = new Date(Math.round(date / quarter) * quarter);
    const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
    return nextQuarter.getMinutes();
    }


    
    
  // SETS 


  // Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set


  function myFunction(set, val) {
    return set.has(val);
  }

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

  function myFunction(set) {
    return [...set];
  }

  // Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
  const union = new Set(a);
  for (const el of b) {
  union.add(el)
  }return union
}

//tas pats:
function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
   return new Set([a, b, c])
}

//tas pats:
function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function myFunction(set, val) {
  set.delete(val)
  return set
}

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

function myFunction(set, arr) {   
  return new Set([...set,...arr])
}

//tas pats: 
function myFunction(set, arr) {
  arr.forEach((e) => set.add(e));
  return set;
}

// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b


function myFunction(a, b) {
  const inter = new Set(
  [...a].filter(el => b.has(el))
  );
    return inter
}

//tas pats: 
function myFunction(a, b) {
  const int = new Set();
  a.forEach(el => b.has(el) && int.add(el));
  return int;
}