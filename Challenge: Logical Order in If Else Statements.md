To solve this exercise we need to notice that using `myTest(4)` gives us "Less than 10" instead of "Less than 5". We have to change the order of our if statements to test for the "Less than 5" case first.

```javascript
function myTest(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
myTest(6);
```
