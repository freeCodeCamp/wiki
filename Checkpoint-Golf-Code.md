# Details
We will now use our knowledge about else if statements and comparison with equality, less and greater operators.

In the game of golf each hole has a par for the average number of strokes needed to sink the ball. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed a par and strokes. Return strings according to this table (based on order of priority - top (highest) to bottom (lowest)):

| Strokes        | Return        |
|:-------------  |:------------- |
|1	             |"Hole-in-one!" |
|<= par - 2	     |"Eagle"        |
|par - 1	       |"Birdie"       |
|par	           |"Par"          |
|par + 1	       |"Bogey"        |
|par + 2	       |"Double Bogey" |
|>= par + 3	     |"Go Home!"     |

par and strokes will always be numeric and positive.

Remember to use [ Read-Search-Ask](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

## Useful Links
- [Challenge: Chaining If Else Statements](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
- [Challenge: Comparison with the Greater Than Equal To Operator](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
- [Challenge: Comparison with the Less Than Equal To Operator](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)

## Problem Explanation:
- Change the code below `// Only change code below this line` and above `// Only change code above this line`
- Take note that you are editing the inside of the `golfScore` function.
- You will have to make the function return exactly the same string as shown shown on table, depending on the value of the parameters `par` and `strokes` that are passed in to your function.

## Hint: 1
- `+number -number` can be used to increase or decrease a parameter in your condition.

## Hint: 2
- You can chain else if statements to return different values in different scenarios.

## Hint: 3
- Control the flow of your function based on the tables order of priority - top (highest) to bottom (lowest) to return matching string values.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```js
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes == par -1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par +1) {
    return "Bogey";
  } else if (strokes == par +2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);
```

# Code Explanation:
- Comparing the `parameters` stroke and par value to return appropriated string value.
- Using else if statement for flow control
- else will return string "Go home!" to every condition where strokes are equal to par +3 or higher

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @osterbergmarcus for your help with Checkpoint: Golf Code`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
