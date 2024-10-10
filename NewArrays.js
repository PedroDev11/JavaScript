// FindLast

const numbers = [10, 20, 30, 33, 100, 2];

// const foundNumber = numbers.find((x) => x === 100);

/* Recorre de izquierda a derecha
const foundNumber = numbers.find((x) => {
  return x === 100;
}); */

// Recorre de derecha a izquierda
const foundNumber = numbers.findLast((x) => {
  return x === 100;
});

console.log(foundNumber);

// FindLastIndex

/* Recorre los indices de izquierda a derecha
const foundIndex = numbers.findIndex((x) => {
  return x === 100;
}); */

// Recorre los indidces de derecha a izquierda
const foundIndex = numbers.findLastIndex((x) => {
  return x === 100;
});

console.log(foundIndex);

// ToReversed
const number = [1, 2, 3, 4, 5];

// Modifica el arreglo óriginal, esta mutando el arreglo
// number.reverse();

// Crea un nuevo arreglo
const reversed = number.toReversed();

console.log(number);
console.log(reversed);

// ToSort

/* Devuelve el arreglo ordenado pero lo modifica el arreglo principal
const sortedNumbers = numbers.sort((a, b) => a - b);*/

const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers);

// ToSplice
const task = ["task1", "task2", "task3"];

/* Desde donde va a empezar a quitar, devuelve el valor que a quitado y modifica el arreglo óriginal
const spliced = task.splice(1, 1); // task2 */

// Crea un nuevo arreglo, la idea es no mutar el arreglo
const spliced = task.toSpliced(1, 1);
console.log(spliced);

// With

const flowers = ["Lily", "Rosa", "Iris", "Lotus"];

// Esto esta mutando el arreglo
// flowers[4] = "Fazt";

// Crea un nuevo arreglo
const updatedFlowers = flowers.with(4, "Fazt");

console.log(flowers);
console.log(updatedFlowers);
