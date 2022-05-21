# Devmountain Foundations
### Week 5
### Has More Vowels

---

#### :dart: Instructions
Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

#### :sparkles: Solution
Function coded solves challenge's requirements by transforming word string into an array and using the filter method to get the vowels of the word and count them.

```
hasMoreVowels('moose')
// true
If it’s half vowels (or less), it’s false:

hasMoreVowels('mice')
// false

hasMoreVowels('graph')
// false
Don’t consider “y” as a vowel:

hasMoreVowels('yay')
// false
Uppercase vowels are still vowels:

hasMoreVowels('Aal')
// true
```
