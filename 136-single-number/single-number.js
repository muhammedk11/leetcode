/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let result = nums.filter((value) => {
    return nums.indexOf(value) === nums.lastIndexOf(value);
});
return Number(result);
    
};
let arr=[1,2,2,3,3,4,4]
console.log(singleNumber(arr));
