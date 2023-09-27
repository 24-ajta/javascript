class Button {
    constructor (name){
        this.button=document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    set Width(width){
        this.button.style.width = width +"px";
    }
    set Height(height){
        this.button.style.height = height + "px";
    }
    get Width(){
        return this.button.style.width ;
    }
    get Height(){
        return parseInt(this.button.style.height);
    }

onClick(fn){
    this.button.onclick = function(){
        this.button.onclick=fn;
        this.button.style.background = "green";
    }.bind(this);
}

}

let mybtn = new Button('Click me');
mybtn.Width=100;
mybtn.Height=200;
console.log("Width :",mybtn.Width)
console.log("Height :",mybtn.Height)
mybtn.onClick(function(){
    console.log("Button Clicked...")
})



/*-----Without Using Inheritance----*/

class yellowButton {
    constructor (name){
        this.button=document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    set Width(width){
        this.button.style.width = width +"px";
    }
    set Height(height){
        this.button.style.height = height + "px";
    }
    get Width(){
        return this.button.style.width ;
    }
    get Height(){
        return parseInt(this.button.style.height);
    }

onClick(fn){
    this.button.onclick = function(){
        this.button.onclick=fn;
        this.button.style.background = "yellow";
    }.bind(this);
}

}

let mybttn = new yellowButton('Click');
mybttn.Width=100;
mybttn.Height=200;
console.log("Width :",mybttn.Width)
console.log("Height :",mybttn.Height)
mybttn.onClick(function(){
    console.log("Button Clicked...")
})




/*------Using Inheritance------*/


class greenbtn extends Button{
    constructor(name){
        super(name);
    }


    onClick(fn){
        this.button.onclick = function(){
            this.button.onclick=fn;
            this.button.style.background = "green";
        }.bind(this);
    }
}
let grnbtn = new greenbtn("Green Button");
grnbtn.onClick(function(){
    console.log("Green Coloured")
})