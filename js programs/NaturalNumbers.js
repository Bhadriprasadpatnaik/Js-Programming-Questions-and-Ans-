// program to display the sum of natural numbers
// positive integers like 1,2,3...are natural numbers
const number = prompt('Enter a positive integer: ');
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum =sum + i;
}

console.log('The sum of natural numbers:', sum);