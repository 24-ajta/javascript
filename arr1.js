const ar1 = new Array("abil","abi","abel");
console.log(ar1.toString());

const fruits = [];
fruits.push("apple","banana","grapes");
console.log(fruits);
console.log(fruits.length);
console.log(Object.keys(fruits));


const arr3 = ["apple","banana","fruit"];
const arr4 = ["grapes","pomegranate","orange"];
const arr5 = arr3.concat(arr4);
console.log(arr5);

// const num1 = [[1]];
// const num2 = [2,[3]];
// const num3 = num1.concat(num2);
// console.log(num3);


const num1 = [[1]];
const num2 = [2, [3]];


const numbers = num1.concat(num2);

console.log(numbers);
num1[0].push(4);

console.log(numbers);

const obj1 = {1:2,3:4,5:6,7:8}
const obj2 = {11:12,13:14,15:16,17:18}
const obj3 = [0].concat(obj1,obj2);
console.log(obj3);

console.log([1,2].concat([3,4]));
console.log([1, ,2].concat([3,5]));


const ar7 = [1,2,3,4,5,6,7,8];
console.log(ar7.copyWithin(0,3,6));

