// Exercise 1:
// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

function destructureExample(obj, arr) {
  const { name, age } = obj;
  const [val1, , val2] = arr;
  return { name, age, val1, val2 };
}
const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];
const exercise1 = destructureExample(obj, arr);
console.log(exercise1);

// Exercise 2:
// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
const exercise2 = sumNumbers(1, 2, 3, 4, 5);
console.log(exercise2);

// Exercise 3:
//  Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."

function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}
const exercise3 = createGreeting("Alice");
console.log(exercise3);

// Exercise 4:
// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

function isEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

const evenOrOdd = isEven(5);
console.log(evenOrOdd);

// Exercise 5:
// Convert the following function to an arrow function:

const multiply = (a, b) => a * b;

// Exercise 6:
// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

function getLargestNumber(a, b) {
  return a > b ? a : b;
}
const largeNum = getLargestNumber(10, 5);
console.log(largeNum);

// Exercise 7:
// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

const address = { street: "123 Main St", country: "USA", city: "New York" };
function getAddressCity(address) {
  return address?.city ?? "Unknown";
}
const getcity = getAddressCity(address);
console.log(getcity);

// Exercise 8:
// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}
const doubleNumber = doubleNumbers([1, 2, 3, 8, 5]);
console.log(doubleNumber);

// Exercise 9:
// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

const evenArr = filterEvenNumbers([1, 2, 6, 4, 5]);
console.log(evenArr);

// Exercise 10:
// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
const arraySum = sumArray([1, 2, 3, 4, 5]);
console.log(arraySum);

// Exercise 11:
// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}
const numberSort = sortNumbers([5, 2, 8, 1, 4]);
console.log(numberSort);
