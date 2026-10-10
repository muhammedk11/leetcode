/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
let x=word.split("").slice(1).join("")

    if (word==word.toUpperCase()) {
             return true

     }else if(word==word.toLowerCase()){
            return true
     }else if(word[0]==word[0].toUpperCase()&&x==x.toLowerCase()){
             return true
     }
     else{
        return false
     }
}  
