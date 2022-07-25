const perf = require('execution-time')();


function doublerAppend(nums) {
    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    };
};


function doublerInsert(nums) {
    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    };
};


function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    };
    return array;
};


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

const arrays = { tinyArray, smallArray, mediumArray, largeArray, extraLargeArray };

for (const key in arrays) {
    console.log(`Results for the ${key}`);

    perf.start();
    doublerAppend(arrays[key]);
    let resultsAppend = perf.stop();

    perf.start();
    doublerInsert(extraLargeArray);
    let resultsInsert = perf.stop();

    console.log('insert', resultsInsert.preciseWords);
    console.log('append', resultsAppend.preciseWords);

    console.log('\n----\n');
};

// Results for the tinyArray
// insert 775.143459 ms
// append 47.292 μs

// Results for the smallArray
// insert 766.73225 ms
// append 12.875 μs

// Results for the mediumArray
// insert 770.876792 ms
// append 33.209 μs

// Results for the largeArray
// insert 767.111041 ms
// append 281.292 μs

// Results for the extraLargeArray
// insert 768.228333 ms
// append 1.902 ms
