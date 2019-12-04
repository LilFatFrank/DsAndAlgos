// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let i of str) {
        if (charMap[i]) {
            charMap[i]++;
        } else {
            charMap[i] = 1;
        }

        /* another method
            charMap[i] = charMap[i] + 1 || 1;
        */
    }

    for(let i in charMap) {
        if(charMap[i] > max) {
            max = charMap[i];
            maxChar = i;
        }
    }

    return maxChar;
}

module.exports = maxChar;
