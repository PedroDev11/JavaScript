// Operador ternario
let thirsty = false;
let drink = thirsty ? "yes" : "no";
console.log(drink);

// Populating an array

/*for (let i = 0; i < array.length; i++) {
  filledArray[i] = "hello";
}*/

let filledArray = Array.from({ length: 10 }, () => "hello");
console.log(filledArray);

// Filter unique values

const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5, 6, 3];

const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]

// Convert any value to boolean
// Converting truthy values to true and falsy values to false
Boolean(true); // true
Boolean(1); // true
Boolean("hello"); // true
Boolean([]); // true

Boolean(false); // false
Boolean(0); // false
Boolean(""); // false
Boolean(undefined); // false

// Using dobule negation !! to achieve the same result
console.log(!!true); // true
console.log(!!1); // true
console.log(!!"hello"); // true

console.log(!!false); // false
console.log(!!""); // false
console.log(!!null); // false

// Objects to array
const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// This method gets all the keys from an object and puts them into an array
const keysArray = Object.keys(obj);

// This method retrieves all the values from an object and puts them into an array
const valuesArray = Object.values(obj);

/* This method combines both, keys and values as pairs, creating arrays of pairs from
 an object´s properties */
const entriesArray = Object.entries(obj);

console.log(keysArray);
console.log(valuesArray);
console.log(entriesArray);

console.log("Avanced JS - CHEAT SHEET");

const fruits = ["platano", "mango", "sandia", "fresa", "mandarina"];

// Converts the array to a string
fruits.toString();

// Adds element at the end of the array
fruits.push("piña");

// Removes the last element of the array
fruits.pop();

// Checks if the array contains an element
fruits.includes("lima");

// Returns the index of the element
fruits.indexOf("sandia");

// Join the element of the array with the given separator
fruits.join("+"); // platano + mango + sandia + fresa + mandarina

// Return a portion of the array
fruits.slice(1, 3); // ['mango', 'sandia', 'fresa']

// Add elements to the array
fruits.splice(1, 0, "aguacate"); // ['platano', 'aguacate', 'mango', 'sandia']

console.log("Dates in JavaScript");

const date = new Date(); // 2023-01-22T09:44:48.175Z
date.getDate(); // Month´s date: 22
date.getMonth(); // Month with 0 index: 0
date.getFullYear(); // Year: 2023
date.getHours(); // Hours: 9
date.getMinutes(); // Minnutes: 44
date.getSeconds(); // Seconds: 48
date.getMilliseconds(); // Miliseconds: 175
date.getTime(); // Time: 1648101488176
date.setDate(23); // Set date: 23
date.setMonth(3); // Set month: 3
date.setFullYear(2024); // Set year: 2024
date.setHours(10); // Set hours: 10
date.setMinutes(45); // Set minutes: 45
date.setSeconds(49); // Set seconds: 49
date.setMilliseconds(176); // Set miliseconds: 176
date.setTime(1648101488176); // Set time: 1648101488176

console.log("Scope in JavaScript");

// Global scope
const PIE = 3.14;

function foo() {
  console.log(PIE); // 3.14

  // Function scope
  const age = 22;
  console.log(age); // 22
}

// Block scope
if (true) {
  const fullName = "John Doe";
  console.log(fullName); // John Doe
}

console.log(PIE); // 3.14
// console.log(age); // ReferenceError: age is not defined
// console.log(fullName); // ReferenceError: fullName is not defined

console.log("Objects in JavaScript");

const person = {
  name: "John",
  age: 22,
  gender: "male",
};

const jobObject = {
  job: "developer",
  salary: 1000,
};

// Assign object to another object
Object.assign(person, jobObject);
// { name: 'John', age: 22, gender: 'male', job: 'developer', salary: 1000 }
