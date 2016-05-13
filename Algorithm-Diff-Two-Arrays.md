![](http://i.imgur.com/HkEgef5.gif)

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :memo:

# :checkered_flag: Problem Explanation:

Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

#### Relevant Links

- [**`for Loop`** (Devdocs)](https://devdocs.io/javascript/statements/for)
- [**`Array.prototype.includes`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
- [**`Array.prototype.filter`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
- [**`Array.prototype.concat`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## :speech_balloon: Hint: 1

Merge the list to make it easy to compare functions.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Use filter to get the new array, you will need to create a callback function.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

The best way to go about the callback function is to check if the number from the new merged array is not in **both** original arrays and return it.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution: (Imperative Solution)

```js
function diffArray(arr1, arr2) {
  var newArr = [];
  // Looping through arr1 to find elements that do not exist in arr2  
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      // Pushing the unique to arr1 elements to the newArr
      newArr.push(arr1[i]);
    }
  }
  // Looping through arr2 to find elements that do not exist in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // Pushing the unique to arr2 elements to the newArr    
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

<a href="https://repl.it/CLme/0" target="_blank"><kbd><img src="https://i.imgur.com/80UCMbk.png"> <strong>REPL it!</strong> :rocket: </kbd></a>

### Code Explanation:

Read the comments in the code.

#### Relevant Links

- [**`for Loop`** (Devdocs)](https://devdocs.io/javascript/statements/for)

## :sunflower: Intermediate Code Solution: (Declarative Solution)

```js
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
  	  item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

<a href="https://repl.it/CNYb/0" target="_blank"><kbd><img src="https://i.imgur.com/80UCMbk.png"> <strong>REPL it!</strong> :rocket: </kbd></a>

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

- [**`Array.prototype.concat`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)
- [**`Array.prototype.filter`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
- [**`Array.prototype.includes`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)

## :rotating_light: Advanced Code Solution: (Declarative Solution)

```js
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

<a href="https://repl.it/CNYU/0" target="_blank"><kbd><img src="https://i.imgur.com/80UCMbk.png"> <strong>REPL it!</strong> :rocket: </kbd></a>

### Code Explanation:

Explain solution here and add any relevant links

#### Relevant Links

- [**`Array.prototype.includes`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
- [**`Array.prototype.filter`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
- [**`Array.prototype.concat`** (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`thanks @Rafase282 @aganita @abhisekp for your help with Challenge: Diff Two Arrays`**

## :clipboard: NOTE TO CONTRIBUTORS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
