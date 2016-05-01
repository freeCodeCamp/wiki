# Explanation:
You will need to gather all the **Fibonacci** numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

## Hint: 1
To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

## Hint: 2
To check if a number is even all you have to check is if that number % 2 == 0.

## Hint: 3
As you get the next odd one, don't forget to add it to a global variable that can be returned at the end. `result += currNumber;` Will do the trick.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution #1:

```js
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);
```
:rocket: [REPL It!](https://repl.it/CLnV/0)

# Code Explanation:
- Create a variable to keep record of the current and previous numbers along with the result that will be returned.
- Use a while loop to make sure we do not go over the number given as parameter.
- We use the modulo operand to check if the current number is odd or even. If even add it to the result.
- Complete the Fibonacci circle by rotating getting the next number and swapping values after.
- Return the result.

## Code Solution #2:

```js
function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }
  
  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) { 
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });
  
  return res;
}

// test here
sumFibs(4);
```
:rocket: [REPL It!](https://repl.it/CLnW/0)

# Code Explanation:
- See comments

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @d3ddd for your help with Algorithm: Sum All Odd Fibonacci Numbers`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
