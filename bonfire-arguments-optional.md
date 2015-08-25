# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 2/5

Fill in the object constructor with the methods specified in the tests.

Create a function that sums two arguments together. If only one argument is provided, return a
function that expects one additional argument and will return the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an
argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [Global Function Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
* [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

# Problem Script:

```
function add() {
  return false;
}

add(2,3);
```
## Explanation:
It can be quite complicated to understand what needs to be done. There is always many ways to do something when coding but regardless of the algorithm used, 
we have to create a program that does the following:

* It has to add two numbers passed as parameters and return the addition.
* It has to check if any of the numbers are actual numbers, otherwise return **undefined** and stop the program right there.
* It has to check if it has one or two arguments passed. More re ignored.
* If it has only one then it has to return a function that used that number and expects another one, to then add it.

## Hint: 1
Every time you deal with an argument, you have to check if it is a number or not. For this a function that handles this task will save you repeated code.

## Hint: 2
When working on the case that it needs to return the function, it is wise to check if the first and only argument is a number again and base the code on that.

## Hint: 3
In the case that only one argument was passed, do not worry about how to prompt input for the second one, just make the function definition properly and things will work out the way they should.

## My code

```
function add() {

    var checkNum = function (num) {
        if (typeof num !== 'number'){
            return undefined;
        }else
            return num;
    };

    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {return a + b;}
    } else {
        var c = arguments[0];
        if(checkNum(c)){
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                }else {
                    return c + arg2;
                }
            };
        }
    }
}
```
## Code Explanation:

* First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses **typeof** to check.
* Check if we have two parameters, if so, then check if they are numbers or not using the **checkNum** function I created.
* If they are not **undefined** then add them and return the addition. If they any of them is undefined then return undefined.
* In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
* Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
* Now inside the function we are returning, we have to check for non numbers again just as at the beginning using **checkNum** if undefined then return that, otherwise if numbers add them and return the addition.


## [Go Home](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)