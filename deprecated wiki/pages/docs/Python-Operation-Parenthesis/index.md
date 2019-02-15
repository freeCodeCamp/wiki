---
title: Python Operation Parenthesis
order: 5
---
# Python Parenthesis for Boolean Operations

Just as in math, parenthesis can be used to override order of operations:

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

[Previous](Python-Operators)
