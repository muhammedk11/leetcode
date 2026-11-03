/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let plate = licensePlate.toLowerCase().replace(/[^a-z]/g, "");

    let result = "";

    for (let word of words) {
        let temp = plate;

        for (let char of word.toLowerCase()) {
            temp = temp.replace(char, "");
        }

        if (temp.length === 0) {
            if (result === "" || word.length < result.length) {
                result = word;
            }
        }
    }

    return result;
};