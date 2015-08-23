# Problem Explanation:
You need to take the string and reverse it so if you had originally 'hello', it will turn into 'olleh'. Because you will need to split it, you will be working with Arrays too.

# Hint: 1
- You should split the string by characters.

# Hint: 2
- Find out about the built in function to reverse a string.

# Hint: 3
- Once you have split and reversed, do not forget to join them back into one string.

# Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

# Solution Code:

```
function reverseString(str) {
  var strReverse = str.split('').reverse().join('');

  return strReverse;
}
```

# Code Explanation:
This is a straightforward code. We create a variable that will hold the string split by characters, and then reversed and put back together.
