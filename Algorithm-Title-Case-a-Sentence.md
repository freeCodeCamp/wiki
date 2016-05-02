# Explanation:
We have to return a sentence with camel case. This means that the first letter will always be in uppercase and the rest lowercase.

## Hint: 1
- You should start by splitting the string into an array of words.
- Split the sentence.

## Hint: 2
- You should make the word lowercase before making the first letter uppercase.
- Use replace method on each word to capitalize the first letter of each word.

## Hint: 3
- You will need to create a new string with pieces of the previous one and at the end merge everything into a single string again.
- In replace method , give first argument as the position of the first letter using charAt. For second argument write a function to return the capitalized letter as the replacement.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};


function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}
```

:rocket: [REPL It!](https://repl.it/CLjU/8)

### Code Explanation:
We are modifying the `replaceAt` function using prototype to facilitate the use of the program.

Split the string by whitespaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by it's uppercase.

## Second Solution:

```js
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
```

:rocket: [REPL It!](https://repl.it/CLjU/9)

### Code Explanation:
We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using `join` method.

## Third Solution:

```js
function titleCase(str) {
  var newstr=str.toLowerCase().split(" ");
  for(var i=0;i<newstr.length;i++){
  var f=newstr[i].charAt(0);
 newstr[i]=newstr[i].replace(newstr[i].charAt(0),function replace(f){
   return f.toUpperCase();
 });

  }
  console.log(newstr);
  return newstr.join(" ");
}

titleCase("hello world");
```

:rocket: [REPL It!](https://repl.it/CLjU/11)

## Fourth Solution:

```js
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i in str) {
    str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
  };
  return str.join(' ');
}

titleCase("I'm a little tea pot", "");
```

:rocket: [REPL It!](https://repl.it/CLjU/12)

## Fifth Solution:

```js
function titleCase(str) {
  return str.replace(/\w\S*/g, function(word){
    return word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot", "");
```

:rocket: [REPL It!](https://repl.it/CLjU/13)

## Sixth Solution:

```js
function titleCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
```

:rocket: [REPL It!](https://repl.it/CLjU/14)

### Code Explanation:
**Brief**: The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

**Detail**:

- Lowercase the whole string using `str.toLowerCase()`. See  [**`String.prototype.toLowerCase`**](http://devdocs.io#q=js+String+toLowe
rCase)
- Replace every word' first character to uppercase using `.replace`. See  [**`String.prototype.replace`**](http://devdocs.io#q=js+String+replace)
- Search for words and a lowercase character at the beginning of each word i.e. matching any lowercase character following a `space` or matching the first character of the whole string, by using the following pattern.
- Regex explanation: See [**`Regex Pattern`**](http://regex101.com/)
 - `( |^)` matches a `space` character or beginning of the whole string (`^`).
 - `[a-z]` matches a single character in the range between a to z (case sensitive i.e. lowercase).
- The `g` modifier searches for other such word pattern in the whole string and replaces them.

### Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:
**`Thanks @Rafase282 @PoojaKumar @Hallaathrad @abhisekp @ksharifbd for your help with Algorithm: Title Case a Sentence`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
