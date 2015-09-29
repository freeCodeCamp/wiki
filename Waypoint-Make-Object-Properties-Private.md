Objects have their own attributes, called _properties_, and their own functions, called _methods_.

You can use the `this` keyword to reference _public properties and methods_ of the current objects. However, when You need to create private ones, so they are not accessible from the outside of the object.

For that, you just remove the keyword `this` from the object property or method declaration.

```
var Bike = function() {
  speed = 100; // private
  function addUnit(value) { // private
    return value + "KM/H";
  }

  this.getSpeed = function () {  // public
    return addUnit(speed);
  };

};
```