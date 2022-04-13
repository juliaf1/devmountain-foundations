// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

const addToZero = array => {
  let adds = false;

  array.forEach((item) => {
    for(let i = 0; i < array.length; i++) {
      if (array.indexOf(item) != i && Math.abs(array[i]) === Math.abs(item)) {
        adds = true;
        break;
      };
    };
  });

  return adds;
};


let arrayAddsToZero = addToZero(array);
console.log(arrayAddsToZero);