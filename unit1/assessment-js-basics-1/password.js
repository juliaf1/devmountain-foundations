const logo = `
_______  _______  _______  _______  _     _  _______  ______    ______       
|       ||   _   ||       ||       || | _ | ||       ||    _ |  |      |      
|    _  ||  |_|  ||  _____||  _____|| || || ||   _   ||   | ||  |  _    |     
|   |_| ||       || |_____ | |_____ |       ||  | |  ||   |_||_ | | |   |     
|    ___||       ||_____  ||_____  ||       ||  |_|  ||    __  || |_|   |     
|   |    |   _   | _____| | _____| ||   _   ||       ||   |  | ||       |     
|___|    |__| |__||_______||_______||__| |__||_______||___|  |_||______|      
 __   __  _______  ___      ___  ______   _______  _______  _______  ______   
|  | |  ||   _   ||   |    |   ||      | |   _   ||       ||       ||    _ |  
|  |_|  ||  |_|  ||   |    |   ||  _    ||  |_|  ||_     _||   _   ||   | ||  
|       ||       ||   |    |   || | |   ||       |  |   |  |  | |  ||   |_||_ 
|       ||       ||   |___ |   || |_|   ||       |  |   |  |  |_|  ||    __  |
 |     | |   _   ||       ||   ||       ||   _   |  |   |  |       ||   |  | |
  |___|  |__| |__||_______||___||______| |__| |__|  |___|  |_______||___|  |_|`;

const message = `
Welcome to your friendly password validator
I can tell you how safe your password is
`;

console.log(logo);
console.log(message);

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Type in your password:\n', function(input) {
  console.log(`
    Analyzing password...`);

  setTimeout(() => { getResult(input) }, 2000);

  reader.close()
});

const getResult = (input) => {
  let digits = input.match(/[0-9]/);
  let lowerCase = input.match(/[a-z]/);
  let upperCase = input.match(/[A-Z]/);
  let specialCaracteres = input.match(/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);
  let minCaracteres = input.length >= 10;
  
  if (minCaracteres && digits && lowerCase && upperCase && specialCaracteres) {
    result = `
          _
    ___  (_)______
   / _ \/ / __/ -_)
  /_//_/_/\__/\__/
  
  You are ready to secure your accounts 😎
    `;
  } else {
    result = `
    Hummm, you can do better! Try matching all conditions next time 😉
    
    Your password should contain at least:
      ${emoji(minCaracteres)}  10 caracteres
      ${emoji(digits)}  One digit
      ${emoji(lowerCase)}  One lower case
      ${emoji(upperCase)}  One upper case
      ${emoji(specialCaracteres)}  One special caracter
    `;
  };

  console.log(result);
};

const emoji = (condition) => {
  if (condition) {
    return '✔️';
  } else {
    return '✖️';
  };
};