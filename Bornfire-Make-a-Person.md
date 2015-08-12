# Details

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

When I started the program I figured I just had to create the six functions mentioned inteh details. However, it was not as simple. Creating them as a function was not the right way, I had to male them part of the object by using they keyword **this** and dot notation.

This means instead of ```var varName = function() {/*...*/}``` I had to use ``` this.varName = function() {/*...*/}```

There is also a tricky part as you neec six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong. ```this.fullName = firstAndLast;```

The other issue I had was keeping the uppercase for setlastName, it is important to write the variable names the same. I had a case misssmatch and thus my program was failing to properly change the full name.

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

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

### [Original Wiki](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki)