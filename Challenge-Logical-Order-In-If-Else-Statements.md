# Challenge Logical Order in If Else Statements

Order is important in `if`, `else if` and `else` statements.

The loop is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

## Examples:

```javascript
function foo(x) {
  if (x < 1) {
    return "Less than one";
    } 
  else if (x < 2) {
    return "Less than two";
    } 
  else {
    return "Greater than or equal to two";
    }
}
```

And the second just switches the order of the statements:

```javascript
function bar(x) {
  if (x < 2) {
    return "Less than two";
    } 
  else if (x < 1) {
    return "Less than one";
    }
  else {
    return "Greater than or equal to two";
    }
}
```

While these two functions look nearly identical if we pass a number to both we get different outputs.

```javascript
foo(0) // "Less than one" 

bar(0) // "Less than two"
```

So be careful while using the `if`, `else if` and `else` statements and always remember that these are executed from top to bottom so keep in mind to place your statements accordingly so that you get the desired output.


