// program to count the number of keys/properties in an object
// using for...in loop
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};
let count = 0;
for(let key in student) {
    ++count;
}
console.log(count);

// using object.keys();
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};
const res=Object.keys(student).length
console.log(res);