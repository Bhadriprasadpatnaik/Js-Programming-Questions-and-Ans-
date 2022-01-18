// program to trim a string
const string = '      Hello      ';
const result = string.trim();
console.log(result);

// using regex
// program to trim a string
function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const result = trimString('    Hello world    ');
console.log(result);