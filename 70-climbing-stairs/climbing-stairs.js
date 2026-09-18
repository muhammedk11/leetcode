/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let sum=0;
    let prev=0;
    let cur=1;

    for (i=1;i<=n;i++){
        sum=cur+prev;
        prev=cur;
        cur=sum;

    }
    return sum;

};
n=6;
console.log(climbStairs(n));