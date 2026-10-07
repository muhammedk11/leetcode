/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let key of nums){
        if (nums.lastIndexOf(key)==nums.indexOf(key)){
            return key
        }
        
    }
    
};