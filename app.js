let names = ["john", "bobo", "barry", "olga", "ben"];

console.log(names.length);
console.log(names[names.length - 1]);

const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);

console.log(allNames);

console.log(allNames.reverse());

// unshift - add to the beginning of the array
allNames.unshift("susy");
console.log(allNames);

// shift - remove the beginning of the array
allNames.shift();
console.log(allNames);

// push - add to the end of array
allNames.push("susy");
console.log(allNames);

// pop - remove the end of the array
allNames.pop();
console.log(allNames);

["banana", "onion", "pepper", "ben", "olga", "barry", "bobo", "john"];
// splice - method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const specificNames = allNames.splice(4, 2, "name1");
console.log(specificNames);
console.log(allNames);

const names2 = ["anna", "susy", "bob"];
const lastName = ["shakeandbake"];
let newArray = [];

for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
  newArray.push(`${names2[i]} ${lastName}`);
}

console.log(newArray);

// Function, return, if , arrays, for loop
const food = [100, 200, 300];
const gas = [10, 30, 14];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (total > 100) {
    console.log(`you are spending way too much`);
    return total;
  }
  console.log(`cool! you spend less than 100`);

  return total;
}
const foodTotal = calculateTotal(food);
const gasTotal = calculateTotal(gas);
const randomTotal = calculateTotal([1000, 2000, 3000]);

console.log({
  food: foodTotal,
  gas: gasTotal,
  random: randomTotal,
});

var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard",
};

// callback functions, higher order functions, functions as first class objects/citizens

//functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// higher order function - accepts another function as an argument or returns another function as a result

// callback function - passed to another function as an argument and executed inside that function

// function greet(time, name, myName) {
//   console.log(`Good ${time} ${name}, my name is ${myName}`);
// }
// greet("afternoon", "susan", "bobo");

function afternoon() {
  console.log(`Good Afternoon`);
}

function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}
greet("bobo", afternoon);
