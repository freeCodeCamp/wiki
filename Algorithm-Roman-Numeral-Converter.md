# Algorithm Roman Numeral Converter

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

You will create a program that converts an integer to a Roman Numeral.

## :speech_balloon: Hint: 1

Creating two arrays, one with the Roman Numerals and one with the decimal equivalent for the new forms will be very helpful.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

If you add the numbers to the arrays that go before the new letter is introduced, like values for 4, 9, and 40, it will save you plenty of code.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

You can't have more than three consecutive Roman numerals together.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

// test here
convertToRoman(36);
```

:rocket: [Run Code](https://repl.it/CLmf/0)

### Code Explanation:

- We start off by creating two arrays with default conversion with matching indices. These are called `decimalValue` and `romanNumeral`. We also create an empty string variable, `romanized`, which will house the final roman number.
- Using a for loop, we loop through the indicies of the `decimalValue` array. We continue to loop until while the value at the current `index` will fit into `num`.
- Next, we add the roman numeral and decrease `num` by the decimal equivalent.
- Finally, we return the value of `romanized`.

#### Relevant Links

- [For Loops](JS-For-Loop)
- [While Loops](JS-while-Loop)

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 @SaintPeter @benschac for your help with Algorithm: Roman Numeral Converter`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
