/**
 * @param {number} x
 * @return {number}
 */

    var reverse = function(x) {
    let reverse = 0;

    while (x !== 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.trunc(x / 10);
    }

    if (reverse < -2147483648 || reverse > 2147483647) {
        return 0;
    }

    return reverse;
    
};
console.log(reverse(90500))