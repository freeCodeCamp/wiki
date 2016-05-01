![](http://i.imgur.com/g7sWL1I.jpg)

# Problem Explanation:
- You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.

## Hint: 1
- You can use regular Expressions however I didn't in this case.

## Hint: 2
- You will benefit form a chart with all the html entities so you know which ones are the right ones to put.

## Hint: 3
- You should separate the string and work with each character to convert the right ones and then join everything back up.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Basic Solution:

```js
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

// test here
convertHTML("Dolce & Gabbana");
```
:rocket: [REPL It!](https://repl.it/CLnP/0)

## Medium Solution

```js
function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
return str;
}

// test here
convertHTML("Dolce & Gabbana");
```
:rocket: [REPL It!](https://repl.it/CLnQ/0)

## Advanced Solution

```js
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':'&apos;'
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}

// test here
convertHTML("Dolce & Gabbana");
```
:rocket: [REPL It!](https://repl.it/CLnR/0)

# Code Explanation (Advanced Solution):
- Create a object to use the Lookup functionality to easily find the characters.
- Split the original string by characters and use map to check for the changed html entity or use the same one. Alternatively you could use Regex `str.replace(/&|<|>|"|'/gi`.
- The a function is added which is what returns the converted entity or the original one if there is no conversion. If you go the regex route then you just have to return the matched hits. `return html[entity];`
- Lastly we join all the characters once again.

**Note** that if you went the regex route then you don't need to join anything, just make sure you return the whole operation or save it to a variable and then return it.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @jodekirk for your help with Algorithm: Convert HTML Entities`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
