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

    console.log(resultsAppend);

    perf.start();
    doublerInsert(arrays[key]);
    let resultsInsert = perf.stop();

    console.log(resultsInsert);

    console.log('append', resultsAppend.preciseWords);
    console.log('insert', resultsInsert.preciseWords);

    console.log('\n----\n');
};


// Results for the tinyArray
// append 48.5 μs
// insert 19.333 μs

// Results for the smallArray
// append 9.125 μs
// insert 10.625 μs

// Results for the mediumArray
// append 50.208 μs
// insert 139.25 μs

// Results for the largeArray
// append 425.667 μs
// insert 8.83675 ms

// Results for the extraLargeArray
// append 2.273 ms
// insert 772.099666 ms


// Question - How does each function “scale”? Which of the two functions scales better? How can you tell?
// Answer - doublerAppend runs in a O(n) time, while doublerInsert runs in O(n2) time.
// This means doublerAppend will scale linearly, while doublerInsert will scale quadratically.
// The asymptotic behavior of both functions can be concluded from the time results.


// Question - Do some review / research on why the slower function is so slow, and summarize the reasoning for this.
// Answer - the array unshift() method adds a new element to the beginning of the array.
// To do that, as the name indicates, all the other elements of the array need to be shifted to the right.
// This means that the time complexity of the method unshift() by itself is linear O(n).
// Considering the function already has a foor loop with a O(n) complexity, this makes the function run in O(n2) time.