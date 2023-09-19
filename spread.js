var a=[1,2,3];
var a1=[...a];
console.log(a1);

var obj1={a:1,b:2,c:3};
var obj2={...obj1};
console.log(obj1);

var obj={Name:"Anjali",Class:10,Age:56};
var{Name,Class,Age}=obj;
console.log(obj);

var arr1=[1,2,3,4];
var[a,b,c,d]=arr1;
console.log(a,b,c,d);

var obj3 = {name:"Neela",position:"LD Clerk",Manager:{onduty:"Saahib"}};
var{name,position,Manager:{onduty}}=obj3;
console.log(name,position,onduty);

var arr6=[1,2,3,[4,5,6]];
var[a,b,c,[d,e,f]]=arr6;
console.log(a,b,c,d,e,f);

var arob = [1,2,3,{fname:"Alice",lname:"Bob",knownby:"Coders"}];
var[a,b,c,{fname,lname,knownby}]=arob;
console.log(a,b,c,fname,lname,knownby);

var obar={Fname:"Christy",Mname:"Susan",Lname:"Varghese",ary:[11,12,13]};
var{Fname,Mname,Lname,ary:[a,b,c]}=obar;
console.log(Fname,Mname,Lname,a,b,c);

var obb={Fname:"Christy",Mname:"Susan",Lname:"Varghese",ary:[11,12,13,{fname:"Alice",lname:"Bob",knownby:"Coders"}]};
var{Fname,Mname,Lname,ary:[a,b,c,{fname,lname,knownby}]}=obb;
console.log(Fname,Mname,Lname,a,b,c,fname,lname,knownby);

var arrr=[1,2,3,{fname:"Alice",lname:"Bob",knownby:"Coders",ary:[a,b,c]}];
var[a,b,c,{fname,lname,knownby,ary:[x,y,z]}]=arrr;
console.log(a,b,c,fname,lname,knownby,x,y,z);

/*---Destructing argument in function----*/

const marks = [1,2,3,4];
function fn([a,b,c,d]){
    console.log(a,b,c,d);
}
fn(marks);

const aray = {place:"Pandalam",code:678};
function ar({place,code}){
    console.log(place,code);
}
ar(aray);
