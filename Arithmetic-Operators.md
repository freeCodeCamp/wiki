# Work in Progress

JavaScript provides the user with five arithmetic operators: `+`, `-`, `*`, `/` and `%`. The operators are for addition, subtraction, multiplication, division and remainder respectively.

### Addition

**Syntax**

`a + b`

**Usage**
```js
2 + 3          // returns 5
true + 2       // interprets true as 1 and returns 3
false + 5      // interprets false as 0 and returns 5
true + "bar"   // concatenates the boolean value and returns "truebar"
5 + "foo"      // concatenates the string and the number and returns "5foo"
"foo" + "bar"  // concatenates the strings and returns "foobar"
```

*Note:* WHen 

### Subtraction
**Syntax** 

`a - b`

**Usage**
```js
2 - 3      // returns -1
3 - 2      // returns 1
false - 5  // interprets false as 0 and returns -5
true + 3   // interprets true as 1 and returns 4
5 + "foo"  // returns NaN (Not a Number)
```

### Multiplication
**Syntax** 

`a * b`

**Usage**
```js
2 * 3                // returns 6
3 * -2               // returns -6
false * 5            // interprets false as 0 and returns 0
true * 3             // interprets true as 1 and returns 3
5 * "foo"            // returns NaN (Not a Number)
Infinity * 0         // returns NaN
Infinity * Infinity  // returns Infinity
```

### Division
**Syntax**

`a / b`

**Usage**
```js
3 / 2                // returns 1.5
3.0 / 2/0            // returns 1.5
3 / 0                // returns Infinity
3.0 / 0.0            // returns Infinity
-3 /                 // returns -Infinity
false / 5            // interprets false as 0 and returns 0
true / 2             // interprets true a 1 and returns 0.5
5 + "foo"            // returns NaN (Not a Number)
Infinity / Infinity  // returns NaN
```