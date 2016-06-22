# Algorithm Inventory Update

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

In this problem, you've to compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

The current as well as new inventory will be in this format: `var newInv = [[2, "Item1 Name"], [3, "Item2 Name"], [67, "Item3 Name"], [7, "Item4 Name"]];`.

#### Relevant Links

- [Global Array object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## :speech_balloon: Hint: 1

You need to work through each item of the new inventory to see if it exists in the current inventory or not. Remember that the product name is stored as the second element of each sub-array: `arr2[0][1] = "Bowling Ball"`.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

If the item exists, you need to add the quantity from the new inventory. If the item doesn't exist, you need to add the entire item.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Return the completed inventory in alphabetical order.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLok/0)

### Code Explanation:

- The variable **index** stores the location (index) of a product.
- The helper function `getProductIndex()` returns the index of a specified product. It iterates through each element of the array that it is called on until it can find the name parameter. If the product is not found in the inventory, `undefined` is returned.
- Then, each item in the new inventory (delivery) is worked through:
  - **index** is set to the result of invoking the helper function i.e., search the new inventory for that product name and return it's index.
  - If the item is found, quantity of the product is added to the quantity of the same product in current inventory.
  - If the item is not found, the entire product (name and quantity) is added to the current inventory.
- The updated inventory, **arr1**, is then sorted by product name (held in `arr1[x][1]`).
- The final - updated as well as sorted array is then returned.

#### Relevant Links

- [JS For Loops Explained](JS-For-Loops-Explained)
- [this keyword](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
- [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [JS Array Prototype Push](JS-Array-Prototype-Push)
- [JS Array Prototype Sort](JS-Array-Prototype-Sort)

## :sunflower: Intermediate Code Solution:

```javascript
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

:rocket: [Run Code](https://repl.it/CLol/0)

### Code Explanation:

- The variable **index** stores the location (index) of a product.
- **arrCurInvName** has the names of **arr1**'s items.
- **arrNeInvName** has the names of **arr2**'s items.
- `arr1.map(function(item1))` takes care of items already existing in inventory i.e., it increases the quantity in the inventory.
- Next, `arr2.map(function(item))` and `arr1.map(function(item))` get the names of items for the new and current inventory respectively.
- `arrNeInvName.map(function(item))` handles items which don't already exist in inventory i.e., it adds new items to the inventory.
- The updated array **arr1** is then sorted alphabetically by product name (held in `arr1[x][1]`) and returned.

#### Relevant Links

- [JS Array Prototype Map](JS-Array-Prototype-Map)
- [JS Array Prototype IndexOf](JS-Array-Prototype-IndexOf)
- [JS Ternary](JS-Ternary)

## :rotating_light: Advanced Code Solution:

```javascript
function updateInventory(arr1, arr2) {
  var flag = 0;
  arr2.forEach(function(item) {
    flag = 0;
    arr1.forEach(function(list) {
      // If the product is already present, increase the quantity
      if(item[1] === list[1]) {
        list[0] += item[0];
        flag = 1;
      }
    });
    //If not already present, add the product
    if(flag === 0)
      arr1.push(item);
  });

  //Return the sorted inventory in alphabetical order by product name
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

:rocket: [Run Code](https://repl.it/CLom/0)

### Code Explanation:

- The variable **flag** is a flag variable which checks whether a product exists in the inventory. A flag variable, in its simplest form, is a variable you define to have one value until some condition is true, in which case you change the variable's value.
- `arr2.forEach(function(item))` iterates through each item in the new delivery:
  - If the product is already present, it's quantity is simply updated and **flag** is made 1.
  - If the product is new i.e., **flag** is 0, it is added to the inventory using the `push()` method.
- The updated array **arr1** is then sorted alphabetically by product name.

#### Relevant Links

- [JS Array Prototype ForEach](JS-Array-Prototype-ForEach)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @guyjoseph @Rafase282 @anuragaryan for your help with Algorithm: Inventory Update`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
