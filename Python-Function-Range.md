# Python pow(x,y)

Rather than being a function, range is actually an immutable sequence type and is commonly used for looping a specific number of times in for loops.
`range(start, stop[, step])` is used in Python 3 to generate a sequence of type range from `start` till `stop` with increment of size `step`.

## Arguments

This function takes one argument, `start` or two arguments `start` and `stop` or three arguments `start`, `stop` and `step`.


start
    The value of the `start` parameter (or 0 if not provided)

stop
    The value of the `stop` parameter (compulsory argument)

step
    The value of the 'step' parameter (or 1 if not provided). It cannot be 0.

All three must be of integer type.


## Return

If only `stop` is provided, it generates sequence of type range from `0` till `stop`.
If both `start` and `stop` are provided, it generates sequence of type range from `start` till `stop`.
If all three `start`, `stop` and `step` are provided, it generates sequence of type range from `start` till `stop` with increment of size `step`.



## Example

```python
range(4)    # returns range(0, 4)
range(1,8)  # returns range(1, 8)
range(10,30,5)  # returns range(10, 30, 5)
```
:rocket: [Run Code](https://repl.it/CTIY/3)

[Official Documentation](https://docs.python.org/3/library/functions.html#func-range)
