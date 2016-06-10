# Algorithm Find the Longest Word in a String

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

You have to go through each word and figure out which one is the longest and return not the word, but how many characters it has.

#### Relevant Links

- [JS String Length](String.length)

## :speech_balloon: Hint: 1

You should split the string into an array of words.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

You will need to figure out a way to keep track globally of the greatest current length.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Remember how to get the length of elements on the array? `Array[index].length`.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
```

:rocket: [Run Code](https://repl.it/CLjU/5)

### Code Explanation:

Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

#### Relevant Links

- [JS String Length](String.length)
- [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## :sunflower: Intermediate Code Solution:

**Using `.reduce()`**

```javascript
function findLongestWord(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}
```

:rocket: [Run Code](https://repl.it/CLjU/6)

### Code Explanation:

For more information on `reduce` [click here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)<br>
In case you're wondering about that `0` after the callback function, it is used to give an initial value to the `x`, so that `Math.max` will know where to start.

#### Relevant Links

- [JS Reduce](JS-Array-Prototype-Reduce)
- [JS Reduce Made Easy](JS-Reduce-Made-Easy)
- [JS Math Max](JS-Math-Max.md)

## :rotating_light: Advanced Code Solution:

**Using recursiveness**

```javascript
function findLongestWord(str) {

  //split the string into individual words 
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element, 
  //return the length of that element
  if(str.length == 1){
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function)
  if(str[0].length >= str[1].length){
    str.splice(1,1);
    return findLongestWord(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){
    // from the first element to the last element inclusive.
    return findLongestWord(str.slice(1,str.length).join(" "));
  }
}
```

:rocket: [Run Code](https://repl.it/CLjU/7)

### Code Explanation:

The first line splits the string into individual words. Then we check if `str` only has 1 element left then that is the longest element and we return it. If the first element's length is greater than the second element's (or equal), we remove the second element and recursively call the function `findLongestWord`. However, if the second element's length is greater thant the first element's start, then we call the function past the first element.

#### Relevant Links

- [JS Functions](JS-Functions.md)
- [Recursion Basics](https://www.youtube.com/watch?v=k7-N8R0-KY4)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat: 

**`Thanks @Rafase282 @shadowfool @Hallaathrad for your help with Algorithm: Find the Longest Word in a String`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
