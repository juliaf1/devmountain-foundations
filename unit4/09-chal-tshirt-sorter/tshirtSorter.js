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

const shirtSorter2 = string => {
  const splittedString = string.replaceAll(' ', '').split('');
  let sizes = ['s', 'm', 'l'];
  let sortedString = [];
  sizes.forEach(size => {
    sortedString.push(splittedString.filter(char => char === size));
  });
  return sortedString.flat().join('');
};


console.log(shirtSorter2('slsmmsllsmsmlmsls'));
console.log(shirtSorter2('lms'));
console.log(shirtSorter2('smllms'));