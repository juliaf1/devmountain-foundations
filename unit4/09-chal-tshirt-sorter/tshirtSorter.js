const shirtSorter = string => {
  let sortedString = []
  string.replaceAll(' ', '').split('').forEach(size => {
    if (size === 's') {
      sortedString.splice(0, 0, size);
    } else if (size === 'l') {
      sortedString.splice(string.length, 0, size);
    } else if (size === 'm') {
      index = sortedString.findIndex(char => char === 'l') - 1;
      sortedString.splice(index, 0, size);
    };
  });
  return sortedString.join('');
};


console.log(shirtSorter('slsmmsllsmsmlmsls'));
console.log(shirtSorter('lms'));
console.log(shirtSorter('smllms'));