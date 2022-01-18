// creating object
var obj={
    name:"shubha",
    company:"tyss",
}
// adding one property to this object
//using dot operator
obj.age=23;
// using square bracket
obj['salary']=20000;
console.log(obj);

// using new keyword
var person=new Object();
person.name="shubha";
person.company="tyss";
console.log(person);

// object.define property
var person={
    key:"21",
    name:"shubha",
}
var fre=Object.defineProperty(person,"name",{vaue:"29"})
console.log(fre);


// using spread operator
obj={...obj,key:"hii",key1:"hello"}
console.log(obj);


// array of object
let obj=[{
    name:"shubha",
    company:"tyss"
},{
    name:"mani",
    company:"tyss"
}]
// to fetch first object
console.log(obj[0]);
// to update
console.log(obj[0].name="shubhangini");
// to delete
console.log(delete obj[0].name);