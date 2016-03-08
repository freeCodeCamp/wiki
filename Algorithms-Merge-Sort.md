# Merge Sort

Most modern languages have an inbuilt sort() function which automatically sorts an input array or list. Did you ever wonder how the sort function actually works on the inside?. Knowing common sorting algorithms and their implementations is the most important part of a coding interview. In this series of articles, we will look at several important sorting algorithms. How they are implemented, the time and space complexity etc. Our very first post is on Merge Sort.

To learn about Merge Sort, a basic knowledge about [Recursion](http://programmers.stackexchange.com/questions/25052/in-plain-english-what-is-recursion) is a pre-requisite. Merge Sort is based on the principle of Divide and Conquer. The whole process of sorting an array of N integers can be summarized into three steps-

- Divide the array into two halves.
- Sort the left half and the right half using the same recurring algorithm.
- Merge the sorted halves.

The biggest advantage of using Merge sort is that the [time complexity](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) is only n*log(n) to sort an entire Array. It is a lot better than n^2 running time of bubble sort or insertion sort.
Before we write the JavaScript code, let us understand how merge sort works with the help of a diagram.

![alt tag] (http://i67.tinypic.com/2ahe49y.png)

- Initially we have an array of 6 unsorted integers Arr(5, 8, 3, 9, 1, 2)
- We split the array into two halves Arr1 = (5, 8, 3) and  Arr2 = (9, 1, 2).
-  Again, we divide them into two halves: Arr3 = (5, 8) and Arr4 = (3) and  Arr5 = (9, 1) and Arr6 = (2)
-  Again, we divide them into two halves: Arr7 = (5), Arr8 =  (8),  Arr9 = (9),  Arr10 = (1) and Arr6 = (2)
-  We will now compare the elements in these sub arrays in order to merge them. 

Let's write MergeSort in JavaScript:

```javascript
function mergeSort (arr) {    
  if (arr.length < 2) return arr;
  var mid = Math.floor(arr.length /2);
  var subLeft = mergeSort(arr.slice(0,mid));
  var subRight = mergeSort(arr.slice(mid));
  return merge(subLeft, subRight);
  }
  
```
First we check the length of the array. If it is 1 then we simply return the array. This would be our base case. Else, we will find out the middle value and divide the array into two halves. We will now sort both of the halves with recursive calls to MergeSort function. 
```javascript
function merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
    }
    
```
When we merge the two halfs, we store the result in an auxilliary array. We will compare the starting element of left array to the starting element of right array. Whichever is lesser will be pushed into the results array and we will remove it from there respective arrays using [shift() operator](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/js-Array-prototype-shift). If we still end up with values in either of left or right array, we would simply concatenate it in the end of the result.

Here is the sorted result:

```javascript
var test = [5,6,7,3,1,3,15];
console.log(mergeSort(test));

>> [1, 3, 3, 5, 6, 7, 15]
```

If you still have problem in understanding MergeSort, a [video explanation] (https://www.youtube.com/watch?v=TzeBrDU-JaY) will make it even more clear. 
