const arrray = [
  { name: "Anjitha", Place: "Pandalam", Code: 6 },
  { name: "Anjana", Place: "Ernakulam", Code: 7 },
  { name: "Anjali", Place: "Kozhikode", Code: 8 },
];
console.log(arrray);

/*-----foreach----*/

const ary = arrray.forEach((item,index)=>{
    console.log(item);
   

})

/*-----find----*/

const arry = arrray.find((item)=>{
    
    return item.name==="Anjitha"
    
})
console.log(arry);

/*-----Filter----*/

const arryy = arrray.filter((item,index)=>{
    return item.Code<8;
})
console.log(arryy);

/*-----Map----*/

const x =arrray.map((item)=>{
    return item.name;
});
console.log(x);

/*-----Reduce----*/

const y = arrray.reduce((total,item)=>{
    return total+item.Code;
},0);
console.log(y);

/*---this---*/

var obj={a:1,b:2,c:function(){
    console.log("hello");
}};
obj.c();



var obj={a:1,b:2,c:function(){
    console.log(this);
}};
obj.c();



var obj={a:1,b:2,c:function(){
    console.log(this);
}};
var a=obj.c;
a();



var obj={a:1,b:2,c:()=>{
    console.log(this);
}};
obj.c();

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
// console.log(myFunc);
  