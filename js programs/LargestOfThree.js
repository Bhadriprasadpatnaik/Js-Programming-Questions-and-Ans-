// program to find the largest among three numbers
const n1 = prompt("Enter first number: ");
const n2 = prompt("Enter second number: ");
const n3 = prompt("Enter third number: ");
let largest;

if(n1 >= n2 && n1 >= n3) {
    largest = n1;
}
else if (n2 >= n1 && n2 >= n3) {
    largest = n2;
}
else {
    largest = n3;
}
console.log("The largest number is " + largest);