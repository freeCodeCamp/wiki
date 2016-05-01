# Explanation:
The program should look for the numbers in the array which would add to make the number from the **arg.** Then instead of adding those numbers up, you will add their **indices** which is the reason why you get 11 on the example from detail.

Remember that arrays start at index 0 and go from there so from [1,4,2,3,0,5] if we switch to their indices it would be [0,1,2,3,4,5] then we add indices 1 + 2 + 3 + 5 and we get 11. That is what we need to return.

## Hint: 1
Remember to return the smaller sum if multiple are possible. This means `[1,1,1],1 should use 0 + 1 instead of 0+1 & 1 +1 , etc`

## Hint: 2
Try using an array of indices to track when an index has been used or not.

## Hint: 3
It is easy to confuse indices as being numbers, but since you will be interacting with them, make sure to work with them as integers to prevent the code from behaving erratically.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## First Solution:

```js
function pairwise(arr, arg) {
  // Create empty array to keep the arrays we will add.
  var index = [];

  // Loop to check the first number.
  for (var a in arr) {
    // temporal first number.
    var temp = arr[a];

    // Second loop to check against the first number.
    for (var i = 1; i < arr.length; i++) {
      // temporal secodn number.
      var temp2 = arr[i];

      // Key element, this check to make sure that the numbers add to arg
      // also that the second index is greater than the first, and that neither
      // of those indices are already on the array.
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        // if true then add both indices as integers then stop checking to avoid repeats.
        index.push(+a, +i);
        break;
      }
    }
  }

  // After the two loops are done, check if index is empty to return 0
  // or if it is not, then use Array.reduce(callbackFunc) to returnt he sum
  // of the numbers.
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };

    return index.reduce(addAll);
  } else
    return 0;
}

// test here
pairwise([1,4,2,3,0,5], 7);
```
:rocket: [REPL It!](https://repl.it/CLpC/0)

# Code Explanation:
- First I create an empty array to store the indices that i will be adding.
- Then I create an outer loop to get the first number.
- Then get the second number from another inner loop.
- Then I check to make sure that the two numbers add to arg that was passed as a parameter to the function; we also have to make sure the index from the second loop is grater than the one from the first loop to avoid adding wrong indices. We also have to check to make sure the indices are not already part of the **index** array.
- If all that is true, then we add the two indices as integer by using '+' or parseInt(), and then we stop the inner loop since everything else would be redundant and wrong.
- After all the loops are over, check in **index** is empty, if it is then return 0, otherwise return the addition of all the integers in it using Array.reduce(callbackFunc) to return the sum of the numbers.

## Second Solution

```js
function pairwise(arr, arg) {
 //Set sum of indices to zero
 var sum = 0;
 //looping from first element
  for(i=0;i<arr.length;i++){
  //Looping from second element by setting first element  constant
 for(j=i+1;j<arr.length;j++){
 //Check whether the sum is equal to arg
   if(arr[i]+arr[j] ==arg){
   //Add the indices
     sum += i+j;
     //Set the indices to NaN so that they can't be used in next iteration
     arr[i] =arr[j] = NaN;
    }
   } 
  }
 return sum;
}

// test here
pairwise([1,4,2,3,0,5], 7);
```
:rocket: [REPL It!](https://repl.it/CLpD/0)

## Code explanation in comments
# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @Rafase282 @coded9 @SaintPeter for your help with Algorithm: Pairwise`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
