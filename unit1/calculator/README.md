# Devmountain Foundations
### Week 1
### Calculator

---

#### :dart: Instructions
Implement a prefix notation calculator in the file called calc.js. You need to handle the following mathematical operations:

* Addition
* Subtraction
* Multiplication
* Division
* Square root

We’ve provided some code that allows you to access the numbers and the math symbol that the user provided on the command line. Review the code carefully in calc.js. Research any syntax that looks unfamiliar to you.

#### :sparkles: Solution
I've implemented two different code solutions for the callenge, those can be found on [main](https://github.com/juliaf1/devmountain-challenges/blob/main/unit1/calculator/calc.js) and [calculator/v2](https://github.com/juliaf1/devmountain-challenges/blob/calculator/v2/unit1/calculator/calc.js) branches. Both solutions handle as many operands as user inputs for Addition, Subtraction, Multiplication, Division, Modulus and Square Root operations.
User is expected to input the operator and operands they want to calculate in prefix manner, as shown in the example:

```
> What would you like to calculate?
> + 10 10 2 7
```

#### :robot: Demo

```
> + 10 10 2 7
The result is: 29

> - 8 1 2
The result is: 5

> / 20 5 2
The result is: 2

> * 2 2 2
The result is: 8

> % 10 6 3
The result is: 1

> √ 25 36 60
The result is: 25 => 5; 36 => 6; 60 => 7.745966692414834;
```
