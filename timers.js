// var i =0;
// var x = setInterval(function(){
//     document.write("*");
//     i++;
//     if(i==10)
//     {
//         clearInterval(0)
//     }
// },1000)

// function abc(){
//     setTimeout(()=>{
//         alert("Welcome");
//     },3000)
// }
// abc();
// function abd(){
//     setTimeout(()=>{
//         alert("*");
//     },5000)
// }
// abd();


var i = 0;
var y = setInterval(function(){
    document.write(i+"*");
    i++;
},1000)




// var arr = [1,2,3,4];
// function callback(x){
//     return x+1;
// }
// callback();

// var Arr = [2,3,4,5]
// //  Callback function
// function myCallback(x){
//  return x+1;
// }
// // Don't border about .map() for now
// console.log(Arr.map(myCallback));
// callback and anonymous 