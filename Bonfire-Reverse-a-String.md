Summary

![](http://www.foundshit.com/pictures/signs/stressed-desserts.jpg)

Our goal for this bonfire is to reverse the provided string just like the image. There are 4 green checks (objectives) our code needs to pass in order to complete this bonfire:

1. The final object is expected to be a string
2. "hello" is expected to be "olleh"
3. "Howdy" is expected to be "ydowH"
4. "Greetings from Earth" is expected to be "htraE morf sgniteerG"

## Helpful links are ["h","e","l","p","f","u","l"]

Click **More information** under the bonfire title and read the helpful links if you haven't yet. The key here is to understand what each method do and what objects they work with.

- `String.split()`
- `Array.reverse()`
- `Array.join()` 

> If you're not clear on string or array methods type `find string` or `find array`

## Array.reverse() is for array objects and not string objects

Since our goal is to reverse the provided string, the first thought might be to simply `return str.reverse();` but we'll get: 
```js
    str.reverse is not a function
```
Unfortunately `Array.reverse()` doesn't work for a string object, it only works for an array object. That means first we have to convert the provided string to an array. Does `String.split()` or `Array.join()` convert a string to an array? 

## String.split() converts string to array

We can use `String.split()` to convert the provided string to an array. Now that it's an array, we can use `Array.reverse()` to reverse the letters. Finally we need to convert the array back to a string because it's one of the bonfire objectives. We can use `Array.join()` to accomplish this so let's use it to convert the array back to a string object. 

## Apostrophes and quotes 

`String.split()` converts the string to an array with one element but in order to use `Array.reverse()` successfully, we have to split the string to an array of characters. We can do this by using two apostrophes or two-double quotes (also known as empty string) as the separator like this `String.split('')`. 

Now we get:

    ["h","e","l","l","o"] 

instead of 

    ["hello"]

After we use split and reverse, we need to join the characters back together to a string of words instead of letters so don't forget to use two apostrophes or two-double quotes again on `Array.join('')`.