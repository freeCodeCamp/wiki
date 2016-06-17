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
- [While Loops](JS-While-Loop)

## :intermediate: Intermediate Code Solution:

```javascript
function convertToRoman(num) {
 var romans = ["I", "V", "X", "L", "C", "D", "M"],
     ints = [],
     romanNumber = [],
     numeral = "";
  while (num) {
    ints.push(num % 10);
    num = Math.floor(num/10);
  }
  for (i=0; i<ints.length; i++){
      units(ints[i]);
  }
  function units(){
    numeral = romans[i*2];
    switch(ints[i]) {
      case 1:
        romanNumber.push(numeral);
        break;
        case 2:
        romanNumber.push(numeral.concat(numeral));
        break;
      case 3:
        romanNumber.push(numeral.concat(numeral).concat(numeral));
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[(i*2)+1]));
        break;
      case 5:
        romanNumber.push(romans[(i*2)+1]);
        break;
      case 6:
        romanNumber.push(romans[(i*2)+1].concat(numeral));
        break;
      case 7:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral));
        break;
      case 8:
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral));
        break;
      case 9:
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2]));
        break;
      }
    }
  return romanNumber.reverse().join("").toString();
}

// test here
convertToRoman(97);
```

:rocket: [Run Code](https://repl.it/C1YV)

## Code Explanation:

- Create an array of Roman Numerals.
- Push each digit of the argument onto an array (ints).
- Loop through the array of digits (base 10) and as you do, increment the Roman Numeral (base 5) index by 2.
- Within the loop, use Switch Case to push the proper Roman Numerals (backwards) onto that array.
- Reverse the Roman Numerals array and turn it into a string.

### :trophy: Credits:

If you found this page useful, you can give thanks by copying and pasting this on the main chat:

**`Thanks @Rafase282 @SaintPeter @benschac for your help with Algorithm: Roman Numeral Converter`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
