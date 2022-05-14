const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	// Maps user input
	let tokens = input.split(' ');

	// Gets math symbol (first element of user input)
	let mathSymbol = tokens[0];

	// Removes first item (math operator) from array
	tokens.shift();

	// Gets result
	let result = getResult(mathSymbol, tokens);

	// Prints result
	printResult(result);

	// This line closes the connection to the command line interface.
	reader.close()
});

const getResult = (operator, operands) => {
	if (operator == '√') {
		result = '';
		operands.forEach((o) => {
			result += `${o} => ${Math.sqrt(o)}; `;
		});
	} else {
		result = operands[0];
		for(let i = 1; i < operands.length; i++){
			result += `${operator + operands[i]}`;
		};
		result = eval(result);
	};
	return result
};

const printResult = (result) => {
	if (result == undefined) {
		console.log('Ops, could not find the result for that one');
	} else {
		console.log(`The result is: ${result}`);
	};
};