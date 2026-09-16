/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=Number(String(x).split("").reverse().join(""));
    
    if(str===x){
        return true
    }
    else{
        return false
    }
    
};
console.log(isPalindrome(-121))