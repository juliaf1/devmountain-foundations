const best = (prices) => {
  const stockAnalyzed = analyzeStock(prices);
  let bestProfit = 0;
  if (stockAnalyzed.length === 0) {
    bestProfit = 0;
  } else {
    bestProfit = Math.max(...stockAnalyzed.map(item => item.profitValue));
  };
  bestProfit = stockAnalyzed.find(profitDetails => profitDetails.profitValue == bestProfit);
  profitLogger(bestProfit);
};

const analyzeStock = (prices) => {
  let profitsDetails = [];
  let profit = 0;
  for(let i = 0; i < prices.length - 1; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      profit = prices[j] - prices[i];
      profitsDetails.push({ 'profitValue': profit, 'buyPrice': prices[i], 'sellPrice': prices[j] });
    };
  };
  return profitsDetails;
};

const profitLogger = (bestProfit) => {
  if (!!bestProfit && bestProfit.profitValue > 0) {
    const {profitValue, buyPrice, sellPrice} = bestProfit;
    console.log(`Your best profit is ${profitValue}, buying at ${buyPrice} and selling at ${sellPrice}`);
  } else {
    console.log(`There aren't any profit scenarios`);
  };
};


best([1, 2, 3, 4, 5]);
// 4 - buy at $1, sell at $5
best([2, 3, 10, 6, 4, 8, 1]);
// 8 - buy at $2, sell at $10
best([7, 9, 5, 6, 3, 2]);
// 2 - buy at $7, sell at $9
best([0, 100]);
// 100 - buy at $0, sell at $100
best([5, 4 , 3, 2, 1]);
// 0
best([100]);
// 0
best([100, 0]);
// 0