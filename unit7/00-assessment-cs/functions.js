// 1. Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = array => {
    let adds = false;

    array.forEach((item) => {
      for(let i = 0; i < array.length; i++) {
        if (array.indexOf(item) != i && +array[i] + +item === 0) {
          adds = true;
          break;
        };
      };
    });

    return adds;
};

// Time Complexity: O(n2)
// Space Complexity: O(1)

// 2. Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = word => {
    let unique = true;
    let array = word.replace(' ', '').split('');
    array.forEach((item) => {
      for(let i = 0; i < array.length; i++) {
        if (array.indexOf(item) != i && array[i] === item) {
          unique = false;
          break;
        };
      };
    });

    return unique;
};

// Time Complexity: O(n2)
// Space Complexity: O(1)

// 3. Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = sentence => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    sentence = sentence.toLowerCase().replaceAll(' ', '');

    for(let i = 0; i < alphabet.length; i++){
        if(sentence.indexOf(alphabet[i]) === -1){
          return false;
        };
    };

    return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// 4. Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = array => {
    let longestWordLength = 0;
    for (let i = 0; i < array.length; i++) {
        let wordLength = array[i].length;
        if (wordLength > longestWordLength) {
            longestWordLength = wordLength;
        };
    };
    return longestWordLength;
};

// Time Complexity: O(n)
// Space Complexity: O(n)