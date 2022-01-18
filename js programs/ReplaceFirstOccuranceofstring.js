// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';
const newText = string.replace('red', 'blue');
console.log(newText);

// using regex method
// program to replace a character of a string
const string = 'Mr Red has a red house and a red car';
const regex = /red/g;
// replace the characters
const newText = string.replace(regex, 'blue');
console.log(newText);