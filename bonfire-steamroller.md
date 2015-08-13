# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

# [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 2/5

Flatten a nested array. You must account for varying levels of nesting.

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.

# Useful Links

* [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

# Problem Script:

```
function steamroller(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);
```

## Explanation:

This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

## Hint: 1
You need to check if an element is an array or not.

## Hint: 2
If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.

## Hint: 3
You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!

## My code:

```
function steamroller(arr) {
	var flattenedArray = [];
	var flatten = function (arg) {
		if (!Array.isArray(arg)){
			flattenedArray.push(arg);
		} else {
			for (var a in arg) {
				flatten(arg[a]);
			}
		}
	};
	arr.forEach(flatten);
	return flattenedArray;
}
```
## My Code Explanation:

* Create a new variable to keep flattened arrays.
* Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
* It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
* Use Array.forEach(callbackFunc) to go element by element of the original array.
* Return the flattened array.