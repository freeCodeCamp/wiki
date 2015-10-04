# The problem
Remove all falsy values from an array.
Falsy values in javascript are false, null, 0, "", undefined, and NaN.

For example: `bouncer([7, "ate", "", false, 9], ""); must return [7, "ate", 9]`

We are encouraged to use these 2 links:

[Boolean Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Analysis
We need to return an array that has been modified with the filter() method to remove the elements that we deem falsy values. We define these as false, null, 0, "", undefined, and NaN.

## Understanding the Boolean object
Passing an initial value to a Boolean object converts this value to a Boolean value. This Boolean value will be false if the value is 0, -0, null, false, NaN, undefined, or the empty string (""). The Boolean value will be true for any other value. The false instances cover all the cases we must consider falsy values. 

## Understanding the filter() method
The filter method takes the argument of a custom callback functions. The filter method loops through all the elements of an array, and runs the custom callback function to determine whether or not to keep the element in the array. If your custom function returns true, it keeps the element in the array. If it returns false, it removes the element from the array.

So build a custom callback function that tests if a particular element returns a Boolean object evaluating to false. Call this function from the filter() method.

## :construction: My Solution is coming up!
Don't scroll down if you don't want to see it!

![warning](http://www.yourdrum.com/yourdrum/images/2007/10/10/red_warning_sign_2.gif)        

```
           ,,,         ,,,
          ;"   ^;     ;'   ",
          ;    s$$$$$$$s     ;
          ,  ss$$$$$$$$$$s  ,'
          ;s$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$
         $$$$P""Y$$$Y""W$$$$$      -{ Happy Camping! }
         $$$$  p"$$$"q  $$$$$
         $$$$  .$$$$$.  $$$$
          $$DcaU$$$$$$$$$$
            "Y$$$"*"$$$Y"    
                "$b.$$"
```

## Code Solution:

```javascript
function bouncer(arr) {
  // callback function for filter method
  function noFalsy(value) {
  // Retreive primitive Boolean value based on the element in array currently being tested via filter method
  // This primitive Boolean value equates to false if the value being added is omitted or is 0, -0, null, false, NaN, undefined, or ""
  var x = new Boolean(value);
  if (x == false)
//returning false to the filter method removes the element from the array
    return false;
  //returning true to the filter method keeps the element in the array
  else
    return true;
  }
  //return the array after modifying it with the filter method
  return arr.filter(noFalsy); 
}
bouncer([7, "ate", "", false, 9], "");
```

# References
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @jones-codes`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)