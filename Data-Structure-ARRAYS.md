#Arrays

`array` is a kind of data structure that can store a fixed-size sequential collection of elements of the same type. An `array` is used to store 
a collection of data, but it is often more useful to think of an `array` as a collection of variables of the same type.

`array` consists of contiguous memory locations. The lowest address corresponds to the first element and the highest address to the last 
element.

## Arrays in Python

Python doesn't have a native `array` data structure. An `array` in Python should not be confused with `list`. The major difference between a `list`
and an `array` in Python is that a `list` can have different types of values whereas an `array` should have all the values of same type.

**Declaration of `array`:**

```python
from array import array
intarray = array('i') # Declares an array of integer type
```

**Adding elements to `array`:**

```python
intarray.append(1) # Adds an integer value of 1 to the array
intarray.append(0) # Adds an integer value of 0 to the array
intarray.append(-1) # Adds an integer value of -1 to the array

intarray.append('d') # Would give a TypeError as the array is of integer type. 

#Resolve the above error and then move ahead.
```

**Printing an `array`:**

```python
print(intarray) # Returns array('i', [1, 4, -1])
print(intarray[0]) # Returns 1 which is the element at index 0 of the array
print(intarray[3]) # Would give IndexError as there is no element at index 3 of array. 

#Resolve the above error and then move ahead.

# To print all the elements of the array
for i in intarray:
	print(i)
```
