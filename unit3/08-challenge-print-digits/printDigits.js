const printDigits = (num) => {
  console.log(`The num is: ${num}`);
  let numTracker = null;
  let printedNum = null;
  let operator = 10;
  while (numTracker != num) {
    printedNum = Math.floor((num % operator)  / (operator / 10));
    console.log(printedNum);
    numTracker = num % operator;
    operator = operator * 10;
  };
  console.log('------');
};

printDigits(3823);
printDigits(12);
printDigits(0);
printDigits(2903);