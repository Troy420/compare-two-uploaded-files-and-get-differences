// let names = ["john", "bobo", "barry", "olga", "ben"];

// console.log(names.length);
// console.log(names[names.length - 1]);

// const lastNames = ["pepper", "onion", "banana"];
// const allNames = names.concat(lastNames);

// console.log(allNames);

// console.log(allNames.reverse());

// // unshift - add to the beginning of the array
// allNames.unshift("susy");
// console.log(allNames);

// // shift - remove the beginning of the array
// allNames.shift();
// console.log(allNames);

// // push - add to the end of array
// allNames.push("susy");
// console.log(allNames);

// // pop - remove the end of the array
// allNames.pop();
// console.log(allNames);

// ["banana", "onion", "pepper", "ben", "olga", "barry", "bobo", "john"];
// // splice - method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// const specificNames = allNames.splice(4, 2, "name1");
// console.log(specificNames);
// console.log(allNames);

// const names2 = ["anna", "susy", "bob"];
// const lastName = ["shakeandbake"];
// let newArray = [];

// for (let i = 0; i < names2.length; i++) {
//   console.log(names2[i]);
//   newArray.push(`${names2[i]} ${lastName}`);
// }

// console.log(newArray);

// // Function, return, if , arrays, for loop
// const food = [100, 200, 300];
// const gas = [10, 30, 14];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }

//   if (total > 100) {
//     console.log(`you are spending way too much`);
//     return total;
//   }
//   console.log(`cool! you spend less than 100`);

//   return total;
// }
// const foodTotal = calculateTotal(food);
// const gasTotal = calculateTotal(gas);
// const randomTotal = calculateTotal([1000, 2000, 3000]);

// console.log({
//   food: foodTotal,
//   gas: gasTotal,
//   random: randomTotal,
// });

// var stooge = {
//   "first-name": "Jerome",
//   "last-name": "Howard",
// };

// // callback functions, higher order functions, functions as first class objects/citizens

// //functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// // higher order function - accepts another function as an argument or returns another function as a result

// // callback function - passed to another function as an argument and executed inside that function

// // function greet(time, name, myName) {
// //   console.log(`Good ${time} ${name}, my name is ${myName}`);
// // }
// // greet("afternoon", "susan", "bobo");

// function afternoon(name) {
//   return `Good Afternoon ${name}`;
// }

// function greet(name, thisIsAfternoonFunction) {
//   console.log(`${thisIsAfternoonFunction(name)}, how's your day?`);
// }
// greet("bobo", afternoon);

// const people = [
//   { name: "bobo", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
//   { name: "susy", age: 30, position: "the boss", id: 3, salary: 400 },
//   { name: "anna", age: 35, position: "another boss", id: 4, salary: 500 },
// ];

// const ages = people.map(function (referenceOfPeopleArray) {
//   return referenceOfPeopleArray.age + 20;
// });

// const newPeople = people.map(function (referenceOfPeopleArray) {
//   return {
//     firstName: referenceOfPeopleArray.name.toUpperCase(),
//     oldAge:
//       referenceOfPeopleArray.age > 20
//         ? referenceOfPeopleArray.age
//         : "less than 20",
//   };
// });

// const names3 = people.map(function (referenceOfPeopleArray) {
//   return `<h1>${referenceOfPeopleArray.name}</h1>`;
// });

// console.log(names3);
// document.body.innerHTML = names3.join("");
// console.log(newPeople);

// // Filter - return new array
// const youngPeople = people.filter(function (person) {
//   return person.age <= 25;
// });

// const developers = people.filter(function (person) {
//   return person.position === "developer";
// });

// console.log(youngPeople);
// console.log(developers);

// // Find - return single instance and return first match
// const names4 = ["bob", "peter", "susy"];

// console.log(
//   names4.find(function (name) {
//     return name === "bob";
//   })
// );

// const person1 = people.find(function (person) {
//   return person.id === 3;
// });

// console.log(person1.name);

// const person2 = people.filter(function (person) {
//   return person.id === 3;
// });

// console.log(person2[0].name);

// // reduce
// // iterates, callback function
// // reduces to a single value - number, array, object
// // 1 parameter ('sum') - total of all calculations
// // 2 parameter ('currItem') - current iteration/value

// const total = people.reduce(function (sum, currItem) {
//   console.log(`sum ${sum}`);
//   console.log(`current money : ${currItem.salary}`);
//   return (sum += currItem.salary);
// }, 0); // initial value

// console.log(total);


// const result = document.querySelector('#result');
// const heading2 = document.querySelector('.head2');

// heading2.remove();