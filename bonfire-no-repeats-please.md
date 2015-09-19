# Problem Explanation:
This task requires us to look at each possible permutation of a string. This is best done using a recursion function. Being able to build a function which collects all permutations of a string is a common interview question, so there is no shortage of tutorials out there on how to do this, in many different code languages.

# Permutation Recursion Function
This task can still be daunting even after watching a tutorial. You will want to send each new use of the function  3 inputs: 1. a new string (or character array) that is being built, 2. a position in your new string that's going to be filled next, and 3. an idea of what characters (more specifically positions) from the original string have yet to be used. The pseudo code will look something like this:

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

A way to visualize this is by considering a tree that starts with the first character of your string: ![Permutation Tree](http://i.imgur.com/t8zNarc.png)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @Philosophist @Rafase282`

--------------------------------------------------------------------------------

**Bonfire: No repeats please**

Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

Another way to think about this problem is to start from an empty space. Introduce the first letter to the space. This space will now contain the first sub-permutation. Here's a diagram illustrating the idea:

[diagram](http://i.imgur.com/zFm5gRx.png)

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
```

Finding each permutation could then be done non-recursively by including the above in a function taking a source array and returning a destination array. For each letter of the input string, pass that character, as well as the array  returned from the previous call of the function.
