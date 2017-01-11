# Python `divmod(a,b)`

`divmod()` is a built-in function in Python 3, which returns the quotient and remainder when dividing the number `a` by the number `b`. It takes two numbers as arguments `a` & `b`. The argument can't be a [complex number](https://docs.python.org/3.0/library/cmath.html).

## Argument
It takes two arguments `a` & `b` - an integer, or a decimal number.It can't be a complex number.

## Return Value
The return value will be the pair of positive numbers consisting of quotient and remainder obtained by dividing `a` by `b`. In case of mixed operand types, rules for binary arithmetic operators will be applied.
For **Integer number arguments**, return value will be same as `(a // b, a % b)`. 
For **Decimal number arguments**, return value will be same as `(q, a % b)`, where `q` is usually [math.floor(a / b)](http://www.cmi.ac.in/~madhavan/courses/prog2-2015/docs/python-3.4.2-docs-html/library/math.html#math.floor) but may be 1 less than that.

## Code Sample

```python
print(divmod(5,2)) # prints (2,1)
print(divmod(13.5,2.5)) # prints (5.0, 1.0)
q,r = divmod(13.5,2.5)  # Assigns q=quotient & r= remainder
print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0
print(r) # prints 1.0 because (13.5 % 2.5) = 1.0
```
:rocket: [REPL It!](https://repl.it/FGLK/0)

[Official Docs](https://docs.python.org/3/library/functions.html#divmod)
