const makeUnique = string => {
  string = string.replaceAll(' ', '').toLowerCase().split('');
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        string.splice(j, 1);
      };
    };
  };
  return string.join('');
};

console.log(makeUnique('helloworld'));
console.log(makeUnique('iwanttoclimbamountain'));
console.log(makeUnique(''));