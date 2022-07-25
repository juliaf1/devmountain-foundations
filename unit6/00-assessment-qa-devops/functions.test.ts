const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // check that shuffleArray returns an array
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArray))).toBe(true);
    });

    // check that it returns an array of the same length as the argument sent in
    test('return an array of the same length', () => {
        const arrayLength = testArray.length;
        const resultLength = shuffleArray(testArray).length;
        expect(arrayLength === resultLength).toBe(true);
    });

    // check that all the same items are in the array
    test('return an array with all the same items', () => {
        let matches = 0;
        const resultArray = shuffleArray(testArray);
        for(let i = 0; i < testArray.length; i++) {
            for(let j = i + 1; j < resultArray.length; j++) {
                if (testArray[i] == resultArray[j]) {
                    matches++;
                };
            };
        };
        expect(matches === testArray.length).toBe(true);
    });


    // check that the items have been shuffled around
    test('return an array with the items shuffled', () => {
        expect(testArray !== shuffleArray(testArray)).toBe(true);
    });
});