//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (str) => {
  const lowerStr = str.toLowerCase();
  const letters = new Set();
  for (const char of lowerStr) {
    if (char >= "a" && char <= "z") {
      letters.add(char);
    }
  }
  return letters.size === 26;
};

//time complexity here is O(n)
//space complexity here is O(n)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False
