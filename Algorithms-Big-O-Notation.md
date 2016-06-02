# Big-O Notation

In mathematics, Big-O notation is a symbolism used to describe and compare the *limiting behavior* of a function.
A function's limiting behavior is how the function acts as it trends towards a particular value and in big-O notation it is usually as it trends towards infinity.
In short, Big-O notation is used to describe the growth or decline of a function, usually with respect to another function.

[NOTE: x^2 is equivalent to x * x or 'x-squared']

For example we say that x = O(x^2) for all x > 1 or in other words, x^2 is an upper bound on x and therefore it grows faster.
The symbol of a claim like x = O(x^2) for all x > *n* can be substituted with  x <= x^2 for all x > *n* where *n* is the minimum number that satisfies the claim, in this case 1.
Effectively, we say that a function f(x) that is O(g(x)) grows slower than g(x) does.

Comparitively, in computer science and software development we can use Big-O notation in order to describe the time complexity or efficiency of our algorithm.
Specifically when using Big-O notation we are describing the efficiency of the algorithm with respect to an input: *n*, usually as *n* approaches infinity.
When examining algorithms, we generally want a lower time complexity, and ideally a time complexity of O(1) which is constant time.
Through the comparison and analysis of algorithms we are able to create more efficient applications.

## Examples

As an example, we can examine the time complexity of the [bubble sort](https://github.com/FreeCodeCamp/wiki/blob/master/Algorithms-Bubble-Sort.md#algorithm-bubble-sort) algorithm and express it using big-O notation.

#### Bubble Sort:

```c++
// Function to implement bubble sort
void bubble_sort(int array[], int n)
{
    // Here n is the number of elements in array
    int temp;
    for(int i = 0; i < n-1; i++)
    {
        // Last i elements are already in place
        for(int j = 0; j < n-i-1; j++)
        {
            if (array[j] > array[j+1])
            {
                // swap elements at index j and j+1
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
```

Looking at this code, we can see that in the best case scenario where the array is already sorted, the program will only make *n* comparisons as no swaps will occur.
Therefore we can say that the best case time complexity of bubble sort is O(*n*).

Examining the worst case scenario where the array is in reverse order, the first iteration will make *n* comparisons while the next will have to make *n* - 1 comparisons and so on until only 1 comparison must be made.
The big-O notation for this case is therefore *n* * [(*n* - 1) / 2] which = 0.5*n*^2 - 0.5*n* = O(*n*^2) as the *n*^2 term dominates the function which allows us to ignore the other term in the function.

We can confirm this analysis using [this handy big-O cheat sheet](http://bigocheatsheet.com/) that features the big-O time complexity of many commonly used data structures and algorithms

It is very apparent that while for small use cases this time complexity might be alright, at a large scale bubble sort is simply not a good solution for sorting.
This is the power of big-O notation: it allows developers to easily see the potential bottlenecks of their application, and take steps to make these more scalable.

For more information on why Big-O notation and algorithm analysis is important visit this [hike](https://www.freecodecamp.com/videos/big-o-notation-what-it-is-and-why-you-should-care)!
