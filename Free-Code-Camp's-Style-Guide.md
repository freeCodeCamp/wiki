# Free Code Camp Style Guide
<small>or How Cool People Write JavaScript.</small>


## indent
  #alwaysUseTwoSpaces

  no hard tabs, ever. No really, just don't do it.

## curly braces
 #curlyBracesEverywhere!

## space after `function` keyword expect in anonymous functions.
Good:
```js
var foo = function() {
  // ...
};

function foo() {
}

```
Bad: 
```js
var foo = function () {
  // ...
};

function foo ()
{
  // ...
}
```
## comments

 * no inline comments
 * single space after `//`
 * Do not use multiline comment `/* */`, we are reserving these for use with jsDocs.

## keywords

 * space immediately after if, else, while, etc
 * opening curly brace should always be on the same line.

Good:
```js
if (true) {
 // do the thing
}
```

Bad:
```js
if(true)
{
 // do the thing
}
```
...more to come