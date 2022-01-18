// program to find the factorial of a number

let n =prompt('Enter a positive integer: ');
if (n < 0) {
    console.log('No negative number for factorial number');
}
else if (n === 0) {
    console.log(`The factorial of ${n} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(`The factorial of ${n} is ${fact}.`);
}