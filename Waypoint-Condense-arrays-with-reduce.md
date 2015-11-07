Reduce can be useful for condensing an array of numbers into one value.

```
var array = [4,5,6,7,8];
var singleVal = 0;
// Only change code below this line.

var singleVal = array.reduce(function(previousVal, currentVal){

  return previousVal+currentVal;

});
```