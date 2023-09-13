const a = ["Nile", "Yamuna", 10];
console.log("Array is :", a);
//

const fruits = ["apple", "orange", "pomegranate"];
console.log("Array Fruits :", fruits);

console.log("Array Length :", fruits.length);
console.log("Array join :", fruits.join(","));
console.log("Array at 0th index:", fruits[0]);
console.log("Value at index 1 :", fruits.indexOf("orange"));
console.log("Inserting grapes :", fruits.push("grapes"));
console.log(fruits);
console.log("Deletion of an element :", fruits.pop());
console.log(fruits);
console.log("Shift element :", fruits.shift()); //delete frist element in array
console.log("Slicing :", fruits.slice(0, 2));
