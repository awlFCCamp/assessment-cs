//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
const addToZero = (arr) => {
  const numsSet = new Set();
  for (const num of arr) {
    if (numsSet.has(-num)) return true;

    numsSet.add(num);
  }
  return false;
};

console.log(addToZero([])); // -> False

console.log(addToZero([1])); // -> False

console.log(addToZero([1, 2, 3])); // -> False

console.log(addToZero([1, 2, 3, -2])); // -> True)

//time complexity is O(n)
//space complexity is O(n)
