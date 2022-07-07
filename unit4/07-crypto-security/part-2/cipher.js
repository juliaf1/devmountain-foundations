// The Swapping Cipher
// In the swapping cipher, the user get a scrambled sentence and a sequence of numbers from 0 to 9
// The number sequence tells which letters need to be swapped to reveal the hidden text

const cipherText = string => {
    const numberOfLetters = string.length;
    let cipheredText = string.split('');
    let cipherSequence = [];

    for (let i = 0; i < numberOfLetters; i++) {
        cipherSequence.push(Math.floor(Math.random() * numberOfLetters));
    };
    cipherSequence = [...new Set(cipherSequence)];

    for (let i = 0; i < cipherSequence.length; i += 2) {
        let firstIndex = cipherSequence[i];
        let secondIndex = cipherSequence[i + 1];
        if (firstIndex != undefined && secondIndex != undefined) {
            cipheredText[firstIndex] = string[secondIndex];
            cipheredText[secondIndex] = string[firstIndex];
        };
    };

    return cipheredText.join('') + '-' + cipherSequence.join(',');
};

const decipherText = cipher => {
    const cipherArray = cipher.split('-');
    const cipheredText = cipherArray[0];
    const cipherSequence = cipherArray[1].split(',');
    let decipheredText = cipheredText.split('');

    for (let i = 0; i < cipherSequence.length; i += 2) {
        let firstIndex = cipherSequence[i];
        let secondIndex = cipherSequence[i + 1];
        if (firstIndex != undefined && secondIndex != undefined) {
            decipheredText[firstIndex] = cipheredText[secondIndex];
            decipheredText[secondIndex] = cipheredText[firstIndex];
        };
    };

    return decipheredText.join('');
};

let testString = 'ireallyloveharrypotterlikereally!!!'; // Update your test string here

let cipher = cipherText(testString); // Cipher test string
let decipher = decipherText(cipher); // Decipher test string

console.log('String to cipher: ' + testString);
console.log('Ciphered string: ' + cipher);
console.log('Deciphered string: ' + decipher);