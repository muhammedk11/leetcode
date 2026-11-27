/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    for(let n=0;n<=nums.length;n++){
        if(!nums.includes(n))
        return n
    } 
};