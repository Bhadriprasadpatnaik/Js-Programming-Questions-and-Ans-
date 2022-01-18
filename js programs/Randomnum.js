// generate a random number
const a = Math.round(Math.random(10-1)+1);
console.log(a);

// program to get a random item from an array
const array1 = [1, 'hello', 5, 8];
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];// get random item
    return item;
}
const result = getRandomItem(array1);
console.log(result);
