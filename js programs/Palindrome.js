// reverse a string without using reverse method
let x=prompt("enter the string");  
function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r =r+str[i];
    }
    if(str===r){
        console.log("its a palindrome");
    }else{
        console.log("its not a palindrome");
    }
  }
  reverse1("x");

  // using builtin method
let string="madams"
function checkPalindrome(str){
    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();
  
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
checkPalindrome(string)