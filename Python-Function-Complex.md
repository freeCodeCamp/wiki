# Python Complex()

`complex()` is a built-in function in Python 3 that hanldles the creation of a complex number according to the arguments passed. It returns a complex number with the value `real + imag*1j` when called in form of `complex(real, imag)` or converts a string or number to a complex number.

## Arguments and Return Values

Two types of arguments can be passed.

#### Numeric Arguments

When called with two arguments, both being numbers of any numeric type (including complex), this function returns a complex number using both arguments.
`complex(x, y)` function returns a complex number with the value `x + y*1j`

```python
>>> complex(3, 2)
(3+2j)
>>> complex(3+4j, 6)
(3+10j)
```
When called with one numeric argument, it returns a complex number using  the argument as the real part and an imaginary part of zero.

```python
>>> complex(4)
(4+0j)
```
If called with no arguments, it returns a complex zero.

```python
>>> complex()
0j
```
#### String Argument

If the first argument is a string, it will be interpreted as a *complex number* and the function must be called without a second parameter. It will return the interpreted  complex number.

```python
>>> complex('3+4j')
(3+4j)
```
The string must be in the form of a valid complex number, otherwise the function will raise a *ValueError* exception and it must not contain whitespace around the central + or - operator. For example, `complex('1+2j')` is fine, but `complex('1 + 2j')` raises *ValueError*.

## Examples

```python
print(complex(4, 5))      # prints (4+5j)
print(complex(6))         # prints (6+0j)
print(complex())          # prints 0j
print(complex(2.5,5))     # prints (2.5+5j)
print(complex(5,6+8j))    # prints (-3+6j) as 5+(6+8j)*1j = -3+6j
print(complex('10+20j'))  # prints (10+20j)
```
:rocket: [Run Code](https://repl.it/CTGi/3)

[Official Documentation](https://docs.python.org/3/library/functions.html#complex)
