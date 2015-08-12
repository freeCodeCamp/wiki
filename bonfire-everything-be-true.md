# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# Details

* Difficulty: 2/5

Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).

For this, check to see if the property defined in the second argument is present on every element of the collection.

Remember, you can access object properties through either dot notation or [] notation.

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [Object.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
* [Object.getOwnPropertyNames()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

# Problem Script:
```
function every(collection, pre) {
  // Does everyone have one of these?
  return pre;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');

```
# Explanation:

soon

## Hint: 1

soon

## Hint: 2
soon

## Hint: 3
soon

# My Code:
```
function every(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
  	// If it has the same property or the same property value then add 1
    if (collection[c].hasOwnProperty(pre) || collection[c][pre] == pre){ counter++;}
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  if (counter == collection.length) {
    return true;
  } else 
    return false;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa',
'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
```

## [Go Home](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)