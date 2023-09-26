class Student{
    mark;
    section;
    dob;

    constructor(Mark,Section,yob){
        this.mark=Mark;
        this.section=Section
        this.yob=yob;
    }

    printmark(){
        console.log("Mark :",this.mark);
    }
    printsection(){
        console.log("Section :",this.section);
    }
    printyob(){
        console.log("Date Of Birth ",this.yob);
    }
    printage(){
        return new Date().getFullYear() - this.yob;
    }
    static printminmark(...args){
        let arr = args.map((e)=>{
            return e.mark;
        })
    
    console.log("Minimum marks :",Math.min(...arr));
    };

}
let obj1 = new Student("20","A",1970);
let obj2 = new Student("21","A",1980);
let obj3 = new Student("23","A",1990);

console.log(obj1);
console.log(obj1.mark);
console.log(obj1.yob);
console.log("Current Age ",obj1.printage());



// Student.printminmark = function(...args){
//     let arr = args.map((e)=>{
//         return e.mark;
//     })

// console.log("Minimum marks :",Math.min(...arr));
// };
Student.printminmark(obj1,obj2,obj3)
