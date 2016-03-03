# More Built-in Types

[Previous](Python-Operators)

[Home](Python)

[Next](Python-Functions)

## Containers

Some objects contain references to other objects; these are called containers.
Examples of containers are tuples, lists and dictionaries. The references are
part of a container’s value. In most cases, when we talk about the value of a
container, we imply the values, not the identities of the contained objects;
however, when we talk about the mutability of a container, only the identities
of the immediately contained objects are implied. So, if an immutable container
(like a tuple) contains a reference to a mutable object, its value changes if
that mutable object is changed.

[Python Docs - Object Values & Types](https://docs.python.org/3/reference/datamodel.html#objects-values-and-types)

## Iterators

Python supports a concept of iteration over containers. This is implemented
using two distinct methods; these are used to allow user-defined classes to
support iteration.

[Python Docs - Iterator Types](https://docs.python.org/3/library/stdtypes.html#iterator-types)

**TODO: Clarify what iteration means and what iterators can be used for.**

* Objects can implement a `__iter__()` method that returns an iterator object to
support iteration.
* Iterator objects must implement:
    * `__iter__()`: returns the iterator object.
    * `__next__()`: returns the next object of the container.

```python
iterator_object = 'abc'.__iter__()
print(iterator_object)
print(id(iterator_object))
print(id(iterator_object.__iter__())) # Returns the iterator itself.
print(iterator_object.__next__())     # Returns 1st object and advances iterator.
print(iterator_object.__next__())     # Returns 2nd object and advances iterator.
print(iterator_object.__next__())     # Returns 3rd object and advances iterator.
print(iterator_object.__next__())     # Raises StopIteration Exception.
```

Output :

```asciidoc
<str_iterator object at 0x102e196a0>
4343305888
4343305888
a
b
c
---------------------------------------------------------------------------
StopIteration                             Traceback (most recent call last)
<ipython-input-1-d466eea8c1b0> in <module>()
      6 print(iterator_object.__next__())     # Returns 2nd object and advances iterator.
      7 print(iterator_object.__next__())     # Returns 3rd object and advances iterator.
----> 8 print(iterator_object.__next__())     # Raises StopIteration Exception.

StopIteration:
```

## Sequence Types

These represent finite ordered sets indexed by non-negative numbers. The
built-in function `len()` returns the number of items of a sequence. When the
length of a sequence is `n`, the index set contains the numbers `0, 1, ...,
n-1`. Item `i` of sequence a is selected by `a[i]`.

[Python Docs - Standard Type Hierarchy](https://docs.python.org/3/reference/datamodel.html#the-standard-type-hierarchy)

* Built-in sequence types are:
    * `list`
    * `tuple`
    * `range`
* Built-in sequence types are iterable types (implement required `__iter__()`
method).
* Operations:
    * [Common Sequence Operations](https://docs.python.org/3/library/stdtypes.html#common-sequence-operations)
    * [Mutable Sequence Types](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types)
    * [Immutable Sequence Types](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types)

### Lists

**TODO: `list` basic info**

[Python Docs - Lists](https://docs.python.org/3/library/stdtypes.html#lists)

**Creation:**

An empty `list` is created using a pair of square brackets, `[]`:
```python
>>> empty_list = []
>>> type(empty_list)
<class 'list'>
>>> len(empty_list)
0
```

A `list` can be created with elements by enclosing a comma separated list of
elements with square brackets. Lists allow for the elements to be of different
types (heterogeneous) but are most commonly of a single type (homogeneous):
```python
>>> homogeneous_list = [1, 1, 2, 3, 5, 8]
>>> type(homogeneous_list)
<class 'list'>
>>> print(heterogeneous_list)
[1, 1, 2, 3, 5, 8]
>>> len(homogeneous_list)
6
>>> heterogeneous_list = [1, "Hello Campers!"]
>>> print(heterogeneous_list)
[1, "Hello Campers!"]
>>> len(heterogeneous_list)
2
```

The `list` constructor can also be used to create a `list`:

```python
>>> empty_list = list()                            # Creates an empty list
>>> print(empty_list)
[]
>>> list_from_iterable = list("Hello campers!")    # Creates a list from an
iterable.
>>> print(list_from_iterable)
['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!']
```

**Accessing elements of a `list`:**

```python
>>> my_list = [1, 2, 9, 16, 25]
>>> print(my_list)
[1, 2, 9, 16, 25]
```

*Zero indexed*
```python
>>> my_list[0]
1
>>> my_list[1]
2
>>> my_list[2]
9
```

*Wrap around indexing*
```python
>>> my_list[-1]
25
>>> my_list[-2]
16
```

**Mutable:**

`lists` are mutable containers. Mutable containers are containers that allow
changes to which objects are contained by the container. **TODO: ADD MORE?**

**TODO: Which of these should be discussed here:**

[Python Docs - More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

* `list.append(x)`
Add an item to the end of the list. Equivalent to a[len(a):] = [x].

* `list.extend(L)`
Extend the list by appending all the items in the given list. Equivalent to
a[len(a):] = L.

* `list.insert(i, x)`
Insert an item at a given position. The first argument is the index of the
element before which to insert, so a.insert(0, x) inserts at the front of the
list, and a.insert(len(a), x) is equivalent to a.append(x).

* `list.remove(x)`
Remove the first item from the list whose value is x. It is an error if there is
no such item.

* `list.pop([i])`
Remove the item at the given position in the list, and return it. If no index is
specified, a.pop() removes and returns the last item in the list. (The square
brackets around the i in the method signature denote that the parameter is
optional, not that you should type square brackets at that position. You will
see this notation frequently in the Python Library Reference.)

* `list.clear()`
Remove all items from the list. Equivalent to del a[:].

* `list.index(x)`
Return the index in the list of the first item whose value is x. It is an error
if there is no such item.

* `list.count(x)`
Return the number of times x appears in the list.

* `list.sort(key=None, reverse=False)`
Sort the items of the list in place (the arguments can be used for sort
customization, see sorted() for their explanation).

* `list.reverse()`
Reverse the elements of the list in place.

* `list.copy()`
Return a shallow copy of the list. Equivalent to a[:].

### Tuples

**TODO: `Tuple` basic info**

[Python Docs - Tuples](https://docs.python.org/3/library/stdtypes.html#tuples)

**Creation:**

An empty `tuple` is created using a pair of round brackets, `()`:
```python
>>> empty_tuple = ()
>>> print(empty_tuple)
()
>>> type(empty_tuple)
<class 'tuple'>
>>> len(empty_tuple)
0
```

A `tuple` with elements is created by separating the elements with commas
(surrounding round brackets, `()`, are optional with exceptions):
```python
>>> tuple_1 = 1, 2, 3       # Create tuple without round brackets.
>>> print(tuple_1)
(1, 2, 3)
>>> type(tuple_1)
<class 'tuple'>
>>> len(tuple_1)
3
>>> tuple_2 = (1, 2, 3)     # Create tuple with round brackets.
>>> print(tuple_2)
(1, 2, 3)
>>> tuple_3 = 1, 2, 3,      # Trailing comma is optional.
>>> print(tuple_3)
(1, 2, 3)
>>> tuple_4 = (1, 2, 3,)    # Trailing comma in round brackets is also optional.
>>> print(tuple_4)
(1, 2, 3)
```

A `tuple` with a single element must have the trailing comma (with or without
round brackets):
```python
>>> not_tuple = (2)    # No trailing comma makes this not a tuple.
>>> print(not_tuple)
2
>>> type(not_tuple)
<class 'int'>
>>> a_tuple = (2,)     # Single element tuple. Requires trailing comma.
>>> print(a_tuple)
(2,)
>>> type(a_tuple)
<class 'tuple'>
>>> len(a_tuple)
1
>>> also_tuple = 2,    # Round brackets omitted. Requires trailing comma.
>>> print(also_tuple)
(2,)
>>> type(also_tuple)
<class 'tuple'>
```

Round brackets are required in cases of ambiguity (if the tuple is part of a
larger expression):

> Note that it is actually the comma which makes a tuple, not the parentheses.
The parentheses are optional, except in the empty tuple case, or when they are
needed to avoid syntactic ambiguity. For example, `f(a, b, c)` is a function
call with three arguments, while `f((a, b, c))` is a function call with a
3-tuple as the sole argument.

```python
>>> print(1,2,3,4,)          # Calls print with 4 arguments: 1, 2, 3, and 4
1 2 3 4
>>> print((1,2,3,4,))        # Calls print with 1 argument: (1, 2, 3, 4,)
(1, 2, 3, 4)
>>> 1, 2, 3 == (1, 2, 3)     # Equivalent to 1, 2, (3 == (1, 2, 3))
(1, 2, False)
>>> (1, 2, 3) == (1, 2, 3)   # Use surrounding round brackets when ambiguous.
True
```

A `tuple` can also be created with the `tuple` constructor:

[Python Docs - Tuple](https://docs.python.org/3/library/stdtypes.html#tuple)

```python
>>> empty_tuple = tuple()
>>> print(empty_tuple)
()
>>> tuple_from_list = tuple([1,2,3,4])
>>> print(tuple_from_list)
(1, 2, 3, 4)
>>> tuple_from_string = tuple("Hello campers!")
>>> print(tuple_from_string)
('H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!')
>>> a_tuple = 1, 2, 3
>>> b_tuple = tuple(a_tuple)    # If the constructor is called with a tuple for
the iterable,
>>> a_tuple is b_tuple          # the tuple argument is returned.
True
```

**Accessing elements of a `tuple`:**

Elements of `tuples` are accessed and index the same way that `lists` are.

```python
>>> my_tuple = 1, 2, 9, 16, 25
>>> print(my_tuple)
(1, 2, 9, 16, 25)
```

*Zero indexed*
```python
>>> my_tuple[0]
1
>>> my_tuple[1]
2
>>> my_tuple[2]
9
```

*Wrap around indexing*
```python
>>> my_tuple[-1]
25
>>> my_tuple[-2]
16
```

**Packing and Unpacking:**

The statement `t = 12345, 54321, 'hello!'` is an example of tuple packing: the
values `12345`, `54321` and `'hello!'` are packed together in a tuple. The
reverse operation is also possible:

```python
>>> x, y, z = t
```

This is called, appropriately enough, sequence unpacking and works for any
sequence on the right-hand side. Sequence unpacking requires that there are as
many variables on the left side of the equals sign as there are elements in the
sequence. Note that multiple assignment is really just a combination of tuple
packing and sequence unpacking.

```python
>>> t = 1, 2, 3    # Tuple packing.
>>> print(t)
(1, 2, 3)
>>> a, b, c = t    # Sequence unpacking.
>>> print(a)
1
>>> print(b)
2
>>> print(c)
3
>>> d, e, f = 4, 5, 6    # Multiple assignment combines packing and unpacking.
>>> print(d)
4
>>> print(e)
5
>>> print(f)
6
>>> a, b = 1, 2, 3       # Multiple assignment requires each variable (right)
have a matching element (left).
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: too many values to unpack (expected 2)
```

**Immutable:**

`tuples` are immutable containers, guaranteeing **which** objects they contain
will not change. It does **not** guarantee that the objects they contains will
not change:
```python
>>> a_list = []
>>> a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element.
>>> print(a_tuple)
([],)
```
```python
>>> a_list.append("Hello campers!")
>>> print(a_tuple)         # Element of the immutable is mutated.
(['Hello campers!'],)
```

**Uses:**

Functions can only return a single value, however, a heterogenuous `tuple` can
be used to return multiple values from a function. One example is the built-in
`enumerate` function that returns an iterable of heterogenuous `tuples`:
```python
>>> greeting = ["Hello", "campers!"]
>>> enumerator = enumerate(greeting)
>>> enumerator.next()
>>> enumerator.__next__()
(0, 'Hello')
>>> enumerator.__next__()
(1, 'campers!')
```

[Python Docs - Tuples and Sequences](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

### Range

**TODO: `range` basic info**

[Python Docs - Ranges](https://docs.python.org/3/library/stdtypes.html#ranges)

**Creation:**

`ranges` are created using the `range` constructor. The parameters for the
constructor are:
* `start`: Inclusive first value of the range (optional integer, defaults to 0).
* `stop`  : Exclusive stop value, range stops when this value or greater would
be provided (required integer).
* `step` : The amount added to the current value to get the next value (optional
integer, defaults to 1).

```python
>>> range(10)          # Only the stop parameter is required.
range(0, 10)
>>> range(0, 10)       # Default for start parameter is 0.
range(0, 10)
>>> range(0, 10, 1)    # Default for step is 1. Start parameter is required if
step is needed.
range(0, 10)
```

**Examples:**

Since `ranges` are iterables they can be passed into the `list` and `tuple`
constructors to create those types of sequences. Using this fact, we can
visualize some examples:
```python
>>> list(range(10))     # range as argument for list constructor.
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> tuple(range(10))    # range as argument for tuple constructor.
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```
Zero length `ranges`:
```python
>>> list(range(10, 0))        # start greater than stop with postive step.
[]
>>> list(range(10, 10))       # start equal to stop with postive step.
[]
>>> list(range(10, 10, -1))   # start equal to stop with negative step.
[]
>>> list(range(0, 10, -1))    # start less than stop with negative step.
[]
```
`ranges` with step arguments:
```python
>>> list(range(0, 10, 2))       # next value would be 10, stops at 8.
[0, 2, 4, 6, 8]
>>> list(range(0, 10, 3))       # next value would be 12, stops at 9.
[0, 3, 6, 9]
>>> list(range(0, 10, 4))       # next value would be 12, stops at 8.
[0, 4, 8]
>>> list(range(10, 0, -1))      # negative step makes decreasing ranges.
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
>>> list(range(-5, -30, -3))    # negative integers are valid arguments.
[-5, -8, -11, -14, -17, -20, -23, -26, -29]
```

**Benefits:**

The benefit of using `range` is that regardless of how large of a range
specified, only a small amount of memory is needed to store the `range`, the
values for start, stop, and step. The individual values of the `ranges` are
calculated upon iteration.

[Python Docs - sys.getsizeof](https://docs.python.org/3/library/sys.html#sys.getsizeof)

```python
>>> import sys
>>> a_range = range(1000000)
>>> a_list = list(a_range)
>>> a_tuple = tuple(a_range)
>>> sys.getsizeof(a_range)
48
>>> sys.getsizeof(a_list)
9000112
>>> sys.getsizeof(a_tuple)
8000048
```

**TODO: Methods `ranges` do and do not implement**

## Set Types

A set object is an unordered collection of distinct hashable objects. Common
uses include membership testing, removing duplicates from a sequence, and
computing mathematical operations such as intersection, union, difference, and
symmetric difference.

[Python Docs - Set Types Set Frozenset](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)

**TODO: Explain hash/hashable**

### Set

**TODO: `set` basic info**

**Mutable**

**Creation:**

`set` literal:

Curly brackets, `{}`, can't be used to create an empty set:
```python
>>> not_set = {}     # set constructor must be used to make empty sets.
>>> type(not_set)    # Empty curly brackets create empty dictionaries.
<class 'dict'>
```

`set` constructor:

### FrozenSet

**TODO: `frozenset` basic info**

**Immutable**

**Creation:**

`frozenset` constructor:

**TODO: Examples**

## Big O?

**TODO: Find external big-O resource?**

## Mapping Types

A mapping object maps hashable values to arbitrary objects. Mappings are
mutable objects.

[Python Docs - Mapping Types Dict](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)

### Dict

**TODO: `dict` basic info**

A dictionary’s keys are almost arbitrary values. Values that are not hashable,
that is, values containing lists, dictionaries or other mutable types (that are
compared by value rather than by object identity) may not be used as keys.
Numeric types used for keys obey the normal rules for numeric comparison: if two
numbers compare equal (such as `1` and `1.0`) then they can be used
interchangeably to index the same dictionary entry. (Note however, that since
computers store floating-point numbers as approximations it is usually unwise to
use them as dictionary keys.)

**TODO: See if anything from
[Python Docs - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) should be
added**

#### Creation:

`dict` literal:

`dict` constructor:

#### Methods:

**TODO: [Python Docs - Dictionary View Objects](https://docs.python.org/3/library/stdtypes.html#dictionary-view-objects)**

#### Examples:

#### Uses:

Next, we shall embark upon [Python-Functions](Python-Functions)