# Challenge Convert Celsius to Fahrenheit

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`, plus `32`.

You are given a variable **celsius** representing a temperature in Celsius. Use the variable **fahrenheit** already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.

#### Relevant Links

- [The Order of Operations: PEMDAS](http://www.purplemath.com/modules/orderops.htm)
- [Order of Operation: Video](https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)

## :speech_balloon: Hint: 1

Take a look at the code. There is an area that you're not supposed to edit. From there, ask yourself - what is used there that I haven't seen before?

> _try to solve the problem now_

## :speech_balloon: Hint: 2

Keep in mind the **order of operation** check the link in the _links_ section for more information.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
function convertToF(celsius) {
  // Only change code below this line
  var fahrenheit = (celsius * (9/5)) + 32;

  // Only change code above this line
  if ( typeof fahrenheit !== 'undefined' ) {
  return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

// Change the inputs below to test your code
convertToF(30);
```

### Code Explanation:

- Declare the **fahrenheit** variable.
- Make sure the proper order of arithmetic operations is followed by using parenthesis (`()`) when needed.

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @Rafase282 for your help with Checkpoint: Convert Celsius to Fahrenheit`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) for reference.
