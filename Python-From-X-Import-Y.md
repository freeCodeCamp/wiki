# Python From X Import Y

If you have read the [`import statements`](#) wiki then you'd have seen me use this statement in one of the examples. Today, we'll try to understand what it does?

So picking up the same example:
```python
>>> from math import ceil, sqrt
>>> # here it would be
>>> sqrt(36)
<<< 6
```
if we hadn't used this but instead used this:
```python
>>> import math
>>> # here it would be
>>> math.sqrt(36)
<<< 6
```

then our code would look like`math.sqrt(x)` instead of `sqrt(x)` . This happens because when we use `import x` , a namespace `x` is itself created to avoid name conflicts. You have to access every single object of the module as `x.<name>`. But when we use `from x import y` we agree to add `y` to the main global namespace. So while using this we have to make sure that we don't have any object with same name in our program.

> **Never use `from x import y` if an object named `y` already exists**
