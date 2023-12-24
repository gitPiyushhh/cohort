/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLocaleLowerCase()
  str2 = str2.toLocaleLowerCase()
  return str1.split('').sort().join() == str2.split('').sort().join() // Directly checking the arrays will not work {checks reference}
}

console.log(isAnagram('Hello', 'olleH'))

module.exports = isAnagram;
