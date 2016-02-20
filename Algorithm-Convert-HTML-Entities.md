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

## Code Solution:

```js
function convert(str) {
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
```

##Another Solution
```js
function convert(str) {
    
    //map of key:value pairs
    var html = {
       "&":"&amp;",
       "<":"&lt;",
       ">":"&gt;",
       "\"":"&quot;",
       "\'":"&apos;"
    };
        str = str.replace(/&|<|>|"|'/gi, function(matched){
        return html[matched];
        });

  return str;
}
```

##Another Solution
```js
function convert(str) {
    
    //map of key:value pairs
    var dictionary = {
       "&":"&amp;",
       "<":"&lt;",
       ">":"&gt;",
       "\"":"&quot;",
       "\'":"&apos;"
    };
 
    // Allows for a dynamic collection of key:value pairs
    var regex = new RegExp(Object.keys(dictionary).join("|"), "gi");
    return str.replace(regex, function(key) {
        return dictionary[key];
    });
}
```

##Another Solution
```js
function convert(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
return str;
}
```
# Code Explanation:
- Read comments in code.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @jhalls for your help with Algorithm: Convert HTML Entities`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
