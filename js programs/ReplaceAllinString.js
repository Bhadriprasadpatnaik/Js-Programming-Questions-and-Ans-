// program to replace all occurrence of a string
// regex expression
const string = 'Mr Red has a red house and a red car';
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);

// using builtin method
// program to replace all occurrence of a string
const string = 'Mr red has a red house and a red car';
const result = string.split('red').join('blue');
console.log(result);