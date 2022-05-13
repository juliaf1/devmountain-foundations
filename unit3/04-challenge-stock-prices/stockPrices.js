const best = (prices, profitLogger) => {
  let profits = [];
  let profitsDetails = [];
  let currentProfit = 0;
  for(let i = 0; i < prices.length; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      currentProfit = prices[j] - prices[i];
      profits.push(currentProfit);
      profitsDetails.push({ profit: currentProfit, buyPrice: prices[i], sellPrice: prices[j] });
    };
  };
  profitLogger(profits, profitsDetails);
};

const profitLogger = (profits, profitsDetails) => {
  let bestProfit = !profits[0] ? 0 : Math.max(...profits);
  bestProfit = profitsDetails.find(detail => detail.profit == bestProfit);
  if (!!bestProfit && bestProfit.profit > 0) {
    const {profit, buyPrice, sellPrice} = bestProfit;
    console.log(`Your best profit is ${profit}, buying at ${buyPrice} and selling at ${sellPrice}`);
  } else {
    console.log(`There aren't any profit scenarios`);
  };
};


best([1, 2, 3, 4, 5], profitLogger);
// 4 - buy at $1, sell at $5
best([2, 3, 10, 6, 4, 8, 1], profitLogger);
// 8 - buy at $2, sell at $10
best([7, 9, 5, 6, 3, 2], profitLogger);
// 2 - buy at $7, sell at $9
best([0, 100], profitLogger);
// 100 - buy at $0, sell at $100
best([5, 4 , 3, 2, 1], profitLogger);
// 0
best([100], profitLogger);
// 0
best([100, 0], profitLogger);
// 0