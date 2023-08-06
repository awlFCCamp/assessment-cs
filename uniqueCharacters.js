//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (str) => {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
};

//time complexity here is O(n)
//space complexity here is O(min(n,k)) n is the length of the string, k is the number of the unqiue characters of the string

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False
