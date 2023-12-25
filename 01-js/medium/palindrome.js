/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLocaleLowerCase();
  return str.split('').reverse('').join('') === str ? true : false
}

console.log(isPalindrome('hello'))
console.log(isPalindrome('nan'))

module.exports = isPalindrome;
