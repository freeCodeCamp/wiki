# Checkpoint: Counting Cards

***About Blackjack***

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called [Card Counting](https://en.wikipedia.org/wiki/Card_counting "Wikipedia entry on Card Counting").

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

| Value  | Cards                  |
| ------ |:----------------------:|
| +1     | 2, 3, 4, 5, 6          |
| 0      | 7, 8, 9                |
| -1     | 10, 'J', 'Q', 'K','A'  |

***Instructions***

You will write a card counting function. It will receive a **card** parameter and increment or decrement the global **count** variable according to the card's value (see table). The function will then return the current count and the string **"Bet"** if the count is positive, or **"Hold"** if the count is zero or negative.

**Example Output:**

- -3 Hold
- 5 Bet

Remember to use [ Read-Search-Ask](How-to-get-help-when-you-get-stuck) if you get stuck. Try to pair program. Write your own code.

## Useful Links
- [Challenge: Selecting from many options with Switch Statements](http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements)
- [Challenge: Chaining If Else Statements](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
- [Challenge: Increment a Number with Javascript](http://www.freecodecamp.com/challenges/increment-a-number-with-javascript)

## Problem Explanation:
- Change the code below `// Only change code below this line` and up to `// Only change code above this line`
- Take note that you are editing the inside of the `cc` function
- Use what you've learned to check the value of each `card` parameter passed into the function
- Keep a running count of that number
- If the final count is 1 or greater, return **# Hold**
- If the final count is 0 or less, return **# Bet**

## Hint: 1
- Use a `switch` (or `else if`) statement to count the value of each card.

## Hint: 2
- Add/subtract the value of each card to variable `count`. If the card is worth 0, don't do anything!

## Hint: 3
- After you've counted the cards, use an `if` statement to check the value of `count`. Also, make sure your return has a space between the number and the string.

## Spoiler Alert!
[![687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/thumb/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)](https://files.gitter.im/FreeCodeCamp/Wiki/nlOm/687474703a2f2f7777772e796f75726472756d2e636f6d2f796f75726472756d2f696d616765732f323030372f31302f31302f7265645f7761726e696e675f7369676e5f322e676966.gif)

**Solution ahead!**

## Code Solution:

```
function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

```

# Code Explanation:
- Checks the value of each card via a `switch` statement
- The variable `count`:
  - Increases by 1 if the card is a 2, 3, 4, 5, or 6
  - Since 7, 8, and 9 aren't worth anything, we ignore those cards in our `switch` statement.
  - Decreases by 1 if the card is a 10, 'J', 'Q', 'K', or 'A'
- Checks the value of `count` and returns the appropriate response

***Example Run***

- `cc(2);` runs
- The `switch` statement hits `case 2`, jumps down and adds 1 to the variable `count`
- The `switch` statement then hits the `break` and `cc(3);` runs
- This cycle continues until the final call is made, `cc('A');`
- After the `switch` statement, the `if` statement checks `count`, which is now 0
- This then drops down to the `else` statement, which will return **0 Hold**

***Note***
As mentioned earlier, the `switch` statement could have also been an `else if` statement

# Credits:
If you found this page useful, you can give thanks by copying and pasting this on the main chat:  **`thanks @leftynaut for your help with Checkpoint: Counting Cards`**

> **NOTE:** Please add your username only if you have added any **relevant main contents** to the wiki page. (Please don't remove any existing usernames.)
