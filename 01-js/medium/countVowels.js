/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const strArr = str.toLocaleLowerCase().split('')

    const vowels = strArr.reduce((acc, char)  => {
      ['a', 'e', 'i', 'o', 'u'].includes(char) && acc++ ;
      return acc;
    }, 0)
    return vowels;
}

console.log(countVowels("Hello"))
console.log(countVowels("qwrty"))

module.exports = countVowels;