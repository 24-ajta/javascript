const obj = {
  FirstName: "John",
  lastname: "Derek",
  age: 56,
};
console.log("Information :", obj);
console.log("Name :", obj.FirstName);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
console.log("Replace name :", (obj.age = 36));

const arr = [
  { name: "Shari", age: 20, place: "pandalam" },
  { name: "Shalu", age: 23, place: "ernakulam" },
];
console.log("Objects in array :", arr);
console.log(JSON.stringify(arr));
console.log(JSON.parse(JSON.stringify(arr)));
console.log("hello");
console.info("This is warning");
