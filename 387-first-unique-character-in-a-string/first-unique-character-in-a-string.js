/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   for(let key of s) {
    if(s.indexOf(key)==s.lastIndexOf(key)){
        return(s.indexOf(key))
    }
   }
   return -1
};