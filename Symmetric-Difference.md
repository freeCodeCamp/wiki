Symmetric Difference is the difference between **two** sets.

So in the Symmetric Difference Bonfire you would work through the arrays of numbers something like this - 

`sym(A, B, C)`
Translates to
`sym(sym(A,B),C)`

Or in plain English - First find the Symmetric Difference of Set A and Set B. Then find the Symmetric Difference of this new set and Set C.

So - 

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])`

would equal

`[1,4,5]`

Here's a nice video tutorial (with an awful fake British accent!) -

[YouTube - Symmetric Difference](https://www.youtube.com/watch?v=PxffSUQRkG4)