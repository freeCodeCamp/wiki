# Java Array

An Array is used to store a collection of data of similar datatype. Arrays always start with the index of 0.

**Syntax:**

```java
dataType[] name_of_array;   // preferred way.
or
dataType name_of_array[];  //  works but not preferred way
```

## Code snippets of above syntax:

```java
double[] list; //preferred way.
or 
double list[]; //works but not preferred way.
```

Note: The style `double list[]` is not preferred as it comes from the C/C++ language and was adopted in Java to accommodate C/C++ programmers.

## Creating Arrays:

```java
dataType[] name_of_array = new dataType[arraySize];
```

## Code snippets of the above syntax:

```java
double[] List = new double[10];
```

## Another way to create an Array:

```java
dataType[] name_of_array = {value0, value1, ..., valuek};
```

## Code snippets of above syntax:

```java
double[] list = {1, 2, 3, 4};
```

_Example of code:_

```java
int[] a = new int[] {4,5,6,7,8}; //declare array
for (int i=0; i<a.length; i++) //loop goes through each index
{
    System.out.println(a[i]); //prints the array
}
```

:rocket: [Run Code](https://repl.it/CONn)

Output:

```java
4
5
6
7
8
```

Source: [Java Arrays](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
