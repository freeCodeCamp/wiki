## Summary
For this bonfire our goal is to reverse the provided string. There are 4 green checks (objectives) our code needs to pass in order to complete this bonfire:

1. The final object is expected to be a string
2. "hello" is expected to be "olleh"
3. "Howdy" is expected to be "ydowH"
4. "Greetings from Earth" is expected to be "htraE morf sgniteerG"

[Need some hints?](https://github.com/FreeCodeCamp/freecodecamp/wiki/Bonfire:-Reverse-a-String#hint-1)

## Hint 1
Click **More information** under the bonfire title and read the helpful links if you haven't done so yet. The key here is to understand what each method: **String.split(), Array.reverse(), Array.join()** do and what objects they work with.

[Need more hints?](https://github.com/FreeCodeCamp/freecodecamp/wiki/Bonfire:-Reverse-a-String#hint-2)

## Hint 2
Since our goal is to reverse the provided string, the first thought might be to simply use **Array.reverse()** but **Array.reverse()** doesn't work for a string object, it only works for an array object. That means first we have to convert the provided string to an array. Does **String.split()** or **Array.join()** convert a string to an array? 

[More hints?](https://github.com/FreeCodeCamp/freecodecamp/wiki/Bonfire:-Reverse-a-String#hint-3)

## Hint 3
We can use **String.split()** to convert the provided string to an array. Now that it's an array, we can use **Array.reverse()** to reverse the letters. Then finally we need to convert the array back to a string because it's one of the bonfire objectives. We can use **Array.join()** to accomplish this so let's use it to convert the array back to a string object. 

[Final hint!](https://github.com/FreeCodeCamp/freecodecamp/wiki/Bonfire:-Reverse-a-String#final-hint)

## Final Hint
**String.split()** converts the string to an array with one element but in order to use **Array.reverse()** successfully, we have to split the string to an array of characters. We can do this by adding two double quotes (also known as empty string) as the separator like this **String.split("")**. 

Now we get **["h","e","l","l","o"]** instead of **["hello"]**. After we use split and reverse, we need to join the characters back together to a string of words instead of letters so don't forget to use the two double quotes again.
