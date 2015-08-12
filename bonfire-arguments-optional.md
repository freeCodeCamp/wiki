# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

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
to-do

## Hint: 1
to-do

## Hint: 2
to-do

## Hint: 3
to-do

## My code

```
function add() {
    // Function to check if a number is actually a number
    // and return undefined otherwise.
    var checkNum = function (num) {
        if (typeof num !== 'number'){
            return undefined;
        }else
            return num;
    };

    // Check if we have two parameters, check if they are numbers
    // handle the case where one is not
    // returns the addition.
    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {return a + b;}
    } else {
        // If only one parameter was found, returns a new function that expects two
        // Store first argument before entering the new function scope
        var c = arguments[0];
        // Check the number again, must be outside the function to about returning an object
        // instead of undefined.
        if(checkNum(c)){
            // Return function that expect a second argument.
            return function(arg2) {
                // Check for non-numbers
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                }else {
                    // if numbers then add them.
                    return c + arg2;
                }
            };
        }
    }
}
```
## Code Explanation:


## [Go Home](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)