# Author
![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128)

Submitted by Rafase282

[Github](https://github.com/Rafase282) | [FreeCodeCamp](http://www.freecodecamp.com/rafase282) | [CodePen](http://codepen.io/Rafase282/) | [LinkedIn](https://www.linkedin.com/in/rafase282) | [Blog/Site](https://rafase282.wordpress.com/) | [My Wiki](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)

# Explanation:
The function is a whole Boolean operation. You need to return true if the first argument ends with the second argument. This means that for the problem script, it should return true for the `end('Bastian', 'n'); case.`

## Hint: 1
Take a look at how substr() works. You will be trying to get the last Nth characters.

## Hint: 2
To get the Nth-to-Last character you will use length() and turn it into a negative number.

## Hint: 3
Check that you have the proper syntax and that you use `===` to compare.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## My code:

```
function end(str, target) {
    if (str.substr(- target.length) === target)
        return true;
    else
        return false;
}
```

# My Code Explanation:
We use the subtring() with the negative value of the lengths of target. We could use -1 to get the last element but if the target is actually longer than one letter then the program will provide the wrong information. The we return true or false as needed.

# If you enjoyed this guide, then type:
`thanks @Rafase282` in the chat!
