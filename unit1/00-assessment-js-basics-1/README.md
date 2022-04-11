# Devmountain Foundations
### Week 2
### Unit 1 Assessment

---

#### :dart: Instructions

**Part 1: Software Development Lifecycle**

In this section you will test your understanding of the Software Development Lifecycle.

Open the file called `sldc.js` and complete the problems that are described in the comments.

**Part 2: Skills Practice**

In this section, you’ll complete a series of practice problems that will ensure you practice the syntax and coding concepts from this week’s lessons.

- **Variables**: Open the file called `variables.js` and complete the problems that are described in the comments.
- **Arrays**: Open the file called `arrays.js` and complete the problems that are described in the comments.
- **Git**: Open the file called `gitInfo.js` and complete the problems that are described in the comments.

**Part 3: Password Validator**

Create a new file called `password.js`. Write a program that does the following:

- Welcome the user to the password validator tool
- Prompt the user for a password to validate
- Check if the user’s password meets the following constraint:
  - At least 10 characters long
- If the user’s password meets the constraint, show a success message to the user
- If the user’s password fails the constraint, show a failure message to the user

For extra credit, implement the following to your program:
- Add more constraints and checks to your program
- Add some [ASCII Art](https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20) to the output of your program

#### :sparkles: Solution
Solution implemented solves all exercise's requirements, including extra credits on the Password Validator.

After cloning the project, run `node password.js` on a terminal window to see the program running.

If the program successfully starts, you should see:
```
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
  |___|  |__| |__||_______||___||______| |__| |__|  |___|  |_______||___|  |_|

Welcome to your friendly password validator
I can tell you how safe your password is

Type in your password:
> input_pass

    Analyzing password...
```

Failure output:
```
    Hummm, you can do better! Try matching all conditions next time 😉
    
    Your password should contain at least:
      ✖️  10 caracteres
      ✖️  One digit
      ✖️  One lower case
      ✖️  One upper case
      ✖️  One special caracter
```
**Note that** the emojis will translate which requirements passed and failed.

Successful output:
```
          _
    ___  (_)______
   / _ / / __/ -_)
  /_//_/_/__/__/
  
  You are ready to secure your accounts 😎
```
