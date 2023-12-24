/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (!numbers.length) return -1;

  return numbers.sort((a, b) => b - a)[0];
}

console.log(findLargestElement([3, 7, 2, 9, 1]));
console.log(findLargestElement([3]));
console.log(findLargestElement([]));

module.exports = findLargestElement;
