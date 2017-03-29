#Java Control Statements :

In any programming language, the control over normal flow of program is necessary to make dynamic decisions at runtime and achieving desired results. *Control statements* manage the flow of execution of the program and decide the branching of logical flow. Java's program control statements can be put into following categories: `selection` , `iteration` and `jump statement` . *Selection statement* allows a program to choose different path of executions depending on an expression. *Iteration* allows a program to repeat one or more statements. *Jump statement* is used to transfer control to another part of the program. As *iteration* and *jump statements* are already covered in `Java-loops`, here we would discuss *Selection statements*.

##Java's selection statement :

*Selection statements* allow a program to choose different executions based on the outcome of an *expression* or state of a variable
.
Java has two selection statements : `if...else` and `switch`.

###if..else

`if...else` is a conditional branch statement that helps us to choose between two available choices. The general syntax of `if...else` is shown below :

```
if(condition)
statement1;
else
statement2;
```

In the above code snippet, the `condition` is first evaluated. If it turns out to be `true` , then the statements that are inside the `if` condition are executed(`statement1` in this case). If the `condition` turns out to be `false`, then the statements inside `else` are executed(`statement2`, in this case). 

**Example :**

Here is an example usage which states whether a number is an even number or an odd number. Even numbers are divisible by two
and hence leave a remainder of zero. The remainder on dividing the number by two can be obtained using the `modulo (%)` mathematical
operator. 

```java
public class Main {
   public static void main(String args[])
      {
   int num=5;
   
if ( num%2==0){ 
    System.out.println("Number is even");
}
else{
    System.out.println("Number is odd");
       }
   }
}
```

Output :  Number is odd

:rocket: [REPL It!](https://repl.it/CLR2/2)

####Nested if...else

Nested `if...else` is very common in programming. Here one if statement is a target of another or subsequent `if...else statements`.

**Example :**

```java
public class Main {
   public static void main(String args[])
      {
   
   int num=5;

if (num == 1) {
    System.out.println("One");     //first if statement
} else {
    if (num == 2) {
        System.out.println("Two");
    } else {
        if (num == 3) {
            System.out.println("Three");      //second if statement
        } else {
            System.out.println("Number is greater than three");
        }
      }
    }  
  }
}
```

Output :  Number is greater than three

:rocket: [REPL It!](https://repl.it/CLR2/3)

####The if..else..if ladder

The above code is highly unreadable. To make it better we can use chained `else..if statements` with the first `if statement`. 

```java
public class Main {
   public static void main(String args[])
       {
   int num=3;

if (num == 1) {
    System.out.println("One");
} else if (num == 2) {
    System.out.println("Two");
} else if (num == 3) {
    System.out.println("Three");
} else {
    System.out.println("Numbers greater than three cannot be processed by this code");
}
}
}
```

:rocket: [REPL It!](https://repl.it/CLR2/4)

Output :  Three

:rocket: [REPL It!](https://repl.it/CLR2/4)

The `if` statement is executed from `top-down`. As soon as one of the `if condition` is true the statements associated with it are executed, and the rest of the ladder is bypassed. If none of the conditions are true then the final `else statement` is executed as a *default condition*.

###switch

The `switch` staement is `Java`'s multiway branching statement. It provides an easy way to dispatch execution to a desired path based on the value of an expression. 

**Example :**

```java
public class Main {

   public static void main(String args[])
      {
    char grade = args[0].charAt(0);
    char grade = 'C';

      switch(grade)
      {
         case 'A' :
            System.out.println("Excellent!"); 
            break;
         case 'B' :
            System.out.println("Good");
            break;
         case 'D' :
            System.out.println("Passed");
         case 'F' :
            System.out.println("Failed");
            break;
         default :
            System.out.println("Invalid grade");
      }
      System.out.println("Your grade is " + grade);
   }
}
```

Output :

```
$ java Main 
Good
Your grade is B
```

:rocket: [REPL It!](https://repl.it/CLR2/6)

Now Compile and run above program using various [command line arguments](https://docs.oracle.com/javase/tutorial/essential/environment/cmdLineArgs.html). Click on the links for using *command line arguments* in [Eclipse](http://www.cs.colostate.edu/helpdocs/eclipseCommLineArgs.html) and [Netbeans](http://netbeanside61.blogspot.in/2009/02/using-command-line-arguments-in.html).


```
$ java Main "A"
Well done
Your grade is A!
```

In `switch statement` the value of the expression is compared with each of the cases. If a match is found , the code sequence
following the case is executed. If none of the expressions match then the `default statement` is executed. The `default statement` is
optional and if no default is provided, then no further action is taken. The `break statement` is used to terminate a statement
sequenc. The `break statement` is optional. However, if you omit the `break` execution will continue to the next statement.
Note that an expression used in `switch statement` must return an `int`, a `String`, or an `enumerated` value. `switch(i)` throws a `NullPointerException` if i is `null` and the entire switch statement completes abruptly for that reason.

**Example :**

```java
public class Main {
   public static void main(String args[])
       {
    char grade = 'A';

      switch(grade)
      {
         case 'A' :
            System.out.println("Excellent!"); 
         case 'B' :
            System.out.println("Good");
         case 'D' :
            System.out.println("Passed");
         case 'F' :
            System.out.println("Failed");
            break;
         default :
            System.out.println("Invalid grade");
      }
      System.out.println("Your grade is " + grade);
   }
}
```

:rocket: [REPL It!](https://repl.it/CLR2/7)

Output :

```
$ java Main
Excellent!
Good
Passed
Failed
Your grade is A
```


###Summary:

The `switch` differs from the `if` in that `switch` can only test for equality, whereas `if` can evaluate any type of Boolean expression. Also, note that two case constants can't have identical values in same `switch`.

Another difference is that the `switch statement` is considered to be less flexible than the `else...if` ladder, because it allows only testing of a single expression against a list of discrete values. Whereas,  `If statements` can compare between two variables.

A `switch statement` is usually more efficient than a set of `nested ifs` in terms of execution time. In case of `if...else` the `Java-compiler` would have a check, a jump to the next clause, a check, a jump to the next clause and so on. With switch case the `Java-Compiler` loads the value to compare and iterates through the value table to find a match, which is faster in most cases.
