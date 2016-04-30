# Problem Explanation:
Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

## Outline
This one starts easily since `0! = 1`, so you can go ahead and simply `return 1` there.

We can use that as an `if` in order to break the loop we're going to create using a **recursive function**. It will check if the number you gave the function is 0 (which would be the end of your factorial chain). Functions "end" when they return anything. In fact, **all** functions without an explicit `return` statement will return `undefined`.

This is also why **instead** of having *"finished"*, a function is always said to *"have returned"*. And now this...

## Understanding recursion
Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the _num_ parameter is `num-1` (which initially translates to 4). The very function is going to **run inside itself** interesting, eh?

# Understanding the flow
The first **returned** value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:

### During the first execution of the function:
[**num** = 5]

Is 5 _equal_ to 1 or 0? **No** ---> Oki doki, let's continue...

**Returns:**

(**5** _ (_second execution_: **4** _ (_third execution_: **3** _ (_fourth execution_: **2** _ _fifth execution_: **1**))))

What it returns can be viewed as `(5*(4*(3*(2*1))))` or just `5 * 4 * 3 * 2 * 1`, and the function will return the result of that operation: `120`. Now, let's check what the rest of the executions do:

### During the rest of the executions:
**Second Execution**: 
_num_ = 5-1 = **4** -> is _num_ 0 or 1? No<br>
--> return the multiplication between 4 and the next result when _num_ is now 4-1.

**Third Execution**: _num_ = 4 - 1 = **3** -> is _num_ 0 or 1? No<br>
--> return the multiplication between 3 and the next result when _num_ is now 3-1.

**Fourth Execution**: _num_ = 3-1 = **2** -> is _num_ 0 or 1? No<br>
--> return the multiplication between 2 and the next result when _num_ is now 2-1.

**Fifth Execution**: _num_ = 2-1 = **1** -> is _num_ 0 or 1? Yep<br>
--> return **1**. And this is where the recursion stops because there are no more executions.

Got it? ;)

![Recursion](http://i61.tinypic.com/28auvsw.jpg)

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```javascript
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);
```

:rocket: [REPL It!](https://repl.it/CLjU/1)

# References
- **Recursion**: [https://www.codecademy.com/courses/javascript-lesson-205/0/1](https://www.codecademy.com/es/courses/javascript-lesson-205/0/1)
- **Factorialization**: [https://en.wikipedia.org/wiki/Factorial](https://en.wikipedia.org/wiki/Factorial)
- **Arithmetic Operators** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @luishendrix92 @Rafase282 @hallaathrad for your help with Algorithm: Factorialize a Number`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)

```
           ,,,         ,,,
          ;"   ^;     ;'   ",
          ;    s$$$$$$$s     ;
          ,  ss$$$$$$$$$$s  ,'
          ;s$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$
         $$$$P""Y$$$Y""W$$$$$      -{ Happy Camping! }
         $$$$  p"$$$"q  $$$$$
         $$$$  .$$$$$.  $$$$
          $$DcaU$$$$$$$$$$
            "Y$$$"*"$$$Y"    
                "$b.$$"
```
