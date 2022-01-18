// program to empty an array
function emptyArray(arr) {
    arr = [];
        return arr;
}
const array = [1, 2 ,3];
console.log(array);
const result = emptyArray(array);
console.log(result);

// using splice
function emptyArray(arr) {
    arr.splice(0, arr.length);
      return arr;
}

const array = [1, 2 ,3];
console.log(array);
const result = emptyArray(array);
console.log(result);

// setting length to 0
// program to append an object to an array

function emptyArray(arr) {
    arr.splice(0, arr.length);
    return arr;
}
const array = [1, 2 ,3];
console.log(array);
const result = emptyArray(array);
console.log(result);