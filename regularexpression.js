// const regexp = /am/;

// const regexp = /[sleep play]ing/  check whether sleep or play is there before ing

// const regexp = /S/i;     Case Sensitive So flag i

// const regexp = /[a-z 0-9]at/i

// const regexp = /^the/i;  '^'Check whether the string starts with that particular group of words

// const regexp = /kidding$/i;   '$'Check whether the string ends with that particular group of words

// const regexp = /here$/im;  Check whether the string ends with this particular group of words in case of multiple lines . Here "m" is used to indicate the string has multiple lines.

// const regexp = /meats?$/i;  "?" checks whether the string ends with the last letter of the given condition .The last letter is optional.

// const regexp = /meat(ss)?$/i; here "?" checks whether the string ends with the particular group of words within the paranthesis.it is also optional

// const regexp = /meat*$/i;

// const regexp = /meats+$/i; "+" => the last word should ends with atleast one letter in the string .

// const regexp = /meat.$/i; the last word will ends with only one particular letter or number in the string

// let str1 = "I am sleeping see you tomorrow";
// let str2 = "I am playing near the sea";
// let str3 = "How will you manage this?"
// let str4 = "The cat eat meats"
// let str5 = `
// come here
// sit here and play`

// const result = regexp.test(str4);
// console.log("Result will be:",result);

// let regexp =/^([a-zA-Z ])/;

// function onChange(arg){
//     let result = validate(arg.value);
//     let label = document.getElementById("label");
//     label.innerHTML = result;
// }

// function validate(value){

//     let isValid = regexp.test(value);
//     console.log("isvalid",isValid);
//     if(isValid){
//         return "";
//     }else{
//         return "invalid username";
//     }
// }

let str = "hello";

// const regexp = /^([kjm])/i;
// const regexp =/l{2}o$/i;   "{}" o should be there atleast after two "l"

// const regexp =/l{2,4}o$/i;  "{<}" o should be there atleast after 2 to 4 'o'

// const regexp =/Hel{2}o$/i;  string starts with hel and l occurs 2 times before o

// const regexp =/Hel{2}o$/i;  string starts with hel and l occurs 2 times to 4 before o

// const regexp =/Hel{2,}o$/i; "," atleast two l's are needed otherwise it will be false

// \-escape character 

// const regexp =/\d/i; if any digits it will be true

// const regexp =/\D/i; if any non-digits along with digit or non-digits itself  it will be true.if only digits are present it will be false

// const regexp = /\./i; "\" before . is used to indicate if dot is present it will be true otherwise false . itself will print in case there is no dot in that particular group of words

// const regexp = /\$/i; "\" before $ is used to indicate if $ is present it will be true otherwise false


// const result = regexp.test(str);
// console.log(result);
//  let regexp =/^\d{2}-\d{2}-\d{4}$/i;
const regexp = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})/

function onChange(arg){
    let result = validate(arg.value);
    let label = document.getElementById("label");
    label.innerHTML = result;
}

function validate(value){

    let isValid = regexp.test(value);
    
    if(isValid){
        return "";
    }else{
        return "invalid username";
    }
}