/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
   
    let arr=s.trim().split(" ");
   number=arr.slice(-1).join("").length
   return number
};
 s="hello world";

