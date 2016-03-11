# Java Loops

Whenever you need to execute a block of code multiple times, a loop will often come in handy. In general, a loop looks something like this:

![Loop Schematic Diagram](http://cse.iitkgp.ac.in/pds/notes/img/loop2.gif)

## Types of Loops

Java has 4 types of loops - the `while`, `do while`, `for` and `for each`. While you can pick your favorite and use that almost everywhere, each of them has certain advantages in different applications.

You can use a *debugger* (a lot of IDEs have one - check out [Eclipse](http://eclipsetutorial.sourceforge.net/Debugger-Tutorial-Companion-Document.pdf), [Netbeans](https://netbeans.org/kb/docs/java/debug-visual.html), [IntelliJ](https://www.jetbrains.com/idea/help/debugging-your-first-java-application.html) etc.), [set up breakpoints](http://help.eclipse.org/mars/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Ftasks%2Ftask-add_line_breakpoints.htm) and visualize how the following code about loops, works step-by-step.

### The While loop

The `while` statement evaluates the `expression` (which must return a boolean value), and if it is `true`, the `Statements` get executed.

```java
while (expression) 
{
  // Statements
}
```

In the following example, the `expression` is given by `iter_While < 10`. As we increment `iter_While` by `1` each time the loop is executed, the `while` loop will keep going till `iter_While` reaches `10`.

```java
int iter_While = 0;
while (iter_While < 10) 
{
    System.out.print (iter_While + " ");
    // Increment the counter
    // Iterated 10 times, iter_While 0,1,2...9
    iter_While++;
}
System.out.println ("iter_While Value: " + iter_While);
```

Output:

    0 1 2 3 4 5 6 7 8 9
    iter_While Value: 10
    

### The Do While loop

The `do while` is very similar to the `while` loop in the way it works, but is *exit controlled* (unlike the `for` and `while` loops which are *entry controlled*), that is, the truth value of its `expression` is evaluated after the execution of `Statements`.

```java
do 
{
    // Statements
} 
while (expression);
```

This kind of loop is particularly useful if you want your `Statements` to be executed atleast once, irrespective of what `expression` evaluates to. You want to do this if you are initializing a variable inside your loop and plan on using its value later.

```java
int iter_DoWhile = 20;
do 
{
    System.out.print (iter_DoWhile + " ");

    // Increment the counter
    iter_DoWhile++;
} 
while(iter_DoWhile < 10);
System.out.println ("iter_DoWhile Value: " + iter_DoWhile);
```

Output:

    20
    iter_DoWhile Value: 21

### The For loop

The `for` loop give you a compact way to iterate over a range of values.

```java
for (initialization; expression; increment) 
{
    // Statements
}
```

* `initialization` - Initializes the loop and is executed just once, at the beginning.
* `expression` - Evaluated at the beginning of each iteration. If the `expression` evaluates to `true`, `Statements` will get executed.
* `increment` - Invoked after each iteration through the loop. You can increase/decrease the value of variables here.

```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
{
    System.out.print (iter_For + " ");
    // Iterated 10 times, iter_For 0,1,2...9
}
System.out.println("iter_For Value: " + fooFor);
```

Output:

    0 1 2 3 4 5 6 7 8 9
    iter_For Value: 10

### The For Each loop

Also called the enhanced for loop, it is an extremely useful and simple way to iterate over each item in a collection, arrays as well as objects that implement the Iterable interface.

```java
for (object : iterable)
{
    // Statements
}
```

The loop is read as - for each element in the `iterable` (could be an array, collectable etc.). The `object` type must match the element type of the `iterable`. 

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

for (int numbers : number_list) 
{
    System.out.print (numbers + " ");
    //Iterated 10 times, numbers 0,1,2...9
}
```

Output:

    0 1 2 3 4 5 6 7 8 9
    
In the above code snippet, `number_list` is an array. If you don't know what this is, don't worry about it. An array is a container object that holds a fixed number of values of a single type, but more on this later.

## Loop Control Statemens

### break

Terminates the loop and starts the execution of the code that immediately follows the loop. If you have nested loops, the `break` statement will only end the loop in which it is placed.

```java
for (int i = 0; i < 10; i++) // Loop 1
{
    for (int j = 0; j < 10; j++) // Loop 2
    {
        if (i == 5 && j == 5) 
        {
            break;
            // Will terminate Loop 2, but Loop 1 will keep going
        }
    }
}
```

But if you do want to break out of the outer loop too, you can use a label to exit:

```java
loop1: // This is a label
for (int i = 0; i < 10; i++) // Loop 1
{
    for (int j = 0; j < 10; j++) // Loop 2
    {
        if (i == 5 && j == 5) 
        {
            break loop1;
            // Will break out of Loop 1, instead of just breaking out of Loop 2
        }
    }
}
```

`break` statements can be particulary useful while searching for an element in an array. Using `break` in the following code improves efficiency as the loop stops as soon as the element we are looking for (`searchFor`) is found, instead of going on till the end of `arrayInts` is reached. 

```java
int[] number_list = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
int searchFor = 5;

for (int i : arrayInts) 
{
    if (arayOfInts[i] == searchfor)
        break;
}
```

### continue

The `continue` statement makes a loop skip all the following lines after the continue and jump ahead to the beginning of the next iteration. In a `for` loop, control jumps to the update statement, and in a `while` or `do while` loop, control jumps to the boolean expression/condition.

```java
for (int j = 0; j < 10; j++) 
{
    if (j == 5) 
    {
        continue;
    }
    System.out.print (j + " ");
}
```

The value of `j` will be printed for each iteration, except when it is equal to `5`. The print statement will get skipped because of the `continue` and the output will be:

    0 1 2 3 4 6 7 8 9 
  
Say you want to count the number of `i`s in a the word `mississippi`. Here you could use a loop with the `continue` statement, as follows:

```java
String searchWord = "mississippi";

// max stores the length of the string
int max = searchWord.length();
int count_i = 0;

for (int i = 0; i < max; i++) 
{
    // We only want to count i's - skip other letters
    if (searchMe.charAt(i) != 'i')
        continue;

    // Increase count_i for each i encountered
    numPs++;
}
```

## Infinite Loops

If you want your loop to go on infinitely, you can use the `while`, `do while` and `for` statement.

```java
// Infinite For Loop
for ( ; ; ) 
{
    // your code here
}

// Infinite While Loop
while (true)
{
    // your code here
}

// Infinite Do While Loop
do
{
    // your code here
}
while (true);
```
