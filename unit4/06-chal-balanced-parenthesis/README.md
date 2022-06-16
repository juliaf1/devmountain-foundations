# Devmountain Foundations
### Week 8
### Balanced Parenthesis

---

#### :dart: Instructions
Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets. For example:

```
> has_balanced_parens("()")
true
> has_balanced_parens("(Oh Noes!)(")
false
> has_balanced_parens("((There's a bonus open paren here.)")
false
> has_balanced_parens(")")
false
> has_balanced_parens("(")
false
> has_balanced_parens("(This has (too many closes.) ) )")
false
```

#### :sparkles: Solution
Solution implemented solves all exercise's requirements using nested for loops.

Each time an opening mark appears, it iterates over the rest of the string looking for the first closing mark, then it removes both of them. By the end of this proccess, it looks for any opening or closing marks left to check if the string isn't balanced.
