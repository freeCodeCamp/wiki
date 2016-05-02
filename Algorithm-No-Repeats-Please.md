# Problem Explanation:
- This task requires us to look at each possible permutation of a string. This is best done using a recursion function. Being able to build a function which collects all permutations of a string is a common interview question, so there is no shortage of tutorials out there on how to do this, in many different code languages.
- This task can still be daunting even after watching a tutorial. You will want to send each new use of the function  3 inputs: 1. a new string (or character array) that is being built, 2. a position in your new string that's going to be filled next, and 3. an idea of what characters (more specifically positions) from the original string have yet to be used. The pseudo code will look something like this:

  ```
  var str = ???;
  perm(current position in original string, what's been used in original string, current string build thus far){
  if(current string is finished) {
    print current string;
  }else{
    for(var i = 0; i < str.length; i++) {
      if(str[i] has not been used) {
        put str[i] into the current position;
        mark str[i] as used
        perm(current position in original string, what's been used in original string, current string build thus far)
        unmark str[i] as used because another branch in the tree for i + 1 will still likely use it;
      }
    }
  }
  }
  perm(0, nothing used yet, empty new string (or array the same size as str);
  ```

- Another way to think about this problem is to start from an empty space. Introduce the first letter to the space. This space will now contain the first sub-permutation. Here's a diagram illustrating the idea:

![diagram](http://i.imgur.com/zFm5gRx.png)

```js
// An approach to introduce a new character to a permutation
var ch = '?';
var source = ['?', '?', '?'];     // Current sub-permutation
var temp, dest = [];

for(var i = 0; i <= source.length; ++i) {
    temp = source.slice(0);    // Copy the array
    temp.splice(i, 0, ch);    // Insert the new character
    dest.push(temp);    // Store the new sub-permutation    
}


```

Finding each permutation could then be done non-recursively by including the above in a function taking a source array and returning a destination array. For each letter of the input string, pass that character, as well as the array  returned from the previous call of the function.

A way to visualize this is by considering a tree that starts with the first character of your string: ![Permutation Tree](http://i.imgur.com/t8zNarc.png)

## Hint: 1
- The easiest way is to use Heap's algorithm to recursively get a list of all the permutations.

## Hint: 2
- Once you have the list then just create a regular expression to catch the repeating characters.

## Hint: 3
- You will want to have the permutations as an array of joined strings instead of separated characters.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;
  
  // return 0 if str contains same character
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  //Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  //Return how many have no repetitions.
  return filtered.length;
}

// test here
permAlone('aab');
```
:rocket: [REPL It!](https://repl.it/CLop/0)


# Code Explanation:
- Read comments in code

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Philosophist @Rafase282 for your help with Algorithm: No Repeats Please`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
