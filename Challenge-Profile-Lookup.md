# Challenge Profile Lookup

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

We have an array of objects representing different people in our contacts lists.

A `lookUpProfile()` function that takes **firstName** and a property (**prop**) as arguments has been pre-written for you.

The function should check if **firstName** is an actual contact's **firstName** and the given property (**prop**) is a property of that contact.

If both are true, then return the _value_ of that property.

If **firstName** does not correspond to any contacts then return `No such contact`.

If **prop** does not correspond to any valid properties then return `No such property`.

- Change the code below `// Only change code below this line` and up to `// Only change code above this line`.
- Ensure that you are editing the inside of the `lookUpProfile()` function.
  - This function includes two parameters, **firstName** and **prop**.
- The function should look through the **contacts** list for the given **firstName** parameter.
  - If there is a match found, the function should then look for the given **prop** parameter.
  - If both **firstName** and the associated **prop** are found, you should return the value of the **prop**.
  - If **firstName** is found and no associated **prop** is found, you should return `No such property`.
- If **firstName** isn't found anywhere, you should return `No such contact`.

#### Relevant Links

- [Challenge: Accessing Objects Properties with Bracket Notation](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
- [Challenge: Iterate with JavaScript For Loops](http://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops)

## :speech_balloon: Hint: 1

Use a `for` loop to cycle through the **contacts** list.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Use a nested `if` statement to first check if the **firstName** matches, and then checks `if` the **prop** matches.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Leave your `return "No such contact"` out of the `for` loop as a final catch-all.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === firstName) {
        if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
```

### Code Explanation:

- The `for` loop runs, starting at the first object in the **contacts** list.
- If the **firstName** parameter passed into the function matches the value of the `"firstName"` key in the first object, the `if` statement passes.
- Then, we use `.hasOwnProperty()` method (checks if there's a given property and returns a boolean) with **prop** as an argument. If it's true, the value of **prop** is returned.
  - If the second `if` statement fails, `No such property` is returned.
- If the first `if` statement fails, the `for` loop continues on to the next object in the **contacts** list.
- If the **firstName** parameter isn't matched by the final **contacts** object, the `for` loop exits and `No such contact` is returned.

**Example Run**

- `lookUpProfile("Akira","likes");` runs.
- `"Akira"` is matched to the `"firstName"` key in the first object, so the `if` statement returns true.
- `"likes"` is found within the first object, so the second `if` statement returns true.
- The value of `"likes"` is returned - `"Pizza", "Coding", "Brownie Points"`.

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @leftynaut for your help with Checkpoint: Profile Lookup`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
