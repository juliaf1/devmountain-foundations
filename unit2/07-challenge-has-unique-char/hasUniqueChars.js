// Write your code below

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

console.log(hasUniqueChars('Julia'));
console.log(hasUniqueChars('Juliaa'));