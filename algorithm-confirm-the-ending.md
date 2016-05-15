### We can use ES6 for this algorithm
 * [method endsWith()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
 
 
```javascript
function confirmEnding(str, target) {
 if (str.endsWith(target)) {
    return true;
  } else {
    return false;
  } 
}
