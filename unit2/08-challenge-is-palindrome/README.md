# Devmountain Foundations
### Week 4
### Is Palindrome Challenge

---

#### :dart: Instructions
Return `true` if this word is a palindrome, `false` if it is not. A palindrome is a word that is spelled the same backwards and forwards.

Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

For example:

```
isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
```

#### :sparkles: Solution
Solution implemented transforms word string into array, reverses it, then transforms back into string to compare with argument passed.

After cloning the project, run `node isPalindrome.js` on a terminal window to see the logs printed.
