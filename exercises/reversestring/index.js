// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /* return str.split('').reduce((rev, char) => char + rev, ''); */
    let rev = ''
    for (const i of str) {
        if (i) {
            rev = i + rev;
        }
    }
    return rev;
}

reverse('asdf');

module.exports = reverse;

// solution 1

/* function reverse(str) {
    return str.split('').reverse().join('');
} */

//solution 2 

/* let reversed = '';
	while(str) {
		reversed = character + reversed;
    }
    return reversed; */
    