You should make sure to try hard to solve the Bonfire yourself before reading this!
# :link: [Original Bonfire](http://www.freecodecamp.com/challenges/bonfire-slasher-flick) :point_right:  

## Author

![Andre](https://avatars2.githubusercontent.com/u/2698441?v=3&amp;s=460) submitted by [Andre - Clint Tecnologia](//freecodecamp.com/clint74) | https://github.com/clint74

## The problem
Return the remaining elements of an array after chopping off n elements from the head.
Factorials are often represented with the shorthand notation n!

For example: `slasher([1, 2, 3], 2);` must return [3]

## Analysis
Since we need only the remaining part of an array we can just remove what we don't.

## Understanding slicing
Slice allows to get only what you want from an array.

## Understanding the splice
If you want the **tail** of a snake remove the head first.
The splice() method changes the content of an array by removing existing elements and/or adding new elements.
This can be handy. Get an array, remove the first part and return the remaining.

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

## My solution
``` javascript
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0,howMany);
  //return the remaining or the tail  \__/(**)-<
  return arr;
}
slasher([1, 2, 3], 2);
```



## References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## If you enjoyed this guide, then type:
`thanks @clint74`
in the chat!