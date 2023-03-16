// Array methods: map, filter, find, findIndex, every, forEach, reduce,

// Part One 1: map and filter

const arrayOne = [
  false,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
  false,
  false,
];

// const newMapArr = arrayOne.map((element, index, arr) => index + 1);
// const newFilterArr = arrayOne.filter((element, index, arr) => !element);

// Part Two: find, findIndex, forEach

// const arrayTwo = [1, 2, 3, 4, 5, 6, "test"];

// const isFinded = arrayTwo.find((element, index, arr) => element === "test1");
// const isFinded = arrayTwo.findIndex(
//   (element, index, arr) => element === "test"
// );

// let isTest = false;
// const isFinded = arrayTwo.forEach((element, index, arr) => {
//   if (element === "test1") {
//     isTest = true;
//   }
// });

// Part Three: every, some, reduce

const arrayThree = [1, 2, 3, 4, 5, 6, 7];

// const isAvaible = arrayThree.every(
//   (element, index, arr) => typeof element === "number"
// );
// const isAvaible = arrayThree.some(
//   (element, index, arr) => typeof element === "string"
// );

// const total = arrayThree.reduce((sum, currentValue, index, arr) => {
//     const addCount = currentValue + sum;
//     return addCount;
//   }, 0);

// const friends = [
//   { name: "Ani", age: 28 },
//   { name: "Suresh", age: 25 },
//   { name: "Ramesh", age: 25 },
//   { name: "Amit", age: 28 },
//   { name: "Sumit", age: 23 },
// ];

// const groupByAge = friends.reduce((groupData, currentValue, index, arr) => {
//   const key = currentValue["age"];
//   const currentData = groupData[key] ?? [];

//   return { ...groupData, [key]: [...currentData, currentValue] };
// }, {});
// console.log("groupByAge", groupByAge);

// Part Four: Pop, Push, Shift, Unshift, slice, splice, includes

const arrayFour = ["one", "two", "three", "four", "five"];

// console.log(arrayFour.unshift("six", "seven"), arrayFour);
// console.log(arrayFour.splice(1, 2, "zero", "zero1", "zero2"), arrayFour);

console.log(arrayFour.join("-"));
