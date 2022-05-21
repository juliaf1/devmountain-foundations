const hasMoreVowels = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const wordArray = word.toLowerCase().split('');
  const vowelsCount = wordArray.filter(letter => vowels.includes(letter)).length
  return vowelsCount > (word.length / 2);
};

console.log(hasMoreVowels('mice'));
console.log(hasMoreVowels('moose'));
console.log(hasMoreVowels('graph'));
console.log(hasMoreVowels('yay'));
console.log(hasMoreVowels('Aal'));