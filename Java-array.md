# Java Array
Array is used to store a collection of data of similar datatype. Array always starts with 0 index.

## Syntax:
    dataType[] name_of_array;   // preferred way.
    or
    dataType name_of_array[];  //  works but not preferred way

##### code snippets of above syntax:
     double[] list; //preferred way.
     or 
     double list[]; //works but not preferred way.

##### Creating Arrays:

    dataType[] name_of_array = new dataType[arraySize];


##### Code snippets of above syntax:

    double[] List = new double[10];


##### Another way to create an Array:

    dataType[] name_of_array = {value0, value1, ..., valuek};
    

##### Code snippets of above syntax:
    double[] list = {1, 2, 3, 4};

- Example of code:
```
 int[] a = new int[] {4,5,6,7,8};//declare array
for (int i=0; i<a.length; i++)//loop goes through each index
{
  System.out.println(a[i]);// prints the array

}
```
Output:
```
4
5
6
7
8
```

Source: [Java Array](http://www.tutorialspoint.com/java/java_arrays.htm)


