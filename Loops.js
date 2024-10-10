const array = [1, 2, 3, 4, 5, 6];

console.log("Recorriendo el arreglo mediante FOR");
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}

console.log("Recorriendo el arreglo mediante WHILE");
index = 0;

while (index < array.length) {
  console.log(array[index]);
  index++;
}

console.log("Recorriendo el arreglo mediante EVERY");
// This method checks if all elements in an array pass a test (provided as a function)

const under_five = (x) => x < 10;

if (array.every(under_five)) {
  console.log("All are less than 5");
} else {
  console.log("At least one element is not less than 5");
}

console.log("Recorriendo el arreglo mediante FOR EACH");
// This method calls the provided function once for every array element in the order

array.forEach((item, index) => {
  console.log(item);
});

console.log("Recorriendo el arreglo mediante MAP");
// A map applies a function over every element and then returns the new array

square = (x) => Math.pow(x, 2);
squares = array.map(square);
console.log(array);
console.log(squares);

console.log("Recorriendo el arreglo mediante FILTER");
// This method creates a new array with array elements that passess a test

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter((value, index, array) => {
  return value > 18;
});
console.log(over18);

console.log("Recorriendo el arreglo mediante REDUCE");
// This method runs a function on each array element to produce (reduce it to) a single value
// The reduce() method does not reduce the original array

var sum = numbers.reduce((total, value, index, array) => {
  return total + value;
});
console.log(sum);
