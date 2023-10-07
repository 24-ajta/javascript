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

let regexp =/^([a-zA-Z ])/;

function onChange(arg){
    let result = validate(arg.value);
    let label = document.getElementById("label");
    label.innerHTML = result;
}

function validate(value){

    let isValid = regexp.test(value);
    console.log("isvalid",isValid);
    if(isValid){
        return "";
    }else{
        return "invalid username";
    }
}