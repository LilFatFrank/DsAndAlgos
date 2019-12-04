// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const finalArray = [];
  let index = 0;

  while (index < array.length) {
    finalArray.push(array.slice(index, index + size));
    index = index + size;
  }

  return finalArray;
}

module.exports = chunk;

/* another method

for (const el of array) {
    const chunk = finalArray[finalArray.length - 1];
    if (!chunk || chunk.length === size) {
      finalArray.push([el]);
    } else {
      chunk.push(el);
    }
  }
  
*/
