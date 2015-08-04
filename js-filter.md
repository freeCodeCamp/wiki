The `filter()` method creates a new array with all elements that pass the test implemented by the provided function

```js
arr.filter(callback[, thisArg])
```

|          | Parameter                           |
|----------|-------------------------------------|
| Required | Arr                                 |
| Required | callback (function with max 3 args) |
| Optional | thisArg                             |

**Return:** A new array that contains all the values for which the callback function returns true. If the callback function returns false for all elements of array1, the length of the new array is 0.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | [MSDN link](https://msdn.microsoft.com/library/ff679973%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)

## Examples
```js
// Define a callback function.
function CheckIfPrime(value, index, ar) {
    high = Math.floor(Math.sqrt(value)) + 1;
    
    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        }
    } 
    return true;
}

// Create the original array.
var numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53];

// Get the prime numbers that are in the original array. 
var primes = numbers.filter(CheckIfPrime);

document.write(primes);
// Output: 31,37,41,43,47,53
```

```js
// Create the original array.
var arr = [5, "element", 10, "the", true];

// Create an array that contains the string
// values that are in the original array.
var result = arr.filter(
    function (value) {
        return (typeof value === 'string');
    }
);

document.write(result);
// Output: element, the
```