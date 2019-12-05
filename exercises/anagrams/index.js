// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

/* solution 1:
function anagrams(stringA, stringB) {

    const objectA = buildCharMaps(stringA);
    const objectB = buildCharMaps(stringB);

    if (((Object.keys(objectA)).length === (Object.keys(objectB)).length)) {
        for (let i in objectA) {
            if (objectA.hasOwnProperty(i)) {
                if (objectA[i] !== objectB[i]) {
                    return false;
                }
            }
        }
        for (let i in objectB) {
            if (objectB.hasOwnProperty(i)) {
                if (objectA[i] !== objectB[i]) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return false;
    }

}

function buildCharMaps(string) {

    const stringObj = {};

    for ( const i of string.replace(/[^\w]/g, '').toLowerCase()) {
        stringObj[i] = stringObj[i] + 1 || 1;
    }

    return stringObj;

}
*/
