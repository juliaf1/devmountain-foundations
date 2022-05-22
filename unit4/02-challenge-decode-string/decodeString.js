const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

const decode = code => {
  let skipCount = +code[0];

  if (!skipCount) {
    console.log('Invalid code');
    return
  };

  let decodedString = '';
  let codeArray = code.substring(1).toLowerCase().split('');

  codeArray.forEach(letter => {
    decodedString += ALPHABET[skipCount + ALPHABET.findIndex(char => char === letter)];
  });

  console.log(decodedString);
};

decode('1a');
decode('3ce');
decode('2fcjjm');