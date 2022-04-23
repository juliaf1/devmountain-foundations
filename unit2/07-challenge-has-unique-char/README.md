# Devmountain Foundations
### Week 4
### Has Unique Chars Challenge

---

#### :dart: Instructions
Given a word, return `true` if that word contains only unique characters. Return `false` otherwise.
Uppercase and lowercase letters should be considered separately.

For example:

```
hasUniqueChars("Monday")
// returns true

hasUniqueChars("Moonday")
// returns false

hasUniqueChars("Bob")
// returns true
```

#### :sparkles: Solution
Solution implemented transforms string into array, and then uses a nested `for loop` inside a `forEach` method, checking if there are any repetead letters. If there is, it breaks the loop returning `False`.

After cloning the project, run `node hasUniqueChars.js` on a terminal window to see the logs printed.
