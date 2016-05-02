# Keywords are Reserved

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

[Previous](Python-Basics)
