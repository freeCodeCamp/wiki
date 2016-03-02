# Python Basics

## Objects

> In Python, everything is an *object*.

*Objects* represent a logical grouping of attributes. Attributes are data and/or functions. When an object is created in Python it is created with an *identity*, *type*, and *value*.

In other languages, *primitives* are *values* that have no *properties* (attributes). For example, in javascript `undefined`, `null`, `boolean`, `string`, `number`, and `symbol` (new in ECMAScript 2015) are primitives.

In Python, there are no primitives. `None`, *booleans*, *strings*, *numbers*, and even *functions* are all *objects* regardless how they are created.

We can demonstrate this using some built-in functions:

* [`id`](https://docs.python.org/3/library/functions.html#id)
* [`type`](https://docs.python.org/3/library/functions.html#type)
* [`dir`](https://docs.python.org/3/library/functions.html#dir)
* [`issubclass`](https://docs.python.org/3/library/functions.html#issubclass)


Built-in constants `None`, `True`, and `False` are *objects*:

We test the `None` object here.

```python
>>> id(None)
4550218168
>>> type(None)
<class 'NoneType'>
>>> dir(None)
['__bool__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
>>> issubclass(type(None), object)
True
```

Next, let's inspect `True`.

```python
>>> id(True)
4550117616
>>> type(True)
<class 'bool'>
>>> dir(True)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
>>> issubclass(type(True), object)
True
```
No reason to leave out `False`!

```python
>>> id(False)
4550117584
>>> type(False)
<class 'bool'>
>>> dir(False)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
>>> issubclass(type(False), object)
True
```
*Strings*, even when created by a string literals, are also *objects*.

```python
>>> id("Hello campers!")
4570186864
>>> type('Hello campers!')
<class 'str'>
>>> dir("Hello campers!")
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> issubclass(type('Hello campers!'), object)
True
```

Same with *numbers*

```python
>>> id(42)
4550495728
>>> type(42)
<class 'int'>
>>> dir(42)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
>>> issubclass(type(42), object)
True
```

## Functions are Objects Too

> In Python, functions are first class objects. 

*Functions* in Python are also *objects*, created with an *identity*, *type*, and *value*. They too can be passed into other *functions*: 

```python
>>> id(dir)
4568035688
>>> type(dir)
<class 'builtin_function_or_method'>
>>> dir(dir)
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__']
>>> issubclass(type(dir), object)
True
```
It is also possible to bind functions to a name and called the bound function using that name:

```python
>>> a = dir
>>> print(a)
<built-in function dir>
>>> a(a)
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__']
```

Resources:
- https://www.jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/

## Variables, Names, and Binding

Having *objects* isn't useful unless there is a way to use them. In order to use an *object*, there must be a way to reference them. In Python this is done by **binding** objects to **names**. A detailed overview of can be found [here](https://docs.python.org/3/reference/executionmodel.html)

One way this is done is by using an [*assignment statement*](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements). This is commonly called *assigning a variable* in the context of Python. If speaking about programming in the context of other languages, **binding** an *object* to a **name** may be more precise.

```python
>>> some_number = 1
>>> print(some_number)
1
```

In the example above, the target of the assignment statement is a name (identifier), `some_number`. The *object* being assigned is the number 1. The statement **binds** the *object* to the **name**. The second statement, we use this binding `print` the *object* that `some_number` refers to.

The identifier is not preceeded by a *type*. That is because Python is dynamically-typed language. The identifier is bound to an *object* that does have a *type*, however, the identifier itself can be rebound to another *object* of a different *type*:

```python
>>> some_variable = 1
>>> print(some_variable)
1
>>> some_variable = "Hello campers!"
>>> print(some_variable)
Hello campers!
```

## Keywords are Reserved

Python has a list of [keywords](https://docs.python.org/3/reference/lexical_analysis.html#keywords) that cannot be used as identifiers (variable names):


```python
>>> False = "Hello campers!"
File "<stdin>"
SyntaxError: can't assign to keyword
```

```python
>>> break = "Hello campers!"
File "<stdin>", line 1
    break = "Hello campers!"
            ^
    SyntaxError: invalid syntax
```

## Code Blocks and Indentation

[Indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation)

**TODO: NOTE**
* Should this go here? What should be discussed at this point?
* Might be more suited for when functions are introduced."

## Scopes

**TODO: NOTE**
* This belongs near the code block and indentation information.
* This is also related to variables since name finding and binding is related to scopes.

**TODO: CONTENT**
* `global`
* `nonlocal`

## Commenting Code

Comments are used to annotate, describe, or explain code that is complex or difficult to understand. Python will intentionally ignore comments when it compiles to bytecode by the interpreter.
[`PEP 8`](https://www.python.org/dev/peps/pep-0008/#comments) has a section dealing with comments.

**Block** and **inline** comments start with a `#`, followed by a space before the comment:

```python
# This is a block comment.
print('Hello world!') # This is an inline commment.
```

Python does not include a formal way to write multiline comments. Each line of a comment spanning multiple lines should start with `#` and a space:

```python
# This is the first line of a multiline comment.
# This is the second line.
```

Another type of comment is the **docstring**, documented in [`PEP 257`](https://www.python.org/dev/peps/pep-0257/).
Docstrings are a specific type of comment that becomes the `__doc__` attribute. 

For a string literal to be a docstring, it must start and end with `\"\"\"` and be the first statement of the  module, function, class, or method definition it is documenting:

```python
class SomeClass():
    """Summary line for SomeClass.

    More elaborate descriptions may require using a
    a multiline docstring.
    """

    def method_a(self):
        """Single line summary of method_a."""
        pass
```
String literals that start and end with `"""` that are not docstrings (not the first statement), can be used for multiline strings. They will not become `__doc__` attributes. If they are not assigned to a variable, they will not generate bytecode. There is some discussion about using them as multiline comments found [here](http://stackoverflow.com/questions/7696924/multiline-comments-in-python).

## Built-in Constants

[Constants](https://docs.python.org/3/library/constants.html

Three commonly used built-in constants:

* `True`: The true value of the *bool* type.
* `False`: The false value of the *bool* type.
* `None` : The sole value of the type *NoneType*. None is frequently used to represent the absence of a value, as when default arguments are not passed to a function.

## Strings

Python allows `str` objects, or *strings*, to be expressed in a few different ways:

* Single quotes: `'Single quote strings can have "double" quotes inside.'`
* Double quotes: `"Double quote strings can have 'single' quotes inside."`
* Triple quoted: 

```python
    """Triple quoted strings can span multiple lines.
    Unescaped "double" and 'single' quotes in triple quoted strings are retained."""
```

```python
    '''Triple quoted strings can be 'single'or "double" quotes.
    Unescaped newlines are also retained.'''
```
#### Reference:
[Text Sequence Type _str_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)


## Escape Sequences

A list of escape sequences can be found [here](https://docs.python.org/3/reference/lexical_analysis.html#strings)

Escape sequences allow for including special characters into strings.

```python
>>> print('Single quote strings can have \'single\' quotes if they are escaped')
"Single quote strings can have 'single' quotes if they are escaped"
>>> print("Double quote strings can have \"double\" quotes if they are escaped")
'Double quote strings can have "double" quotes if they are escaped'
>>> print("Multiline strings\ncan be created\nusing escape sequences.")
Multiline strings
can be created
using escape sequences.
>>> print("Backslashes \\ need to be escaped.")
Backslashes \ need to be escaped.
```

A _raw_ string can be used by prefixing the string with `r` or `R` which allows for backslashes to be included without the need to escape them - 

```python
>>> print(r"Backslashes \ don't need to be escaped in raw strings.")
Backslashes \ don't need to be escaped in raw strings.
>>> print(r"An odd number of backslashes at the end of a raw string will cause an error\")
  File "<stdin>", line 1
    print(r"An odd number of backslashes at the end of a raw string will cause an error\")
                                                                                         ^
SyntaxError: EOL while scanning string literal
```

## Numeric Types

The [numeric types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex) for Python are:
* integers (`int`)
* floating point numbers (`float`)
    * [constructor](https://docs.python.org/3/library/functions.html#float)
* complex numbers
   * [constructor](https://docs.python.org/3/library/functions.html#complex)

The standard library adds numeric types for
* [fractions](https://docs.python.org/3/library/fractions.html#module-fractions)
* [decimals](https://docs.python.org/3/library/decimal.html#module-decimal)

Numeric objects are created from literals or as the result of functions and operators. The syntax for numeric literals is well [documented](https://docs.python.org/3/reference/lexical_analysis.html#numeric-literals).

## Integers

The theoretical domain for integers in python is negative infinity to infinity. In practice, integer values are limited by the amount of available memory.

In Python 2, there was a distinction between **`int`**, numbers that fit in a 32 or 64 bit *C long*, and **`long`**,  numbers limited by available memory. Python 3 unified the two types into just **`int`**, more info in [PEP 237](https://www.python.org/dev/peps/pep-0237/).

**`int` creation using integer literals**

[Integer Literals](https://docs.python.org/3/reference/lexical_analysis.html#integer-literals)

_Integer objects_ can be created using using integer literals. Unadorned numbers without decimals are integer literals:

```python
>>> 1234567890           # Unadorned numbers are integer literals
1234567890
>>> type(1234567890)
<class 'int'>
```

Numeric literals do not contain a sign, however creating negative _integer objects_ is possible by prefixing with a unary `-` (minus) operator with no space before the literal:

```python
>>> -1234567890
-1234567890
>>> type(-1234567890)
<class 'int'>
```

Likewise, positive integer objects can be created by prefixing a unary `+` (plus) operator with no space before the digits. Usually `+` is ommited:

```python
>>> +1234
1234
```

Binary (base 2, prefix: `0b` or `0B`), octal (base 8, prefix: `0o` or `0O`), and hexadecimal (base 16, prefix: `0x` or `0X`) integers can also be created using integer literals:

```python
>>> 0b1, 0b10, 0b11
(1, 2, 3)
>>> 0o1, 0o10, 0o11
(1, 8, 9)
>>> 0x1, 0x10, 0x11
(1, 16, 17)
```

Note that leading 0's for non-zero integer literals are **not allowed**:

```python
>>> 0     # Zero by itself is okay.
0
>>> 01    # Leading zero(s) cause SyntaxError.
  File "<stdin>", line 1
    01
     ^
SyntaxError: invalid token
```

The `int` [constructor](https://docs.python.org/3/library/functions.html#int) is another way to create _integer objects_.

```python
class int(x=0)
class int(x, base=10)
```

Creating _integer objects_ with integer literals is preferred when possible:

```python
>>> a = 1         # Prefer integer literal when possible.
>>> type(a)
<class 'int'>
>>> b = int(1)    # Works but unnecessary.
>>> type(b)
<class 'int'>
```

However, the constructor allows for creating _integer objects_ from other number types:

```python
>>> a = 1.123
>>> type(a)
<class 'float'>
>>> print(a)
1.123
>>> b = int(1.123)
>>> type(b)
<class 'int'>
>>> print(b)
1
```

Using the `int` constructor for floating point numbers will truncate the number towards zero:

```python
>>> int(-1.23)
-1
>>> int(1.23)
1
```

The built-in `boolean` constants are instances of the `bool` class, and are subclasses of the `int` class, making them a kind of numeric type:

```python
>>> type(True)
<class 'bool'>
>>> issubclass(bool, int)
True
```

If that doesn't make sense to you, don't worry. For now just remember that calling the int constructor with `boolean` objects will return _integer objects_:

```python
>>> int(True)
1
>>> int(False)
0
```

The `int` constructor will also make _integer objects_ from strings:

```python
>>> a = "10"
>>> type(a)
<class 'str'>
>>> b = int("10")
>>> type(b)
<class 'int'>
```

_Strings_ for the `int` constructor must represent an integer literal:

The second parameter of the `int` constructor is to specify a base (default: 10). Valid bases are 0 and 2-36.

If an explicit base is provided the first argument must be a string.

```python
>>> int("111", 2)
7
>>> int(111, 2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: int() can't convert non-string with explicit base
```

The string used for the `int` constructor with an explicit base must be a valid integer literal for that base:

```python
>>> int('11', 2)
3
>>> int('12', 2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 2: '12'
```

Both prefixed and non-prefixed strings of integer literals can be used, however, if used, the prefix must match the provided base.

```python
>>> int('1101', 2)
13
>>> int('0b1101', 2)
13
>>> int('0x1101', 2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 2: '0x1101'
```

If a prefixed string and base 0 is used, the created integer object will use the base specified by the prefix. If no prefix is used, then the base is assumed 10

```python
>>> int('100', 0)
100
>>> int('0b100', 0)
4
>>> int('0o100', 0)
64
```

## Floating Point Numbers

Some general information about floating point numbers and how they work in Python, can be found [here](https://docs.python.org/3/tutorial/floatingpoint.html).

Nearly all implementations of Python follow the IEEE 754 specification: Standard for Binary Floating-Point Arithmetic. More information found on the [IEEE site](http://grouper.ieee.org/groups/754/).

Float objects can be created using using [floating point literals](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals):

```python
>>> 3.14    
3.14
>>> 314.    # Trailing zero(s) not required.
314.0
>>> .314    # Leading zero(s) not required.
0.314
>>> 3e0
3.0
>>> 3E0     # 'e' or 'E' can be used.
3.0
>>> 3e1     # Positive value after e moves the decimal to the right.
30.0
>>> 3e-1    # Negative value after e moves the decimal to the left.
0.3
>>> 3.14e+2 # '+' not required but can be used for exponent part.
314.0
```

Numeric literals do not contain a sign, however creating negative float objects is possible by prefixing with a unary `-` (minus) operator with no space before the literal

```python
>>> -3.141592653589793
-3.141592653589793
>>> type(-3.141592653589793)
<class 'float'>
```

Likewise, positive float objects can be prefixed with a unary `+ (`plus) operator with no space before the literal. Usually `+` is omitted:

```python
>>> +3.141592653589793
3.141592653589793
```

Note that leading and trailing zero(s) are valid for floating point literals

```python
>>> 0.0
0.0
>>> 00.00
0.0
>>> 00100.00100
100.001
>>> 001e0010      # Same as 1e10
10000000000.0
```

The [`float` constructor](https://docs.python.org/3/library/functions.html#float) is another way to create `float` objects.

Creating `float` objects with floating point literals is preferred when possible:

```python
>>> a = 3.14         # Prefer floating point literal when possible.
>>> type(a)
<class 'float'>
>>> b = int(3.14)    # Works but unnecessary.
>>> type(b)
<class 'float'>
```
However, the float constructor allows for creating float objects from other number types:

```python
>>> a = 4
>>> type(a)
<class 'int'>
>>> print(a)
4
>>> b = float(4)
>>> type(b)
<class 'float'>
>>> print(b)
4.0
>>> float(400000000000000000000000000000000)
4e+32
>>> float(.00000000000000000000000000000004)
4e-32
>>> float(True)
1.0
>>> float(False)
0.0
```

The `float` constructor will also make `float` objects from strings that represent number literals:

```python
>>> float('1')
1.0
>>> float('.1')
0.1
>>> float('3.')
3.0
>>> float('1e-3')
0.001
>>> float('3.14')
3.14
>>> float('-.15e-2')
-0.0015
```

The `float` constructor can also be used to make numeric representation of `NaN` (Not a Number), negative `infinity` and `infinity` (note strings for these are case insensitive):

```python
>>> float('nan')
nan
>>> float('inf')
inf
>>> float('-inf')
-inf
>>> float('infinity')
inf
>>> float('-infinity')
-inf
```

## Complex Numbers

Complex numbers have a real and an imaginary part, each represented by a floating point number.

The imaginary part of a complex number can be created using an imaginary literal, this results in a complex number with a real part of `0.0`:

```python
>>> a = 3.5j
>>> type(a)
<class 'complex'>
>>> print(a)
3.5j
>>> a.real
0.0
>>> a.imag
3.5
```

No literal exists for creating a complex number with non-zero real and imaginary parts. To create a non-zero real part complex number, add an imaginary literal to a floating point number:

```python
>>> a = 1.1 + 3.5j
>>> type(a)
<class 'complex'>
>>> print(a)
(1.1+3.5j)
>>> a.real
1.1
>>> a.imag
3.5
```

Or use the [complex constructor](https://docs.python.org/3/library/functions.html#complex).

```python
class complex([real[, imag]])
```
The arguments used to call the complex constructor can be of numeric (including `complex`) type for either parameter:

```python
>>> complex(1, 1)
(1+1j)
>>> complex(1j, 1j)
(-1+1j)
>>> complex(1.1, 3.5)
(1.1+3.5j)
>>> complex(1.1)
(1.1+0j)
>>> complex(0, 3.5)
3.5j
```

A `string` can also be used as the argument. No second argument is allowed if a string is used as an argument

```python
>>> complex("1.1+3.5j")
(1.1+3.5j)
```

## Mutability and Variable Assignments

> Every object has an identity, a type and a value. An object’s identity never changes once it has been created; you may think of it as the object’s address in memory.
> [source](https://docs.python.org/3/reference/datamodel.html#data-model) 

Once an `object` is created, the type and identity can't be changed. Whether or not the object's value(s) can change after creation determines if the object is mutable (can change) or immutable (can't change).

So far we have learned about a few types of objects and their subclasses: `string`s and numeric (integer, floating point, complex, and boolean) objects. All of these are **immutable** objects.

This concept might be confusing at first because what good is an object if you can't modify it. What makes these objects usable is the ability to assign and reassign variables. Functions and operators can return new objects that can be assigned to variables.

Using the built-in [id function](https://docs.python.org/3/library/functions.html#id), which returns the identity of an object, we can see how this works.

Here are a few things to keep in mind:

* Assigning a variable does not mean that *variable* is the *object*. We used very specific language noting that *assignment statements* **bind** a **name** (identifier) to an *object*. Variables can be reassigned:
```python
 >>> a = 1        # Bind a to an object.
>>> id(a)
140355241530152
>>> a = 2        # Rebind a to another object.
>>> id(a)
140355241530128
```
* Assigning two different variables to *immutable objects* with the same value may result (not guaranteed) in them being bound to the same *object*
```python
>>> a = 1
>>> b = 1
>>> id(a)
140355241530152
>>> id(b)        # In this case a and b are bound to the same object.
140355241530152
```

* Assigning two different variables to *imutable objects* with different values will always result in them being bound to different *objects*:
```python
>>> a = 1
>>> b = 2
>>> id(a)
140355241530152
>>> id(b)       # a and b are bound to different objects.
140355241530128
```

* Reassigning variables does not change the original object, it binds them to a different object.
```python
>>> a = 1
>>> b = 1
>>> id(a)
140355241530152
>>> id(b)
140355241530152
>>> a = 2
>>> id(a)       # a is rebound to a different object.
140355241530128
>>> id(b)       # b is still bound to the original object.
140355241530152
```

