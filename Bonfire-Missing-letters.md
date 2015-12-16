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
####First:

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
```

# Code Explanation:
- Read comments in code.

####Second:

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

// Another take on the same solution
function fearNotLetter(str) {
/* We iterate using two different variables, the regular index one and char
which starts with the starting escaped character and that needs to increase by 1 */
  for (var i = 0, char = str.charCodeAt(0); i < str.length; i++, char++) {
    if (str.charCodeAt(i) !== char) {
    /* If char has not increased in the same ratio than index, we found the missing char */
      return String.fromCharCode(char);
    }
  }
}


```
# Code Explanation:
- Read comments in code.

####Third:
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
```

# Code Explanation:
- Increase loop index only when you have found all the missing letters between current and next letter
- Every time you find a missing letter push it to `missingchars`

###Forth:
```js
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');
  for (var i=0;allChars[allChars.length-1] !== str[str.length-1] ;i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0)+i);
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}
```

# Code Explanation:
- Create a new String that consists all the letters in the range
- Create a Regular Expression for anything except `str`
- Use `match()` to strip off the `str` letters from your newly created String


# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282`**
**`thanks @rohitnwn @sabahang`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
