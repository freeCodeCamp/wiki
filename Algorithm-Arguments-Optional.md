![](http://i.imgur.com/63Iaec6.jpg)

# Explanation:
It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used,  we have to create a program that does the following:
- It has to add two numbers passed as parameters and return the sum.
- It has to check if any of the numbers are actual numbers, otherwise return **undefined** and stop the program right there.
- It has to check if it has one or two arguments passed. More are ignored.
- If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

## Hint: 1
Every time you deal with an argument, you have to check if it is a number or not. For this a function that handles this task will save you repeated code.

## Hint: 2
When working on the case that it needs to return the function, it is wise to check if the first and only argument is a number again and base the code on that.

## Hint: 3
In the case that only one argument was passed, do not worry about how to prompt input for the second one, just make the function definition properly and things will work out the way they should.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
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
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2,3);
```
:rocket: [REPL It!](https://repl.it/CLnz/0)

### Code Explanation:
- First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses **typeof** to check.
- Check if we have two parameters, if so, then check if they are numbers or not using the **checkNum** function I created.
- If they are not **undefined** then add them and return the addition. If they any of them is undefined then return undefined.
- In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
- Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
- Now inside the function we are returning, we have to check for non numbers again just as at the beginning using **checkNum** if undefined then return that, otherwise if numbers add them and return the addition.

## Second Solution:

```js
function addTogether() {
  var args = new Array(arguments.length);
  //Storing the arguments in an array
  for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
 //Check for the arguments length
 if(args.length == 2){
    //If there are two arguments,check for the type of both arguments
    //Use typeof to check the type of the argument(both should be numbers)
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
      return undefined;
      }
    return args[0]+args[1];
   }
 //When only one argument is provided
 if(args.length == 1){
     a= args[0];
     //Check the  argument using typeof 
    if(typeof a!=='number'){
        return undefined;
      }
    else{
       //Making use of closures 
       return function(b){
       //Checking the second argument 
         if(typeof b !=='number'){
           return undefined;
           }
         else
           return a+b;
          };
      }
    }
}

// test here
addTogether(2,3);
```
:rocket: [REPL It!](https://repl.it/CLoA/0)

## Third Solution:
```js
//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}

// test here
addTogether(2,3);
```
:rocket: [REPL It!](https://repl.it/CLoB/0)

### Code Explanation:
- First I iterate through the arguments and check for arguments that are not a number and return undefined
- If it's not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
- Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @coded9 for your help with Algorithm: Arguments Optional`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
