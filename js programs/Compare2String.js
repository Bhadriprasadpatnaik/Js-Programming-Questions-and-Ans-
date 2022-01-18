// js program to perform string comparison
// using toUpperCase()

const string1 = prompt("enter a string");
const string2 =  prompt("enter a string");
const result = string1.toUpperCase() === string2.toUpperCase();
if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


// program to perform string comparison

const str1 = prompt("enter a string");
const str2 = prompt("enter a string");
const pattern = new RegExp(string1, "gi");// create regex
const res = pattern.test(string2)// compare the stings

if(res) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

const str="shubha";
const str3="mani";
const pattern1=new RegExp(str,"gi");//create regex
const n=pattern1.test(str3);
if(n){
    console.log("same")
}else{
    console.log("not same");
}