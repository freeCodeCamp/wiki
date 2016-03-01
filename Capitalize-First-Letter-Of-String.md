# Capitalize the First Letter of a String

To capitalize the first letter of a random string, you should follow these steps:
1. Get the first letter of the string;
2. Convert the first letter to uppercase;
3. Get the remainder of the string;
4. Concatenate the first letter capitalized with the remainder of the string and return the result;

### 1. Get the First Letter of the String

You should use [charAt()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/js-String-prototype-charAt) method, at *index 0*, to select the first character of the string.

```javascript
var string = "freecodecamp";

string.charAt(0); // Returns "f"
```

### 2. Convert the First Letter to uppercase

You should use [toUpperCase()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/js-String-prototype-toUpperCase) method and convert the calling string to uppercase.

```javascript
var string = "freecodecamp";

string.charAt(0).toUpperCase(); // Returns "F"
```

### 3. Get the Remainder of the String

You should use [slice()](https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice) method and get the remainder of the string (from the second character, *index 1*, to the end of the string).

```javascript
var string = "freecodecamp";

string.slice(1); // Returns "reecodecamp"
```

### 4. Return the result adding the first letter and the remainder of the string

You should create a function that accepts a string as only argument and returns the concatenation of the first letter capitalized `string.charAt(0).toUpperCase()` and the remainder of the string `string.slice(1)`.

```javascript
var string = "freecodecamp";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

capitalizeFirstLetter(string); // Returns "Freecodecamp"
```

Or you should add that function to the `String.prototype` and chain it with other methods.

```javascript
var string = "freecodecamp";

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + str.slice(1);
}

string.capitalizeFirstLetter(); // Returns "Freecodecamp"
```

#### Source

[stackoverflow - Capitalize the first letter of string in JavaScript](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087)
