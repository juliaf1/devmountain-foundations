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
    let decodedLetterIndex = skipCount + ALPHABET.findIndex(char => char === letter);
    if (decodedLetterIndex >= 26) { decodedLetterIndex -= 26 };
    decodedString += ALPHABET[decodedLetterIndex];
  });

  console.log(decodedString);
};

decode('1a');
decode('3ce');
decode('2fcjjm');