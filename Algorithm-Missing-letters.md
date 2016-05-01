# Problem Explanation:
- You will create a program that will find the missing letter from a string and add it. If there is not missing letter it will return undefined. There is currently no test case for it missing more than one letter, but if anything recursion can be implemented or a second or more calls to the same function as needed. Also the letters are always provided in order so there is no need to sort them.

## Hint: 1
- You will need to convert from character to ASCII code using the two methods provided in the description.

## Hint: 2
- You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.

## Hint: 3
- You will need to figure out where to insert the letter and how to do it, along with handling the case that there is not missing letter as it needs an specific return value.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
### First solution:

```js
function fearNotLetter(str) {
  // Create our variables.
  var firstCharacter = str.charCodeAt(0);
  var valueToReturn = '';
  var secondCharacter = '';

  // Function to find the missing letters
  var addCharacters = function(a, b) {
    while (a - 1 > b) {
      b++;
      valueToReturn += String.fromCharCode(b);
    }
    return valueToReturn;
  };

  // Check if letters are missing in between.
  for (var index = 1; index < str.length; index++) {
    secondCharacter = str.charCodeAt(index);

    // Check if the diference in code is greater than one.
    if (secondCharacter - firstCharacter > 1) {
      // Call function to missing letters
      addCharacters(secondCharacter, firstCharacter);
    }

    // Switch positions
    firstCharacter = str.charCodeAt(index);
  }

  // Check whether to return undefined or the missing letters.
  if (valueToReturn === '')
    return undefined;
  else
    return valueToReturn;
}

// test here
fearNotLetter("abce");
```
:rocket: [REPL It!](https://repl.it/CLnC/0)

### Second solution:

```js
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first charcter + no of iteration
    hence character has been escaped*/
    if ( code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return*/
      return String.fromCharCode(code-1);
    }  
  }
  return undefined;
}

// test here
fearNotLetter("abce");
```
:rocket: [REPL It!](https://repl.it/CLnD/0)

### Third solution (Declarative)

```js
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index){
    if (str.charCodeAt(index) == compare) { ++compare; }
    else { missing = String.fromCharCode(compare); }
  });

  return missing;
}

// test here
fearNotLetter("abce");
```
:rocket: [REPL It!](https://repl.it/CLnE/0)

### Fourth solution:

```js
function fearNotLetter(str) {
  var strArr = str.split('');
  var missingChars = [], i = 0;
  var nextChar = String.fromCharCode(strArr[i].charCodeAt(0)+1);
  while (i<strArr.length - 1) {
    if (nextChar !== strArr[i+1]){
      missingChars.push(nextChar);
      nextChar = String.fromCharCode(nextChar.charCodeAt(0)+1);
    } else {
      i++;
      nextChar = String.fromCharCode(strArr[i].charCodeAt(0)+1);
    }
  }
  return missingChars.join('') === '' ? undefined : missingChars.join('') ;
}

// test here
fearNotLetter("abce");
```
:rocket: [REPL It!](https://repl.it/CLnF/0)

### Fifth solution:

```js
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');
  for (var i=0;allChars[allChars.length-1] !== str[str.length-1] ;i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0)+i);
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");
```
:rocket: [REPL It!](https://repl.it/CLnG/0)

# Code Explanation:
## First and second solutions:
- Read comments in code.

## Third solution (Declarative):
- First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
- We turn the string to an array in order to map through it instead of using those nasty `for` and `whiles` (See [this article](http://www.sitepoint.com/quick-tip-stop-writing-loops-start-thinking-with-maps/) for refence as to why. And give it a serious try. Really... you'll thank me for it.
- (If you're not sure how to `map`, you can review [Challenge: Iterate over arrays with map] ](http://www.freecodecamp.com/challenges/iterate-over-arrays-with-map) and [MDN's reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).
- As we `map` through our letters' character codes, we go comparing with the one that should be in that position.
- If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
- if not, the missing letter will be assigned to the `missing` variable, which will be returned after the map is finished.

## Fourth solution:
- Increase loop index only when you have found all the missing letters between current and next letter
- Every time you find a missing letter push it to `missingchars`

## Fifth solution:
- Create a new String that consists all the letters in the range
- Create a Regular Expression for anything except `str`
- Use `match()` to strip off the `str` letters from your newly created String

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @rohitnwn @sabahang @Hallaathrad for your help with Algorithm: Missing Letters`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
