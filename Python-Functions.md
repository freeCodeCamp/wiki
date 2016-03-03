# Functions

[Previous](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python-Operators)

[Home](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python)

[Next](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Web-Development-in-Python)


Functions are a way to organize code into reusable blocks. As a reminder, functions in Python are "first class objects."

Several built-in functions have been discussed and used previous examples. Just as important is the ability for users to define their own functions.

##### Resources

[Python Docs - Function Definitions](https://docs.python.org/3/reference/compound_stmts.html#function-definitions)

### Defining Functions

[Python Docs](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

We can create a function that writes the Fibonacci series to an arbitrary boundary:

```python
>>> def fib(n):    # write Fibonacci series up to n
...     """Print a Fibonacci series up to n."""
...     a, b = 0, 1
...     while a < n:
...         print(a, end=' ')
...         a, b = b, a+b
...     print()
...
>>> # Now call the function we just defined:
... fib(2000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
```
The keyword [def](https://docs.python.org/3/reference/compound_stmts.html#def) introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

The first statement of the function body can optionally be a string literal; this string literal is the function’s documentation string, or docstring. (More about docstrings can be found in the section Documentation Strings.) There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code; it’s good practice to include docstrings in code that you write, so make a habit of it.

### Calling Functions

A function definition statement does not execute the function. Executing (calling) a function is done by using the name of the function followed by parenthesis enclosing required arguments (if any).

```python
>>> def say_hello():
...     print('Hello')
...
>>> say_hello()
Hello
```
The execution of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table; whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables cannot be directly assigned a value within a function (unless named in a global statement), although they may be referenced.

```python
>>> a = 1
>>> b = 10
>>> def fn():
...     print(a)    # local a is not assigned, no enclosing function, global a referenced.
...     b = 20      # local b is assigned in the local symbol table for the function.
...     print(b)    # local b is referenced.
...
>>> fn()
1
20
>>> b               # global b is not changed by the function call.
10
```

The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, a new local symbol table is created for that call.

```python
>>> def greet(s):
...     s = "Hello " + s    # s in local symbol table is reassigned.
...     print(s)
...
>>> person = "Bob"
>>> greet(person)
Hello Bob
>>> person                  # person used to call remains bound to original object, 'Bob'.
'Bob'
```
The arguments used to call a function cannot be reassigned by the function, but arguments that reference mutable objects can have their values changed:

```python
>>> def fn(arg):
...     arg.append(1)
...
>>> a = [1, 2, 3]
>>> fn(a)
>>> a
[1, 2, 3, 1]
```

### `return` Statement

[Python Docs](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

All functions return a value when called.

If a return statement is followed by an expression list, that expression list is evaluated and the value is returned:

```python
>>> def greater_than_1(n):
...     return n > 1
...
>>> print(greater_than_1(1))
False
>>> print(greater_than_1(2))
True
```

If no expression list is specified, `None` is returned:

```python
>>> def no_expression_list():
...     return    # No return expression list.
...
>>> print(no_expression_list())
None
```

If a return statement is reached during the execution of a function, the current function call is left at that point:

```python
>>> def return_middle():
...     a = 1
...     return a
...     a = 2     # This assignment is never reached.
...
>>> print(return_middle())
1
```

If there is no return statement the function returns None when it reaches the end:

```python
>>> def no_return():
...     pass     # No return statement.
...
>>> print(no_return())
None
```

### Name binding and Aliasing Functions

A function definition introduces the function name in the current symbol table. The value of the function name has a type that is recognized by the interpreter as a user-defined function.

```python
>>> something = 1
>>> type(something)
<type 'int'>
>>> def something():
...     pass
...
>>> type(something)
<type 'function'>
>>> something = []
>>> type(something)
<type 'list'>
```

This value can be assigned to another name which can then also be used as a function. This serves as a general renaming mechanism:

```python
>>> fib
<function fib at 10042ed0>
>>> f = fib
>>> f(100)
0 1 1 2 3 5 8 13 21 34 55 89
```

### Coding Style

[Python Docs - Intermezzo Coding Style](https://docs.python.org/3/tutorial/controlflow.html#intermezzo-coding-style)

### Default Argument Values

[Python Docs - Default Argument Values](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)

### Keyword Arguments

[Python Docs - Keyword Arguments](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments)

### Arbitrary Arguments

[Python Docs - Unpacking Argument Lists](https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists)

### Nested functions

```python
>>> def outside_fn():
...     def inside_fn():
...         print('inside')
...     print('outside')
...     inside_fn()
...
>>> outside_fn()
outside
inside
>>> inside_fn()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'inside_fn' is not defined
```

### `global` and `nonlocal`

#### `global`


[Python Docs - the Global Statement](https://docs.python.org/3/reference/simple_stmts.html#the-global-statement)

#### `nonlocal`

[Python Docs - the nonlocal Statement](https://docs.python.org/3/reference/simple_stmts.html#the-nonlocal-statement)

[PEP 3104 - Access to Names in Outer Scopes](https://www.python.org/dev/peps/pep-3104/)

### Lambda Expressions

### Anonymous functions

[Python Docs - Lambda Expressions Tutorial](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

[Python Docs - Lambda Expressions](https://docs.python.org/3/reference/expressions.html#lambda)

### Decorators

[PEP 0318 - Decorators for Functions and Methods](https://www.python.org/dev/peps/pep-0318/)

[Python Docs - Decorators](https://docs.python.org/3/whatsnew/2.4.html?highlight=decorator)

Now that we have covered basics of Python, let us apply Python in [Web Development](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Web-Development-in-Python)!