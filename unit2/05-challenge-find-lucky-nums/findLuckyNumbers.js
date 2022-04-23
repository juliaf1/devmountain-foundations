// Write your code below this line.

const findLuckyNumbers = totalNumbers => {
  // Initializes random array as an empty array
  let randomArray = []
  // Define 1-10 array from where we will get the random numbers
  let oneToTenArray = [...Array(11).keys()];
  oneToTenArray.shift();
  // Iterates the total amount of numbers wanted in the random array
  for (let i = 0; i < totalNumbers; i++) {
    // Gets a random index from 0 to 10
    let randomIndex = Math.random() * oneToTenArray.length | 0;
    // Gets the number for that index from the 1-10 array
    let randomNumber = oneToTenArray[randomIndex];
    // Removes that number from the array to avoid duplicates
    oneToTenArray.splice(randomIndex, 1);
    // Push random number to random array
    randomArray.push(randomNumber);
  };
  return randomArray;
};

console.log(findLuckyNumbers(0));
console.log(findLuckyNumbers(2));
console.log(findLuckyNumbers(3));
console.log(findLuckyNumbers(6));
console.log(findLuckyNumbers(8));
console.log(findLuckyNumbers(10));