# `Import` statements
While learning programming and while reading some resources you'd have come across this word 'abstraction' which simply put means to reduce and reuse the code as much as possible.

Functions and Modules facilitate abstraction. You create functions when you'd want to do some thing repeatedly within a file.

Modules come into picture when you want to reuse a group of functions in different source files. Modules are also useful in structuring the program well.

* Using Standard Libraries and other third party modules:
* Structuring the program

## Using Standard Libraries
Example:
You can read about the methods/functions of all the standard libraries in the official Python Docs in detail.

```python
import time
for i in range(100):
    time.sleep(1)   # Waits for 1 second and then executes the next command
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started
```

```python
# To calculate the execution time of a part of program
import time
start = time.time()
# code here
end = time.time()
print('Execution time:' , end-start)
```

```python
# Using math Module
import math
print(math.sqrt(100))   # prints 10
```
## Using third party Modules
Third party modules don't come bundled with python , but we have to install it externally using package managers like [`pip`](https://bootstrap.pypa.io/get-pip.py) and [`easy install`](https://bootstrap.pypa.io/ez_setup.py)

```python
# To make http requests
import requests
rq = requests.get(target_url)
```
more about python-requests module [here](http://docs.python-requests.org/en/master/)

## To structure programs

We want to make a program that has various functions regarding prime numbers. So lets start. We will define all the functions in `prime_functions.py`

```python
# prime_functions.py
from math import ceil, sqrt
def isPrime(a):
    if a == 2:
        return True
    elif a % 2 == 0:
        return False
    else:
        for i in range(3,ceil(sqrt(a)) + 1,2):
            if a % i == 0:
                return False
        return True

def print_n_primes(a):
    i = 0
    m = 2
    while True:
        if isPrime(m) ==True:
            print(m)
            i += 1
        m += 1
        if i == a:
            break
```
Now we want to use the functions that we just created in `prime_functions.py` so we create a new file `playground.py` to use those functions.

> *Please note that this program is far too simple to make two separate files, it was just to demonstrate. But when there are large complex programs, making different files is really useful.*

```python
# playground.py
import prime_functions
print(prime_functions.isPrime(29)) # returns True
```
