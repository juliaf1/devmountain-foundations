# Devmountain Foundations
### Week 6
### Stock Prices

---

#### :dart: Instructions
This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
The best function will be given an array of stock prices in the order they happened throughout the day.
It should return the maximum possible profit on the stock for that day.

Here are some more examples with positive profit:

```
best([15, 10, 20, 22, 1, 9])
// 12 - buy at 10, sell at 22

best([1, 2, 3, 4, 5])
// 4 - buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
// 8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
// 2 - buy at $7, sell at $9

best([0, 100])
// 100 - buy at $0, sell at $100
```

If no profit is possible, return $0:
```
best([5, 4 , 3, 2, 1])
// 0

best([100])
// 0

best([100, 0])
// 0
```

#### :sparkles: Solution
Solution implements a function that maps the prices of the day array into an object with all possible buying/selling scenarios and then analyzes it to log a string with the best profit of the day.

```
> best([1, 2, 3, 4, 5]);
Your best profit is 4, buying at 1 and selling at 5

> best([2, 3, 10, 6, 4, 8, 1]);
Your best profit is 8, buying at 2 and selling at 10

> best([7, 9, 5, 6, 3, 2]);
Your best profit is 2, buying at 7 and selling at 9

> best([0, 100]);
Your best profit is 100, buying at 0 and selling at 100

> best([5, 4 , 3, 2, 1]);
There aren't any profit scenarios

> best([100]);
There aren't any profit scenarios

> best([100, 0]);
There aren't any profit scenarios
```
