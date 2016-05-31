# BubbleSort

Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison based algorithm in which each pair of adjacent elements is
compared and elements are swapped if they are not in order. This algorithm does sorting in-place i.e. it does not creates a new array while
carrying out the sorting process.

####Example
[Animation of BubbleSort](http://www.sorting-algorithms.com/bubble-sort)

```
array = [5, 1, 4, 2, 8]

First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

Second Pass:
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any 
swap to know it is sorted.

Third Pass:
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
```

#### Python Implementation
```python
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
    return arr

arr = [5,3,23,1,43,2,54]
print(bubble_sort(arr)) # Prints [1, 2, 3, 5, 23, 43, 54]
```
:rocket: [Run Code](https://repl.it/CW0M)

#### [Complexity of Algorithm]((https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care))

**Worst and Average Case Time Complexity:** O(n*n). Worst case occurs when array is reverse sorted i.e. the elements are in decreasing order

**Best Case Time Complexity:** O(n). Best case occurs when array is already sorted. 
