// program to merge property of two objects
const person = {
    name: 'shubha',
    age:26
}
const student = {
    gender: 'female'
}
const newObj=Object.assign(person,student);

// using spread
const newObj1={...person,...student};
console.log(newObj);
console.log(newObj1);