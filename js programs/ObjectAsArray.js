// extract using map
// program to extract value as an array from an array of objects

function extractValue(arr, prop) {
    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;
}
const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);



function extractValue(arr,prop){
    let extractedValue=arr.map(item=>item.prop);
    return extractedValue;
}
const objArray3=[{h:2,g:3},{h:5,g:8}];
const n=extractValue(objArray3,'h');
console.log(n);



// program to extract value as an array from an array of objects
function extractValue(arr, prop) {
    let extractedValue = [];
    for (let i=0; i < arr.length ; ++i) {
        // extract value from property
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}
const objArray1 = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// passing an array of objects and property 'a' to extract
const res = extractValue(objArray1, 'b');
console.log(res );