// Filter NAmes Having more than 5 letters 

let arr=["aish","shubha","mani","mangai","afeeza","roja","chai"];
var x=arr.filter(y=>{
    if(y.length>5){
        return y;
    }   
})
console.log(x);