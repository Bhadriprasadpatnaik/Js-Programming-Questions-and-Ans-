// 1.In an array find out second highest number

function getSecondLargest(nums) {
    for(var j=1; j < nums.length; j++)
     {
        if(nums[j-1] !== nums[j])
        {
             return nums[j];
        }
     }
    }
    let a=getSecondLargest([2,4,7,9,5,1]);
    console.log(a);


   // 2. using builtin method
function secName(arr){
   var max=Math.max.apply(null,arr)//find largest
   arr.splice(arr.indexOf(max),1)//remove largest
   return Math.max.apply(null,arr)//return second largest
   }
   var array=[1,23,56,78,43,6];
   console.log(secName(array));