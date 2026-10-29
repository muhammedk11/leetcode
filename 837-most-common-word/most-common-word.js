/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase();

    let words = paragraph.match(/[a-z]+/g);

    let count = {};

    for (let word of words) {
        if (!banned.includes(word)) {
            count[word] = (count[word] || 0) + 1;
        }
    }

    let maxCount = 0;
    let result = "";

    for (let word in count) {
        if (count[word] > maxCount) {
            maxCount = count[word];
            result = word;
        }
    }

    return result;
};

