const hasMoreVowels = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let wordArray = word.toLowerCase().split('');
  if (wordArray.filter(letter => vowels.includes(letter)).length > (word.length / 2)) {
    return true;
  } else {
    return false;
  };
};

console.log(hasMoreVowels('mice'));
console.log(hasMoreVowels('moose'));
console.log(hasMoreVowels('graph'));
console.log(hasMoreVowels('yay'));
console.log(hasMoreVowels('Aal'));