# Problem Explanation:
- You need to create a program that will translate from English to Pig Latin. Check the instructions for converting to Pig Latin from the initial description or the wiki page. It might not be obvious but you need to remove all the consonants up to the first vowel in the case there letter does not start with a vowel.

## Hint: 1
- You will probably want to use regular expressions. This will allow you to convert the words easily.

## Hint: 2
- If the first character is a vowel, then take that whole word and add 'way' at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add 'ay'. This is where I had trouble since it was not clear that it was not just the first consonant but all of them before the first vowel.

## Hint: 3
- You will need to use everything you know about string manipulation to get the last part right. However, it can be done with `substr` alone.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

### Solution #1
```js
function translate(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
```

### Solution #2
```js
function translate(str) {
  //finding all the consonants in the beginning of the str. 
  //by using && below I'm achiving a concept called Intersection of Regular Expressions
  //where your pattern finds the union of two or more RegEx rules. 
  //In Java you can achive this with RegEx special character '&&' 
  //but in Javascript you can use the following instead. 
  //Credit goes to http://stackoverflow.com/q/6595477
  var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');
  
  //if no consonants found (i.e. str starts with vowels)
  //use replace to remove consonants and construct newStr else add 'way' in the end
  if (consChars !== ''){
    newStr = str.replace(consChars, '') + consChars + "ay";
  } else {
    newStr = str + "way";
  }
  return newStr;
}
```

### Solution #3
```js

function translate(str) {
    var strArr = [];
    var tmpChar;
    
    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else 
        strArr = str.split("");
        
    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

translate("consonant");
```

# Code Explanation:
- Read comments on code.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @sabahang @aganita`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
