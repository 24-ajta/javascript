let num = "";
for(let i=0;i<3;i++){
    num = num + i
    console.log(num);
}
 x=5;
 while(x<5){
    x++;
 }    
    console.log(x);
let y = " ";
let z = 1;
do{
    z = z +1;
    y = y+z;
}
while(z<6){
    console.log(y);
}

arr = ["grapes",3,true,null,""];
for(i in arr){
    console.log(arr[i]);
}

let c = 20;
let d = 30;

d = c--;
console.log("c :",d);

let u = 30;
let v = 20;
v = u--;
console.log("v",v);

arr.forEach(function(value,index)
{
    console.log("value",value);
    console.log("index",index);
});


for(let m=0;m<5;m++){
    if(m==1){
        console.log("jkkj");
        continue;
    }
    if(m==4){
        break;
    }
    console.log(m);
}
 
function nww(){
    console.log("This is just something new");
}
nww();

function neww(a,b,c){
    console.log("This is just something");
    console.log("a :",a);
    console.log("b :",b);
    console.log("c :",c);
}
neww(10,20,30);


let p = 20;
let q = p;
p = 30;
console.log(q);

let obj={
    name:"anjitha",
    age:56
};
let obj1=obj;
obj.name = "nila";
console.log(obj1);


let myobj = {
    name:"anjitha",
    value:10
}
function callbyreference(objref){
    objref.value=20;
}
callbyreference(myobj);
console.log(myobj);

let r=20;
let s=r;
r=40;
function callbyvalue(t,u){
    console.log("r",t,"s",u);
}
callbyvalue(r,s);





function outerfunction(){
    let a = 20;
    function innerfunction(){
        function innerinnerfunction(){
            return a;
        }
        return innerinnerfunction;
    }
    
    return innerfunction;
}



let outerfunctioncall = outerfunction();
console.log("first call :",outerfunctioncall);
console.log("Second Call :",outerfunctioncall());
console.log("Final Call :",outerfunctioncall()());
