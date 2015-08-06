You should make sure to try hard to solve the Bonfire yourself before reading this!
# :link: [Original Bonfire](http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number) :point_right:  

## Author
![Luis](https://avatars3.githubusercontent.com/u/6039444?v=3&s=96)
submitted by [luishendrix92](//freecodecamp.com/luishendrix92) |
https://github.com/luishendrix92

## The problem
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120f`

## Analysis
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

## Outline
This one is simple, since the factorials of both 0 and 1 is just 1, you can go ahead and return 1. The IF function here is responsible for breaking the loop I created using a **recursive function**, first it checks if the number you gave the function is 0 or 1 and then returns 1 if the condition passed; since there's no ELSE, the rest of the function is executed.

## Understanding recursion
Now, I put the references I studied to understand a *little bit* of how recursion works, and it's when a function repeats itself. The first time I did this challenge I used a short but effective **while loop** but I wanted to make it shorter and more efficient, you know... because of reasons ;).
Basically what this does is return the number you gave multiplied by the function itself but this time the value passed to the *num* parameter is `num-1` which ultimately translates to 4. The very function is going to **run inside itself** haha, funny eh? It's like having functions that run inside themselves until they reach a very deep level (depends on how many times it runs itself).

## Visualizing the flow
![Recursion](http://i61.tinypic.com/28auvsw.jpg)

The first **returned** value can be visualised better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:

## During the first execution of the function:
[**num** = 5]

Is 5 *equal* to 1 or 0? **No** ---> Oki doki, let's continue...

**Returns:**

(**5** * (*second execution*: **4** * (*third execution*: **3** * (*fourth execution*: **2** * *fifth execution*: **1**))))

What it returns can be viewed as `(5*(4*(3*(2*1))))` or just `5 * 4 * 3 * 2 * 1`, and the function will return the result of that operation: `120`.
Now, let's check whhat the rest of the executions do:

## During the rest of the executions:
- **Second Execution**: *num* = 5-1 = **4** -> is *num* 0 or 1? No --> return the multiplication between 4 and the next result when *num* is now 4-1.

- **Third Execution**: *num* = 4 - 1 = **3** -> is *num* 0 or 1? No --> return the multiplication between 3 and the next result when *num* is now 3-1.

- **Fourth Execution**: *num* = 3-1 = **2** -> is *num* 0 or 1? No --> return the multiplication between 2 and the next result when *num* is now 2-1.

- **Fifth Execution**: *num* = 2-1 = **1** -> is *num* 0 or 1? Yep --> return **1**. And this is where the recursion stops because there are no more executions.

## :construction: My Solution is coming up!
Don't scroll down if you don't want to see it!

![warning](http://www.yourdrum.com/yourdrum/images/2007/10/10/red_warning_sign_2.gif)        

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

## My solution
``` javascript
function factorialize(num) {
  if (num === 0 || num == 1) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);
```



## References
- **Recursion**: https://www.codecademy.com/es/courses/javascript-lesson-205/0/1
- **Factorialization**: https://en.wikipedia.org/wiki/Factorial
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

## If you enjoyed this guide, then type:
`thanks @luishendrix92`
in the chat!
