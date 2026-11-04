/**
 * @param {number[]} nums
 * @return {number}
 */
 let arr=[]
var thirdMax = function(nums) {
   let set=new Set(nums);
  arr=[...set]

  arr=arr.sort((a,b)=>b-a)
   if(arr.length>=3){
     return arr[2]
     }
   else {
      return arr.at(0)   
   }

};
