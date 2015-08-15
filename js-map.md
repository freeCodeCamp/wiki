## Array.prototype.map

The method `map` of the Array prototype allows you to grab a hold of each element inside an array and apply a function to them. After **map** finishes iterating through the array, it will return a **new array** with the results of applying the function to the aforementioned elements.

#### The syntax is as follows:
`myAwesomeArray.map(myAwesomeFunction)`

Since **map** doesn't mutate the original array, it should be used as a value, stored inside a variable, passed in as a **returned value** inside a function (the most common case) and many other things.
Let's learn a little bit what this powerful function can do! Say we have an array of  names and we want to create a new array with these names but UPPERCASED.

```
var names = ["Leia", "Anakin", "Luke", "Obi Wan Kenobi"];
var uppercaseNames = names.map(function(name) {
  return name.toUpperCase();
};
```
Now if we `console.log(uppercaseNames)` we will get this:
> Array(4) -> ["LEIA", "ANAKIN", "LUKE", "OBI WAN KENOBI"]

But why?