# The Java While Loop

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

```
0 1 2 3 4 5 6 7 8 9
iter_While Value: 10
```

:rocket: [REPL It!](https://repl.it/CJYj/0)

[Previous](Java-Loops)
