const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	// Maps user input
	tokens = input.split(' ');

	// Gets math symbol (first element of user input)
	mathSymbol = tokens[0];

	// Create array of numbers from user input
	numbers = getNumbers(tokens);

	// Gets result
	result = getResult(mathSymbol, numbers);

	// Prints result
	printResult(result);

	// This line closes the connection to the command line interface.
	reader.close();
});

const getNumbers = (array) => {
	// Removes first item (math operator) from array
	array.shift();

	// Iterates over every element on array, replacing it with Number format
	array.forEach((n) => {
		array.splice(array.indexOf(n), 1, Number(n));
	});

	return array;
}

const getResult = (operator, operands) => {
	result = operands[0];

	switch (operator) {
		case '+':
			for(var i = 1; i < operands.length; i++){
				result += operands[i];
			};
			return result;
		case '-':
			for(var i = 1; i < operands.length; i++){
				result -= operands[i];
			};
			return result;
		case '%':
			for(var i = 1; i < operands.length; i++){
				result %= operands[i];
			};
			return result;
		case '/':
			for(var i = 1; i < operands.length; i++){
				result /= operands[i];
			};
			return result;
		case '*':
			for(var i = 1; i < operands.length; i++){
				result *= operands[i];
			};
			return result;
		case 'square', '√':
			squareRoots = '';
			operands.forEach((o) => {
				squareRoots += `${o} => ${Math.sqrt(o)}; `;
			});
			return squareRoots;
		default:
			return 'Ops, could not find the result for that one';
	};
};

const printResult = (result) => {
	console.log(`The result is: ${result}`);
};