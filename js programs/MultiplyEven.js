// multiply by 2 for even placed numbers arr=[1,2,3,4,5,6]
var numbers = [1,2,3,4,5,6];
for (var i=0; i<numbers.length; ++i)
    numbers[i] = i % 2 === 0 ? numbers[i]  : numbers[i]*2;
    console.log(numbers)