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

```js
function inventory(arr1, arr2) {

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
```

# Code Explanation:
- Start by creating a variable to store the index in.  Define variables outside of loops
- Create a helper function to find the index of a product name
- The helper function iterates through each element of the array that it is called on, until it can either find the name parameter, or if it cannot find it then returns undefined
- Then, work through each item in the delivery, and set index to the result of invoking our helper function on the current inventory (IE: Search the new inventory for that product name, and return it's index)
- If we can't find that product, then we can add the entire product (Name and quantity) to the current inventory
- Otherwise, then we can add the quantity from the new inventory
- Then we sort the array by the product name (`arr1[x][1]` holds the name)
- Return the sorted array

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat: `Thanks @guyjoseph`

> If you are adding to the page then you add your name like this @newName instead of removing the other one.

## Related links
- [Function.prototype.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
