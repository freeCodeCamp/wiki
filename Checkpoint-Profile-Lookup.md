# Details
We will now use our knowledge about how to iterate with for loops and access our object properties.

We have an array of objects representing different people in our contacts lists.

A lookUp function that takes firstName and a property (prop) as arguments has been pre-written for you.

The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If firstName does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties then return "No such property"

Remember to use [ Read-Search-Ask](http://github.com/FreeCodeCamp/freecodecamp/wiki/How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

## Useful Links
- [Waypoint: Iterate Through an Array with a For Loop](http://www.freecodecamp.com/challenges/waypoint-iterate-through-an-array-with-a-for-loop)
- [Waypoint: Accessing Objects Properties with the Dot Operator](http://www.freecodecamp.com/challenges/waypoint-accessing-objects-properties-with-the-dot-operator)
- [Waypoint: Accessing Objects Properties with Bracket Notation](http://www.freecodecamp.com/challenges/waypoint-accessing-objects-properties-with-bracket-notation)

## Problem Explanation:
- Change the code below `// Only change code below this line` and above `// Only change code above this line`
- Take note that you are editing the inside of the `lookUp` function.
- You will pass in two parameter `firstName` and `prop`. The function should return the contact `object` that corresponds to `firstName` and the given property `prop`.

## Hint: 1
- Declare a new variable where you can store results while you are iterating through contacts.

## Hint: 2
- Create multiple if statements inside your for loop to check if the requiring conditions are returning `true`.

## Hint: 3
- Make use of the method `.hasOwnProperty()`.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function lookUp(firstName, prop){
// Only change code below this line
var noContactFound = false;
for (var i = 0; i < contacts.length; i++){
  if (contacts[i].firstName === firstName){
    if(contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop];
    }
        return "No such property";
  } else {
      noContactFound = true;
    }
}
if(noContactFound){
  return "No such contact";
}
// Only change code above this line
}

// Change these values to test your function
lookUp("Akira", "likes");
```

# Code Explanation:
- Variable "noContactFound" will store a boolean value equal to `true` if contact is not found.
- Looping through the objects stored in `contacts` using For loop.
- The if statement checks if our parameter `firstName` is equal to any firstName property from the four objects.
- If a contact is found then continue to our second `if condition` that checks if the contact has a property equal to our parameter `prop` by using the `.hasOwnProperty(prop)` method.
- If no properties are found from our current contact return string `No such property`.
- If no contact was matching our parameter `firstName` then set the variable "noContactFound" to `true`.
- And finally outside our for loop we check if variable "noContactFound" is returning `true;` if so return string `"No such contact"`.

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @osterbergmarcus`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
