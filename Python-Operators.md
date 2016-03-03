# Operations and Operators

[Previous](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python-Basics)

[Home](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python)

[Next](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python-More-Builtin-Types)

## Truth Value Testing

[Python Docs - Truth Value Testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)

Any object can be tested for truth value, for use in an if or while condition
or as operand of the Boolean operations below. The following values are
considered false:
* `None`
* `False`
* zero of any numeric type, for example, `0`, `0.0`, `0j`.
* any empty sequence, for example, `''`, `()`, `[]`.
* any empty mapping, for example, `{}`.
* instances of user-defined classes, if the class defines a `__bool__()` or
`__len__()` method, when that method returns the integer zero or `bool` value
`False`. [`[1]`](https://docs.python.org/3/library/stdtypes.html#id11)

All other values are considered true — so objects of many types are always
true.

Operations and built-in functions that have a Boolean result always return 0
or False for false and 1 or True for true, unless otherwise stated. (Important
exception: the Boolean operations or and and always return one of their
operands.)

## Boolean Operations
[`and`](https://docs.python.org/3/reference/expressions.html#and),
[`or`](https://docs.python.org/3/reference/expressions.html#or),
[`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - Boolean Operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

These are the Boolean operations, ordered by ascending priority:

| Operation | Result                               | Notes |
|-----------|--------------------------------------|-------|
| x or y    | if x is false, then y, else x        | (1)   |
| x and y   | if x is false, then x, else y        | (2)   |
| not x     | if x is false, then True, else False | (3)   |

**Notes:**

1. This is a short-circuit operator, so it only evaluates the second argument
if the first one is False.
2. This is a short-circuit operator, so it only evaluates the second argument
if the first one is True.
3. not has a lower priority than non-Boolean operators, so not a == b is
interpreted as not (a == b), and a == not b is a syntax error.

### Examples:
#### `not`:
```python
>>> not True
False
>>> not False
True
```

#### `and`:
```python
>>> True and False    # Short-circuited at first argument.
False
>>> False and True    # Second argument is evaluated.
False
>>> True and True     # Second argument is evaluated.
True
```

#### `or`:
```python
>>> True or False    # Short-circuited at first argument.
True
>>> False or True    # Second argument is evaluated.
True
>>> False or False   # Second argument is evaluated.
False
```

## Parenthesis for boolean operations

Just as in math, parenthsis can be used to override order of operations:
```python
>>> not True or True
True
>>> not (True or True)
False
```
```python
>>> True or False and False
True
>>> (True or False) and False
False
```

## Comparisons

[Python Docs - Comparisions](https://docs.python.org/3/library/stdtypes.html#comparisons)

There are eight comparison operations in Python. They all have the same
priority (which is higher than that of the Boolean operations). Comparisons can
be chained arbitrarily; for example, `x < y <= z` is equivalent to `x < y and y
<= z`, except that `y` is evaluated only once (but in both cases `z` is not
evaluated at all when `x < y` is found to be false).

This table summarizes the comparison operations:

| Operation | Meaning                 |
|-----------|-------------------------|
| `<`       | strictly less than      |
| `<=`      | less than or equal      |
| `>`       | strictly greater than   |
| `>=`      | greater than or equal   |
| `==`      | equal                   |
| `!=`      | not equal               |
| `is`      | object identity         |
| `is not`  | negated object identity |

Objects of different types, except different numeric types, never compare
equal. Furthermore, some types (for example, function objects) support only a
degenerate notion of comparison where any two objects of that type are unequal.
The `<`, `<=`, `>` and `>=` operators will raise a `TypeError` exception when
comparing a complex number with another built-in numeric type, when the objects
are of different types that cannot be compared, or in other cases where there is
no defined ordering.

Non-identical instances of a class normally compare as non-equal unless the
class defines the `__eq__()` method.

Instances of a class cannot be ordered with respect to other instances of the
same class, or other types of object, unless the class defines enough of the
methods `__lt__()`, `__le__()`, `__gt__()`, and `__ge__()` (in general,
`__lt__()` and `__eq__()` are sufficient, if you want the conventional meanings
of the comparison operators).

The behavior of the is and is not operators cannot be customized; also they
can be applied to any two objects and never raise an exception.

**TODO**
* Chained comparisons w < x < y > z
* Equality comparison `is` vs `==`

## Numeric Operations

[Python Docs - Numeric Operations](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

Python fully supports mixed arithmetic: when a binary arithmetic operator has
operands of different numeric types, the operand with the “narrower” type is
widened to that of the other, where integer is narrower than floating point,
which is narrower than complex. Comparisons between numbers of mixed type use
the same rule. [2] The constructors int(), float(), and complex() can be used to
produce numbers of a specific type.

All numeric types (except complex) support the following operations, sorted by
ascending priority (all numeric operations have a higher priority than
comparison operations):

| Operation         | Results | Notes  | Full documentation|
|-------------------|---------|--------|-------------------|
| `x + y`           | sum of x and y|        ||
| `x - y`           | difference of x and y|        ||
| `x * y`           | product of x and y|        ||
| `x / y`           | quotient of x and y|        ||
| `x // y`          | floored quotient of x and y| (1)    ||
| `x % y`           | remainder of x / y| (2)    |
| `-x`              | x negated|        ||
| `+x`              | x unchanged|        ||
| `abs(x)`          | absolute value or magnitude of x|        | [`abs()`](https://docs.python.org/3/library/functions.html#abs)|
| `int(x)`          | x converted to integer| (3)(6) | [`int()`](https://docs.python.org/3/library/functions.html#int)|
| `float(x)`        | x converted to floating point| (4)(6) | [`float()`](https://docs.python.org/3/library/functions.html#float)|
| `complex(re, im)` | a complex number with real part re, imaginary part im. im defaults to zero. | (6)    |[`complex()`](https://docs.python.org/3/library/functions.html#complex) |
| `c.conjugate()`   | conjugate of the complex number c|        ||
| `divmod(x, y)`    | the pair (x // y, x % y)| (2)    | [`divmod()`](https://docs.python.org/3/library/functions.html#divmod)|
| `pow(x, y)`       | x to the power y| (5)    | [`pow()`](https://docs.python.org/3/library/functions.html#pow)|
| `x ** y`          | x to the power y| (5)    ||

**Notes:**

1. Also referred to as integer division. The resultant value is a whole
integer, though the result’s type is not necessarily int. The result is always
rounded towards minus infinity: `1//2` is `0`, `(-1)//2` is `-1`, `1//(-2)` is
`-1`, and `(-1)//(-2)` is `0`.

2. Not for complex numbers. Instead convert to floats using `abs()` if
appropriate.

3. Conversion from floating point to integer may round or truncate as in C;
see functions
[`math.floor()`](https://docs.python.org/3/library/math.html#math.floor) and
[`math.ceil()`](https://docs.python.org/3/library/math.html#math.ceil) for well-
defined conversions.

4. `float` also accepts the strings `“nan”` and `“inf”` with an optional
prefix `“+”` or `“-”` for Not a Number (NaN) and positive or negative infinity.

5. Python defines `pow(0, 0)` and `0 ** 0` to be `1`, as is common for
programming languages.

6. The numeric literals accepted include the digits 0 to 9 or any Unicode
equivalent (code points with the `Nd` property).
> See [Unicode Derived Numeric Type](http://www.unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt)
for a complete list of code points with the `Nd` property.

**TODO**
* Add excercises

## Using interactive mode as a calculator

**TODO**
* Add info about using `_` for previous output in interactive mode.

We shall be covering a few more in-built types [next](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python-More-Builtin-Types).