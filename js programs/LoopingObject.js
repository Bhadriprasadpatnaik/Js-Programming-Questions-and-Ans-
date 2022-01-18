// using for in loop
const student={
    name:"shubha",
    company:"tyss",
};
// use for...in
for(let n in student){
    let value;
    value=student[n];
    console.log(n+":"+value);
}

// looping through object.entries()
const student={
    name:"shubha",
    company:"tyss",
};
// using object.entries()
// using for...of loop
for(let [key,value] of Object.entries(student)){
    console.log(key+"-"+value);
}