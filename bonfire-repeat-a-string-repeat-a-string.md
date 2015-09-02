# Author
![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128)

Submitted by Rafase282

[Github](https://github.com/Rafase282) | [FreeCodeCamp](http://www.freecodecamp.com/rafase282) | [CodePen](http://codepen.io/Rafase282/) | [LinkedIn](https://www.linkedin.com/in/rafase282) | [Blog/Site](https://rafase282.wordpress.com/) | [My Wiki](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)

# Explanation:
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

## Hint: 1
You can't edit strings, you will need to create a variable to store the new string.

## Hint: 2
Create a loop to repeated the code as many times as needed.

## Hint: 3
Make the variable created store the current value and append the word to it.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## My code:

```
function repeat(str, num) {
    var accumulatedStr = "";
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}
```

# My Code Explanation:
- Create a variable to store the repeated word.
- Use a while loop or for loop to repeat code as many times as needed according to `num`
- The we just have to add the string to the variable created on step one. and increase or decrease num depending on how you set the loop.
- At the end of the loop, return the variable for the repeated word.

# If you enjoyed this guide, then type:
`thanks @Rafase282` in the chat!
