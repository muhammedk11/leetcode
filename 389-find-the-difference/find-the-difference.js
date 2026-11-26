var findTheDifference = function(s, t) {
    let freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of t) {
        if (!freq[char]) {
            return char;
        }

        freq[char]--;
    }
};