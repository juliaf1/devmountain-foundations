const outlier = numbers => {
    let odds = 0;
    for(let i = 0; i < 3; i++) {
        if (numbers[i] % 2 !== 0) { odds++ };
    };
    const oddArray = odds >= 2;
    for(let i = 0; i < numbers.length; i++) {
        const isOdd = numbers[i] % 2 !== 0;
        if (oddArray && !isOdd || !oddArray && isOdd) {
            console.log(numbers[i]);
            break;
        };
    };
};

outlier([2, 4, 0, 100, 4, 11, 2602, 36]);
outlier([160, 3, 1719, 19, 11, 13, -21]);