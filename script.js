console.log("Hello World");


let str="   Samplemobmob  ";
let str_length = str.length;
console.log("string_length:",str.length);


let str_sliced = str.slice(1,4);
console.log("sliced_string:",str_sliced);


let str_sliced1 = str.slice(1,-3);
console.log("Sliced string :",str_sliced1);


let substring = str.substring(2);
console.log("substring :",substring);


let substring1 = str.substring(1,4);
console.log("substring1 :",substring1);


let substr3 = str.substring(-2);
console.log("substr3 :",substr3);


let str_replace = str.replace("mob","not");
console.log("str_replace : ",str_replace);


// let str5 = "hello";
let str7 = str.concat("world");
console.log("Concatenated String is :",str7);


let str_replaceAll = str.replaceAll("mob","not");
console.log("str_replaceAll : ",str_replaceAll);


let str_trimstart = str.trimStart();
console.log("str_trimstart :",str_trimstart);


let str_trimend = str.trimEnd();
console.log("str_trimend :",str_trimend);


let str_trim = str.trim();
console.log("str_trim :",str_trim);


let str1 = "wel,come";
let str_charindex = str1.charAt(0);
console.log("strcharindex : ",str_charindex);


let strcode = str1.charCodeAt(2);
console.log("strcode : ",strcode);


let str_indeof = str1.indexOf("l");
console.log("strindexof : ", str_indeof);


let strindexchar = str1.indexOf("l",0);
console.log("stringcharindex : ",strindexchar);


let str_start = str1.startsWith("Hello");
console.log("String starts with :",str_start);


let str_starts = str1.startsWith("wel");
console.log("String starts with :",str_starts);


let str_ends = str1.endsWith("e");
console.log("String ends with :",str_ends);


let str_split = str1.split(',');
console.log("Splitted string :",str_split);


let str_split_join = str_split.join();
console.log("Joined string :",str_split_join);


//changed

