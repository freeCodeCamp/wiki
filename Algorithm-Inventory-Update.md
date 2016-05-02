# Problem Explanation:
- Look through an array of new products, in the format: `[quantity, name]`
- Return an array containing updated quantities for each item that already existed, and any new products

## Hint: 1
- You need to work through each item of the new inventory to see if it exists in the current inventory or not.
- Remember that the product name is stored as the second element of each sub-array: `arr2[0][1] = "Bowling Ball"`

## Hint: 2
- If the item exists, you need to add the quantity from the new inventory
- If the item doesn't exist, you need to add the entire item

## Hint: 3
- Return the completed inventory in alphabetical order

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:
#### First solution
```js
function updateInventory(arr1, arr2) {

    // Variable for location of product
    var index;

    // A helper method to return the index of a specified product (undefined if not found)
    var getProductIndex = function (name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name) {
                return i;
            }
        }
        return undefined;
    }

    // For each item of the new Inventory
    for (var i = 0; i < arr2.length; i++) {

        // Invoke our helper function using arr1 as this
        index = getProductIndex.call(arr1, arr2[i][1]);

        // If the item doesn't exist
        if (index === undefined) {
            // Push the entire item
            arr1.push(arr2[i]);
        } else {
            // Add the new quantity of the current item
            arr1[index][0] += arr2[i][0];
        }

    }

    // Sort alphabetically, by the product name of each item
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return arr1;
}

// test here
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
:rocket: [REPL It!](https://repl.it/CLok/0)

#### Second solution
```js
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  var index;
  var arrCurInvName = []; // Names of arr1's items
  var arrNeInvName = []; // Names of arr2's items

  // Same as using two for loops, this takes care of increasing the number of stock quantity.
  arr1.map(function(item1) {
    return arr2.map(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; //Increase number of stock
      }
    });
  });

  // Get item's name for new Inventory
  arr2.map(function(item) {
    arrNeInvName.push(item[1]);
  });

  // Get item's name for Current Inventory
  arr1.map(function(item) {
    arrCurInvName.push(item[1]);
  });

  // Add new inventory items to current inventory.
  arrNeInvName.map(function(item) {
    if (arrCurInvName.indexOf(item) === -1) {
      index = arrNeInvName.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  // Sort the array alphabetically using the second element of the array as base.
  arr1.sort(function(currItem, nextItem) {

    //Ternary function to avoid using if else
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
:rocket: [REPL It!](https://repl.it/CLol/0)


#### Third solution
```js
function updateInventory(arr1, arr2) {
  var flag=0;
  arr2.forEach(function(item){
    flag=0;
    arr1.forEach(function(list){
        //If the product is already present, increase the quantity
      if(item[1]===list[1]){ list[0]+=item[0]; flag=1;}
    });
    //If not already present, add the product
    if(flag===0) arr1.push(item);
  });
  //Return the sorted inventory in alphabetical order wrt product name
    return arr1.sort(function(a, b) { 
    return a[1] > b[1] ? 1 : -1;
});
}

// test here
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
:rocket: [REPL It!](https://repl.it/CLom/0)


#### Fourth Solution
```js
//jshint esversion: 6
function updateInventory(curInv, newInv) {
  var inv = new Map();
  
  [...curInv, ...newInv].forEach(item => {
     if(inv.has(item[1]))
       inv.set(item[1], inv.get(item[1]) + item[0]);
     else
       inv.set(item[1], item[0]);
  });
  
  return [...inv]
    .map(item => [item[1], item[0]])
    .sort((a, b) => a[1] > b[1] ? 1 : -1);
}

// test here
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
```
:rocket: [REPL It!](https://repl.it/CLon/0)


# Code Explanation:
#### First solution
- Start by creating a variable to store the index in.  Define variables outside of loops
- Create a helper function to find the index of a product name
- The helper function iterates through each element of the array that it is called on, until it can either find the name parameter, or if it cannot find it then returns undefined
- Then, work through each item in the delivery, and set index to the result of invoking our helper function on the current inventory (IE: Search the new inventory for that product name, and return it's index)
- If we can't find that product, then we can add the entire product (Name and quantity) to the current inventory
- Otherwise, then we can add the quantity from the new inventory
- Then we sort the array by the product name (`arr1[x][1]` holds the name)
- Return the sorted array
- For Solution two, the explanation is on the code. Feel free to use different components on each solution to create your own if you like.

#### Second and Third solutions
- Read comments in code.

#### Fourth solution
- Start by creating the `inv` [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to store the updated inventory
- Combine both `curInv` and `newInv` and iterate through
- Check if `inv` has the key, update it's value if `inv` has them. Otherwise store the new value
- Use ES6 spread operator to convert `inv` map to a 2d array
- Map through the array to change it's location to be [value, key] as needed by the challenge
- Sort the array alphabetically

## Related links
- [Function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @guyjoseph @Rafase282 @anuragaryan for your help with Algorithm: Inventory Update`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)

