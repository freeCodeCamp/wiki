:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :memo:

# :checkered_flag: Problem Explanation:
- You need to write a function, which will take a string encoded with
*Caesar cipher* as a parameter and decode it.
- The one used here is ROT13 where the value of the letter is
shifted by 13 places.
e.g. 'A' ↔ 'N', 'T' ↔ 'G'.
- You have to shift it back 13 positions, such that 'N' ↔ 'A'.

## :speech_balloon: Hint: 1
Use *String.charCodeAt()* to convert the English character to ASCII.

> *try to solve the problem now*

## :speech_balloon: Hint: 2
Use *String.fromCharCode()* to convert ASCII to English character.

> *try to solve the problem now*

## :speech_balloon: Hint: 3
Leave anything that doesn't come between A-Z as it is.

> *try to solve the problem now*

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```js
function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}
```

:rocket: [REPL It!](https://repl.it/CLjU/38)

### Code Explanation:
- A string variable `nstr` is declared and initialized to store the
decoded string.
- The for loop is used to loop through each character of the input string.
- If the character is not uppercase English alphabets(i.e. its ascii doesn't lie between 65 and 91 ), we'll leave it
as it is and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) with next iteration.
- If it's the uppercase English alphabet, we'll subtract 13 from it's
ascii code.
- If the ascii code is less than 78, it'll get out of
range when subtracted by 13 so we'll add 26 (number of letters in English alphabets) to it so that after A it'll go back to Z.
e.g. M(77) ↔ 77-13 = 64(Not an English alphabet) +26 = 90 ↔ Z(90)


## :sunflower: Intermediate Code Solution:

```js
//Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  //retCharArray is an Array of character codes for the solution
  var rotCharArray = [];
  //regular expression for all upper case letter from A to Z
  var regEx = /[A-Z]/ ;
  //split str into a character array
  str = str.split("");
  //iterate over each character in the array
  for (var x in str) {
    //regEx.test(str[x]) will return (true or false) if it maches the regEx or not
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic 
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  //make a string with character codes from an array of character codes
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}


// Change the inputs below to test
rot13("LBH QVQ VG!");
```

:rocket: [REPL It!](https://repl.it/CLjU/39)

## :rotating_light: Advanced Code Solution:

```js
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) => String.fromCharCode(65 + (L.charCodeAt(0) - 65 + 13) % 26));
}
```
### Code Explanation:
>- `String.prototype.replace` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) lets you transform a `String` based on some pattern match (defined by a regular expression), and the [transformation function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) (which is applied to each of the pattern matches).
- [Arrow function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) syntax is used to write the function parameter to `replace()`.
- `L` represents a single unit, from every pattern match with `/[A-Z]/g` - which is every uppercase letter in the alphabet, from `A` to `Z`, present in the string.
- The arrow function applies the `rot13` transform on every uppercase letter from English alphabet present in the given string.

### :trophy: Credits:
If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`thanks @anuragaryan @SaintPeter @vaskezu @abhisekp for your help with Algorithm: Caesar's Cipher`**

## :clipboard: NOTE TO CONTRIBUTORS:
- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is ***similar but better***, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: ***DO NOT*** *remove any existing usernames*)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
