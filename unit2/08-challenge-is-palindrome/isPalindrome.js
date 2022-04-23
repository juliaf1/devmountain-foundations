// Write your code below

const isPalindrome = word => {
  let reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
};

console.log(isPalindrome('noon'));
console.log(isPalindrome('hello'));