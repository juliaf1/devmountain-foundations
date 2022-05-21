const decoder = code => {
  let decryptedCode = '';
  let index = 0;
  let skipCount = code[index];
  while (skipCount !== undefined) {
    index += +skipCount + 1;
    decryptedCode = decryptedCode.concat(code[index]);
    index++;
    skipCount = code[index];
  };
  return decryptedCode;
};

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));