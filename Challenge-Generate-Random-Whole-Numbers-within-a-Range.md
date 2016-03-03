# Generate Random Whole Numbers within a Range
> We can use a certain mathematical expression to get a random number between two numbers.

`Math.floor(Math.random() * (max - min + 1)) + min`

**See Also:** :scroll: [**Explanation**](Challenge-Generate-Random-Whole-Numbers-within-a-Range#explanation) | [Explanation in SO](https://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range/1527820#1527820)

## Explanation
> `Math.random()` creates a floating point number between `0` (inclusive) and `1` (exclusive)

**Q:** Create a random **whole** number between `2` (inclusive, min) and `6` (inclusive, max) i.e. create a random *whole* number between `min` (*inclusive*) and max (*inclusive*)

**A:** `Math.floor(Math.random() * (6 - 2 + 1)) + 2`

Let's write `Math.random() * max` which creates a floating point number between `0` (inclusive) and `max` (*exclusive*).

E.g. `Math.random() * 6` generates a random floating point number between `0` (inclusive) and `6` (*exclusive*).

----

But we need to generate a whole number between `0` (*inclusive*) and `max` (*inclusive*) first. So we do a trick :wink:. 

What if we create a number between `0` and `max + 1`. That way, we also include the `max` number. And then apply the `Math.floor` method on the result to get a whole number between **`0`** (*inclusive*, min) and `max` (*inclusive*).

We can write it as `Math.floor(Math.random() * (max + 1))`. 

E.g. `Math.floor(Math.random() * (6 + 1))` generates a random floating point number between **`0`** (*inclusive*, min) and **`6`** (*inclusive*, max).

**`0 1 2 3 4 5 6`**

> The `Math.random() * (6 + 1)` part generates a floating point number between `0` (*inclusive*) and `7` (*exclusive*).

**`0..1..2..3..4..5..6..`**

----

But that doesn't solve our given question yet :disappointed:. We need to generate a random whole number between **`min`** (*inclusive*) and `max` (*inclusive*). So we need another trick :wink:. 

What if we write `Math.floor(Math.random() * ((max + 1) - min))` that will generate a whole number between `0` and `(max + 1) - min`.

E.g. `Math.floor(Math.random() * ((6 + 1) - 2))` **=** `Math.floor(Math.random() * 5)` that will generate a whole number between `0` (inclusive) and `4` (inclusive).

**`0 1 2 3 4`**

----

But still the question is unsolved :disappointed:. We need the random number between `min` (**inclusive**) and `max` (**inclusive**).

So we simply write `Math.floor(Math.random() * ((max + 1) - min)) + min` :stuck_out_tongue_winking_eye:. 

E.g. `Math.floor(Math.random() * ((6 + 1) - 2)) + 2` **=** `Math.floor(Math.random() * 5) + 2`

**`2 3 4 5 6`**

**Now this answers our given question. `Math.floor(Math.random() * (max - min + 1) + min` correctly generates a random number between `min` (*inclusive*) and `max` (*inclusive*) i.e. it generates a random whole number between `2` (inclusive) and `6` (inclusive).** :smiley: