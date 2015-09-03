# Explanation:
We need to reduce the length of the string or **truncate** it if it is longer than the given maximum lengths specified and add `...` to the end. If it is not that long then we keep it as is.

## Hint: 1
Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

## Hint: 2
You will need to use slice and specify where to start and where to stop.

## Hint: 3
Do not forget that when we truncate the word, we also must count the length added by `...`

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```
function truncate(str, num) {
  if (str.length > num) {
    str = str.slice(0, num-3) + '...';
  }
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
```

# Code Explanation:
First we need a conditional if statement to test if the length of the full string passed in as the first argument is greater than the maximum passed in as the second argument.

```
if (str.length > num)
```

Then we need to slice the full string at the length required (second argument). The trick is to minus the length of the ... that needs to be added to get the final truncated string.

```
str = str.slice(0, num-3)
```

Finally, just add the ... to the end of the sliced substring ready to be returned

```
str = str.slice(0, num-3) + '...';
```

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @richyvk @Rafase282`
