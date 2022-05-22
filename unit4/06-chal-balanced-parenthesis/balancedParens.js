// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."
let sample5 = ")(U)(nbalanced()"

// Write your solution below:
const hasBalancedParens = string => {
  string = string.replaceAll(' ', '').split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      for (let j = i + 1; j < string.length; j++) {
        if (string[j] === ')') {
          string.splice(j, 1);
          string.splice(i, 1);
          break;
        };
      };
    };
  };
  return string.includes('(') || string.includes(')');
};

console.log(hasBalancedParens(sample1));
console.log(hasBalancedParens(sample2));
console.log(hasBalancedParens(sample3));
console.log(hasBalancedParens(sample4));
console.log(hasBalancedParens(sample5));