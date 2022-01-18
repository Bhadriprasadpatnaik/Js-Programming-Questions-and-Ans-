
//remove duplicate elements from array
let array=["apple","banana","chocolate","apple","banana"];
var uniqueArray=[...new Set(array)];//set method is used
console.log(uniqueArray);

// withoutBuiltin
// remove duplicate  without using built in methods
let city=["ahamadabad","bangalore","chennai","ahamadabad","bangalore"]
let unique_city = [];
city.forEach((c) => {
  if (!unique_city.includes(c)) {
    unique_city.push(c);
  }
});
console.log(...[unique_city]);