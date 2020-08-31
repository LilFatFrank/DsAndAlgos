// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    /* return str.split('').every((char, index) => char === str[str.length - 1 - index]); */
    let rev='';
    for (const i of str) {
        if (i) {
            rev = i + rev;
        }
    }
    return str === rev;
}

module.exports = palindrome;

//solution 1 

/* const reversed = str.split('').reverse().join('');
    return reversed === str; */
