# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) 
submitted by Rafase282 

[Github](https://github.com/Rafase282) |
[FreeCodeCamp](http://www.freecodecamp.com/rafase282) | 
[CodePen](http://codepen.io/Rafase282/) |
[LinkedIn](https://www.linkedin.com/in/rafase282) |
[My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

## Details

* Difficulty: 3/5

Fill in the object constructor with the methods specified in the tests.

Those methods are:

* getFirstName()
* getLastName()
* getFullName()
* setFirstName(first)
* setLastName(last)
* setFullName(firstAndLast)

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

## Useful Links

* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [Details of the Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)


## Problem Script:

```
var Person = function(firstAndLast) {
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
```

## Explanation:

When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not as simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong. 

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

Read the instructions carefully, it is always a good hint on itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.

## Hint: 1

Use the **this** notation to create the keys instead of regular functions: This means instead of ```var varName = function() {/*...*/}``` you should use ``` this.varName = function() {/*...*/}```

## Hint: 2

The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means if you need to work with variables, make them local and not a key: ```this.fullName = firstAndLast;```

## Hint: 3
Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way. This happens to all of us at some point.

## My code

Please try hard before you check this solution.

```
var Person = function(firstAndLast) {
    
    var fullName = firstAndLast;
    var arr = fullName.split(' ');
    
    this.getFirstName = function() {
        return arr[0];
    };
    this.getLastName = function() {
        return arr[1];
    };
    this.getFullName = function() {
        return fullName;
    };
    this.setFirstName = function(first) {
        arr[0] = first;
    };
    this.setLastName = function(last) {
        arr[1] = last;
    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
    };
};
```
## My Code Explanation:

* Create a variable that will make a copy of the full name that was passed as a parameter.
* Create another variable that will split that full name into first and last name array.
* Then we can proceed to create the six keys needed and return what is needed.
* For the setters, we can use the arr array and the right index to change the value to what was passed as a parameter.