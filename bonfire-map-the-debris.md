# Author

![@Rafase282](https://avatars0.githubusercontent.com/Rafase282?&s=128) submitted by Rafase282 | https://github.com/Rafase282

* FreeCodeCamp Profile: http://www.freecodecamp.com/rafase282
* CodePed Profile: http://codepen.io/Rafase282/
* LinkedIn: https://www.linkedin.com/in/rafase282

## [My Original Wiki](http://rafase282.github.io/My-FreeCodeCamp-Code/)

# Details

* Difficulty: 3/5

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

Remember to use [RSAP](http://www.freecodecamp.com/field-guide/how-do-i-get-help-when-I-get-stuck) if you get stuck. Try to pair program. Write your own code.


# Useful Links

* [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
* [orbital periods](http://en.wikipedia.org/wiki/Orbital_period)

## Problem Script:

```
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
```

## Explanation:

The first thing to do is to get familiar with what the program is for, for this I would suggest you check the Wikipedia link as that is very important and from where you can also get the formula for the conversion. The hardest part are finding the formula, implementing it and for some modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number od objects in the array which is what is tested on the second part.

## Hint: 1

The formula needed is: T = 2*pi * sqrt(earthRadius + avgAlt to the cube / GM)

## Hint: 2
Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.

## Hint: 3
Find out how to remove and add key to an object

## My code

```
function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	var a = 2 * Math.PI;
	var newArr = [];
	var getOrbPeriod = function (obj) {
	    var c = Math.pow(earthRadius + obj.avgAlt ,3);
	    var b = Math.sqrt(c/GM);
	    var orbPeriod = Math.round(a * b);
	    delete obj.avgAlt;
	    obj.orbitalPeriod = orbPeriod;
	    return obj;
	};
	
	for (var elem in arr){
	    newArr.push(getOrbPeriod(arr[elem]));
	}
	return newArr;
}
```
## Code Explanation:

* The GM and earthRadius is given to us.
* To make the code easier to edit and read, I separated each part of the equation.
* Create a new array to store the orbPeriods.
* a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
* Create a function that will do the required work for any amount of objects.
* c is the power of earthRadius + the value of avgAlt to the cube.
* b is the square root of c divided by GM.
* Create orbPeriod to store the product of a & b, with the ceiling function applied to round up to the next whole number.
* Then we delete the key avgAlt, and add the new key and its value.