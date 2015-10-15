#:fire: Bonfire: Falsy Bouncer

# The problem

Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

```javascript
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

## Analysis
Using ![Array.filter(_callback_)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to remove elements from an array.

The _callback_ function is called for each array element to check if it will be filtered (removed).

## Example
```javascript
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

## :warning: My Solution is coming up!
Don't scroll down if you don't want to see it!
     

```
                           10...
                        9...
                     8...
                  7...
               6...
            5...
         4...
      3...
   2...
1...

GO!!!
   
```

## Code Solution:

```javascript
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isNotFalsy(value) {
      return value;
  }

  var myArr = arr.filter(isNotFalsy);

  return myArr;
}
```

# References
- **Array.filter()**: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- **Gorka Hernández Blog**: [https://www.gorkahernandez.com/blog/fcc-bonfire-series-115-falsey-bouncer/](https://www.gorkahernandez.com/blog/fcc-bonfire-series-115-falsey-bouncer/)


# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:
`Thanks @StrongeLeeroy @HelioGuilherme66`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)

