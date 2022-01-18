// program to check if a number is prime or not
var num=prompt("enter a number");
if(num==1){
    console.log("its a composite number")
}else{
var count=0;
for(var i=2;i<num/2;i++){
    if(num%i==0){
        count++;
        break;
    }
}
 if(count>0&&count==1){
    console.log(`${num} is not a prime`);
}else{
    console.log(`${num} is a prime`);
}}