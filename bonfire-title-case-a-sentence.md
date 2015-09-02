# Author
![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128)

Submitted by Rafase282

[Github](https://github.com/Rafase282) | [FreeCodeCamp](http://www.freecodecamp.com/rafase282) | [CodePen](http://codepen.io/Rafase282/) | [LinkedIn](https://www.linkedin.com/in/rafase282) | [Blog/Site](https://rafase282.wordpress.com/) | [My Wiki](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)

# Explanation:
We have to return a sentence with camel case. This means that the first letter will always be in uppercase and the rest lowercase.

## Hint: 1
You should start by splitting the string into an array of words.

## Hint: 2
You should make the word lowercase before making the first letter uppercase.

## Hint: 3
You will need to create a new string with pieces of the previous one and at the end merge everything into a single string again.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## My code:

```
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

# My Code Explanation:
We are modifying the `replaceAt` function using prototype to facilitate the use of the program.

Split the string by whitespaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by it's uppercase.

# If you enjoyed this guide, then type:
`thanks @Rafase282 in the chat!`

# new set of hints(by PoojaKumar)
# hint 1 : split the sentence.
# hint 2 : use replace method on each word to capitalize the first letter of each word. 
   spoiler ahead!
# hint 3 : in replace method , give first argument as the position of the first letter using charAt. For second argument write a function to return the capitalized letter as the replacement.


# My code

 ```
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

