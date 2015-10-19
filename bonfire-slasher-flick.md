# The problem
Return the remaining elements of an array after chopping off n elements from the head. Factorials are often represented with the shorthand notation n!

For example: `slasher([1, 2, 3], 2);` must return [3]

## Analysis
Since we need only the remaining part of an array we can just remove what we don't.

## Understanding slicing
Slice allows to get only what you want from an array.

## Understanding the splice
If you want the **tail** of a snake remove the head first. The splice() method changes the content of an array by removing existing elements and/or adding new elements. This can be handy. Get an array, remove the first part and return the remaining.

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
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0,howMany);
  //return the remaining or the tail  \__/(**)-<
  return arr;
}
slasher([1, 2, 3], 2);
```

## Code Solution 2:

```javascript
function slasher(arr, howMany) {
  
  //Return string after the amount chopped off.
  return arr.slice(howMany);

}
```
# References
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @clint74 @Rafase282 @M-Bowe`

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
