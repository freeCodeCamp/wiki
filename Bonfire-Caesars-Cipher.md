# Problem Explanation:
- You need to write a function, which will take string encoded with
*Caesar cipher* as a parameter and decode it.
- The one used here is ROT13 where the value of the letter is
shifted by 13 places.
e.g. 'A' ↔ 'N', 'T' ↔ 'G'.
- You have to shift it back 13 positions, such that 'N' ↔ 'A'.

## Hint: 1
Use *String.charCodeAt()* to convert the English character to ASCII.


## Hint: 2
Use *String.fromCharCode()* to convert ASCII to English character.

## Hint: 3
Leave anything that doesn't come between A-Z as it is.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
#### First solution

```js
function rot13(str) {
    var nstr="";
    for(var i=0; i<str.length; i++){
        //Checks if character lies between A-Z
        if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
            nstr += String.fromCharCode(str.charCodeAt(i));
            continue;
        }
        //If the ASCII gets out of range add 26 to it. (ASCII+26-13)
        if(str.charCodeAt(i) < 78){
            nstr += String.fromCharCode(str.charCodeAt(i) + 13);
        }
        else{
            //Shift the character 13 places backward
            nstr += String.fromCharCode(str.charCodeAt(i) - 13);

        }
    }

    return nstr;
}
```

# Code Explanation:
#### First solution
- A string variable nstr is declared and initialized to store the
decoded string.
- The for loop is used to loop through each character of the input string.
- If the character is not uppercase English alphabets(i.e. its ascii doesn't lie between 65 and 91 ), we'll leave it
as it is and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) with next iteration.
- If it's the uppercase English alphabet, we'll subtract 13 from it's
ascii code.
- If the ascii code is less than 78, it'll get out of
range when subtracted by 13 so we'll add 26(number of letters in
        English alphabets) to it so that after A it'll go back to Z.
e.g. M(77) ↔ 77-13 = 64(Not an English alphabet) +26 = 90 ↔ Z(90)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @anuragaryan for your help with Bonfire: Caesar's Cipher`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
