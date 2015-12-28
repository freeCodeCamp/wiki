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

Second Solution:

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

Third Solution:

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

Minimal Solution:

```js
function titleCase(str) {
  return str.replace(/\w\S*/g, function(word){
    return word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();}); 
}

titleCase("I'm a little tea pot", "");
```

Minimaler Solution:

```js
function titleCase(s) {return s.toLowerCase().replace(/^[a-z]|\s[a-z]/g, function(m){return m.toUpperCase()})}
```

# Code Explanation:
We are modifying the `replaceAt` function using prototype to facilitate the use of the program.

Split the string by whitespaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by it's uppercase.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: **`Thanks @Rafase282 @PoojaKumar @Hallaathrad for your help with Bonfire: Title Case a Sentence`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)