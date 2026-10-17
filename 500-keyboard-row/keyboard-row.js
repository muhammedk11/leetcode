/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let result = [];

    for (let word of words) {
        let letters = word.toLowerCase().split("");

        if (
            letters.every((letter) => row1.includes(letter)) ||
            letters.every((letter) => row2.includes(letter)) ||
            letters.every((letter) => row3.includes(letter))
        ) {
            result.push(word);
        }
    }

    return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
