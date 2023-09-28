// function Button(name){
//     this.button = document.createElement('button')
//     this.button.innerHTML = name;
//     document.body.appendChild(this.button);
// }
// Button.prototype.onClick=function(fn){
//     this.button.onclick=fn;
// }
// let btn = new Button('Click Here');
// console.log("This Button  ",btn);

// btn.onClick(function (){
//     console.log("Button Clicked")
// })


// function button1(name){
//     Button.call(this,name)
// }

// button1.prototype = Object.create(Button.prototype);

// let btn1 = new button1('Click button 2');
// console.log("Clicked button 2 ",btn1)

// button1.prototype.onClick = function(fn){
//     Button.prototype.onClick.call(this,()=>{
//         this.button.style.background = "orange";
//         fn();
//     })
   
// }


// btn1.onClick(function(){
//     console.log("Button Clicked...")
    
// })


console.log("Start");
fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
.then(json => console.log(json))
console.log("End");
