//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
const findLongestWord = (arr) => {
  let longest = 0;
  for (const word of arr) {
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return longest;
};

//time complexity is O(n)
//space complexity is O(1)

console.log(findLongestWord(["hi", "hello"]));
// -> 5
