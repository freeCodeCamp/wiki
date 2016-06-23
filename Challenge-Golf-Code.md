# Challenge Golf Code

:triangular_flag_on_post: Remember to use [**`Read-Search-Ask`**](FreeCodeCamp-Get-Help) if you get stuck. Try to pair program :busts_in_silhouette: and write your own code :pencil:

### :checkered_flag: Problem Explanation:

In the game of golf each hole has a **par** meaning the average number of **strokes** a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below **par** your **strokes** are, there is a different nickname.

Your function will be passed **par** and **strokes** arguments. You've to return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes    | Return
:--------- | :-------------
1          | "Hole-in-one!"
<= par - 2 | "Eagle"
par - 1    | "Birdie"
par        | "Par"
par + 1    | "Bogey"
par + 2    | "Double Bogey"
>= par + 3 | "Go Home!"

**par** and **strokes** will always be numeric and positive.

- Change the code below `// Only change code below this line` and above `// Only change code above this line`.
- Ensure that you're editing the inside of the `golfScore` function.
- You will have to make the function return exactly the same string as shown shown in the table, depending on the value of the parameters **par** and **strokes** that are passed to your function.

#### Relevant Links

- [Golf](https://en.wikipedia.org/wiki/Golf)
- [Challenge: Chaining If Else Statements](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
- [Challenge: Comparison with the Greater Than Equal To Operator](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
- [Challenge: Comparison with the Less Than Equal To Operator](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)

## :speech_balloon: Hint: 1

`+number -number` can be used to increase or decrease a parameter in your condition.

> _try to solve the problem now_

## :speech_balloon: Hint: 2

You use `if / else if` chains to return different values in different scenarios.

> _try to solve the problem now_

## :speech_balloon: Hint: 3

Control the flow of your function based on the tables order of priority - top (highest) to bottom (lowest) to return matching string values.

> _try to solve the problem now_

## Spoiler Alert!

![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## :beginner: Basic Code Solution:

```javascript
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

### Code Explanation:

- Compare the parameters **par** and **strokes** to return appropriate string values.
- `if / else if` chain is used for flow control.
- String "Go Home!" is returned for every condition where **strokes** is greater than or equal to **par + 3**.

### :trophy: Credits:

If you found this page useful, you may say thanks to the contributors by copying and pasting the following line in the main chat:

**`Thanks @osterbergmarcus @dakshshah96 for your help with Checkpoint: Golf Code`**

## :clipboard: NOTES FOR CONTRIBUTIONS:

- :warning: **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
- Add an explanation of your solution.
- Categorize the solution in one of the following categories &mdash; **Basic**, **Intermediate** and **Advanced**. :traffic_light:
- Please add your username only if you have added any **relevant main contents**. (:warning: **_DO NOT_** _remove any existing usernames_)

> See :point_right: [**`Wiki Challenge Solution Template`**](Wiki-Template-Challenge-Solution) for reference.
