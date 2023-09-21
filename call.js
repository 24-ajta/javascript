let obj = {
    firstName : "Rahul",
    lastName : "R",
}

let printFirstAndLast = function (age, marks) {
    console.log("First name :",this.firstName,"lastName : ", this.lastName, "age : ", age, "marks : ", marks);
}

// printFirstAndLast();
// printFirstAndLast.call(obj,23, 100);

// printFirstAndLast.apply(obj,[23,100]);

let result = printFirstAndLast.bind(obj);
console.log("Result : ", result);
result(23,100);

//For loops
for(let i = 0; i<10; i++) {
    console.log(i);
}

//Nested for loops
let row = 5;
let col = 5;

for(let i = 0; i<row; i++) {
    let star = '';
    for(let j = 0; j<col; j++) {
        star+="*";
    }
    console.log(star);
}