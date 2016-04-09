# Checkpoint: Record Collection

***Instructions***

You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.

Write a function which takes an **id**, a property (**prop**), and a **value**.

For the given **id** in **collection**:

If **value** is non-blank (**value !== ""**), then update or set the **value** for the **prop**.

If the **prop** is **"tracks"** and **value** is non-blank, push the **value** onto the end of the **tracks** array.

If **value** is blank, delete that **prop**.

Always return the entire collection object.

Remember to use [ Read-Search-Ask](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

## Useful Links
- [Challenge: Accessing Objects Properties with Bracket Notation](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
- [Challenge: Add New Properties to a JavaScript Object](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
- [Challenge: Delete Properties from a JavaScript Object](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
- [Challenge: Accessing Nested Objects in JSON] (http://www.freecodecamp.com/challenges/accessing-nested-objects-in-json)

## Problem Explanation:
- Change the code below `// Only change code below this line` and up to `// Alter values below to test your code`
- Take note that you are editing the inside of the `updateRecords` function
- For the given `id` parameter, which is associated to the `collection` object:
  - If the `value` parameter isn't an empty string, update (or set) the `value` parameter for the `prop` parameter
  - If the `prop` parameter is equal to `"tracks"` and the `value` isn't an empty string, push the `value` onto the end of the `tracks` array
  - If `value` is an empty string, delete that `prop` from the object
- Finally, return the `collection` object

## Hint: 1
- Use an `else if` statement to check the needed steps.

## Hint: 2
- The second step listed in the instructions should be first in your `else if` statement.

## Hint: 3
- To access the value of a key in this object, you will use `collection[id][prop]`

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    collection[id][prop].push(value);
  } else if (value !== ""){
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}
```

# Code Explanation:
- First checks if `prop` is equal to `tracks` AND if `value` isn't a blank string. If both tests pass, `value` is pushed into the `tracks` array.
- If that first check doesn't pass, it next checks only if `value` isn't a blank string. If that test passes, either a new key (`prop`) and value (`value`) are added to the object, or an existing key is updated if the `prop` already exists.
- If both these checks fail (meaning `value` must be an empty string), then the key (`prop`) is removed from the object.

***Example Run***
- `updateRecords(5439, "artist", "ABBA");` runs
- `prop` is equal to "artist", not "tracks", so the first part of the `else if` statement fails
- `value` is not a blank string, so the second part of the else if statement passes
- `artist: "ABBA"` is added to the `5439` `id`


# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @leftynaut for your help with Checkpoint: Record Collection`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
