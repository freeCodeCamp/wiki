# Algorithm DNA Pairing

![](https://i.imgur.com/usiNBDU.jpg)

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

- You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

#### Relevant Links

- [Array.push()](JS-Array-Prototype-Push)
- [String.split()](JS-String-Prototype-Split)

## :speech_balloon: Hint: 1

- There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

- I would recommend using a switch, as it makes things a lot smoother.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

- The result must be an array of arrays, so keep that in mind when pushing things.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
```

:rocket: [Run Code](https://repl.it/CLmz/0)

### Code Explanation:

- The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
- Since we have to the original and the pair, I decided to take all four cases instead of the base two.
- Create an empty array and use the `search` function to push the right values to the array and return them.

#### Relevant Links

- [Switch Statements](Challenge-Selecting-From-Many-Options-With-Switch-Statements)

## :sunflower: Intermediate Code Solution:

```javascript
function pairElement(str) {
  //define a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// test here
pairElement("GCG");
```

:rocket: [Run Code](https://repl.it/CLnA/0)

## Code Explanation:

- First define an object with all pair possibilities, this allows us to easily find by key or value.
- Split `str` into a characters array so we can use each letter to find its pair.
- Use a loop to go throw the array of characters and replace each character by an array of the pair, thus creating 2d arrays.

#### Relevant Links

- [Bracket Notation for objects](Challenge-Accessing-Objects-Properties-With-Bracket-Notation)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`thanks @Rafase282 @sabahang for your help with Algorithm: DNA Pairing`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
