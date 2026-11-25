/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let move=moves.split("");
    let x=0,y=0
    
    for(let key of move){
        if(key=="U")
          x++
        else if(key=="D")
         x--
        else if(key=="R")
         y++
        else 
         y--
    }
   
    return (x === 0 && y === 0) ? true : false;    
};