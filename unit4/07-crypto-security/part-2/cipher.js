// The Swapping Cipher
// In the swapping cipher, the user get a scrambled sentence and a sequence of numbers from 0 to 9
// The number sequence tells which letters need to be swapped to reveal the hidden text

const cipherText = string => {
    const cipherSequence = randomSequence(string.length);
    const cipheredText = swap(string, cipherSequence);

    return cipheredText + '-' + cipherSequence;
};

const decipherText = cipher => {
    const cipherArray = cipher.split('-');
    const cipheredText = cipherArray[0];
    const cipherSequence = cipherArray[1];

    return swap(cipheredText, cipherSequence);
};

const swap = (string, sequence) => {
    let convertedString = string.split('');
    let cipherSequence = sequence.split(',');

    for (let i = 0; i < cipherSequence.length; i += 2) {
        let firstIndex = cipherSequence[i];
        let secondIndex = cipherSequence[i + 1];
        if (firstIndex != undefined && secondIndex != undefined) {
            convertedString[firstIndex] = string[secondIndex];
            convertedString[secondIndex] = string[firstIndex];
        };
    };

    return convertedString.join('');
};

const randomSequence = totalNumbers => {
    const sequence = [];

    for (let i = 0; i < totalNumbers; i++) {
        sequence.push(Math.floor(Math.random() * totalNumbers));
    };

    return [...new Set(sequence)].join(',');
}


let testString = 'ireallyloveharrypotterlikereally!!!'; // Update your test string here

let cipher = cipherText(testString); // Cipher test string
let decipher = decipherText(cipher); // Decipher test string

console.log('String to cipher: ' + testString);
console.log('Ciphered string: ' + cipher);
console.log('Deciphered string: ' + decipher);