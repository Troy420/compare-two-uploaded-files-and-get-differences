// let names = ["john", "bobo", "barry", "olga", "ben"];

// console.log(names.length);
// console.log(names[names.length - 1]);

// const lastNames = ["pepper", "onion", "banana"];
// const allNames = names.concat(lastNames);

// console.log(allNames);

// console.log(allNames.reverse());

// unshift - add to the beginning of the array
// allNames.unshift("susy");
// console.log(allNames);

//shift - remove the beginning of the array
// allNames.shift();
// console.log(allNames);

//push - add to the end of array
// allNames.push("susy");
// console.log(allNames);

//pop - remove the end of the array
// allNames.pop();
// console.log(allNames);
// [ "banana", "onion", "pepper", "ben", "olga", "barry", "bobo", "john" ]
//splice - method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// const specificNames = allNames.splice(4, 2, "name1");
// console.log(specificNames);
// console.log(allNames);

// const names = ["anna", "susy", "bob"];
// const lastName = ["shakeandbake"];
// let newArray = [];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
//   newArray.push(`${names[i]} ${lastName}`);
// }

// console.log(newArray);

// Function, return, if , arrays, for loop
const food = [100, 200, 300];
const gas = [10, 30, 14];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
const foodTotal = calculateTotal(food);
const gasTotal = calculateTotal(gas);
const randomTotal = calculateTotal([1000, 2000, 3000]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
