#The C# Programming Language

1. ### Basics
  * Setup
  * Your first C# program
  * Types and variables
  * Flow control statements
  * Strings
  * Classes, Objects, Interface and methods
  * Fields and properties
  * Scope and accessibility modifiers
  * Handling exceptions

2. ### Intermediate
  * Generics
  * Events, delegates and lambda expressions
  * Collection framework
  * LINQ

3. ### Advanced
  * Asynchronous Programming (Async and Await)  
  * Task Parallel Library

5. ### What's New in C# 6
  * Null-Conditional operator
  * Auto-Property initializers
  * Nameof expressions
  * Expression bodied functions and properties
  * Other features

4. ### Object-Oriented principles (OOP)
   * Encapsulation
   * Abstraction
   * Inheritance
   * Polymorphism

6. ### Solid principles
  * Single responsibility principle
  * Open closed principle
  * Liskov substitution principle
  * Interface segregation principle
  * Dependency inversion principle

7. ### C# Best practices, Design patterns & Test driven development (TDD)

###Setup
[LinqPad][linqpad] is an ultimate .NET scratchpad to quickly test your C# code snippets. Standard edition is free and perfect tool for beginners to quickly execute language statements, expressions and programs.

Alternatively, you could also download [Visual Studio Community 2015]  [visualstudio]  which is an extensible [IDE][ide] used by most professionals for creating enterprise applications.

###Your First C# Program

```csharp
//this is the single line comment

/** This is multiline comment,
compiler ignores any code inside comment blocks.
**/

//This is the namespace, part of the standard .NET Framework Class Library
using System;
// namespace defines the scope of related objects into packages
namespace Learning.CSharp
{  
  // name of the class, should be same as of .cs file
  public class Program
  {
    //entry point method for console applications
   public static void Main()
    {
      //print lines on console
      Console.WriteLine("Hello, World!");
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console.
      Console.ReadLine();
    }
  }
}
```
If you are using visual Studio, follow [this](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx) to create console application and understand your first C# program.

###Types and variables
C# is a strongly typed language. Every variable has a type.
Every expression or statement evaluates to a value.
There are two kinds of types in C#
  * Value types
  * Reference types.

*_Value Types_* : Variables that are value types directly contain values. Assigning one value type variable to another copies the contained value.

```chsarp
int a = 10;
int b = 20;
a=b;
Console.WriteLine(a); //prints 20
Console.WriteLine(b); //prints 20
```
All these data types are also wrapped in classes in the `System namespace`. For instance
`int` is the short name for `System.Int32` and `double` is the short form of `System.Double`.


Few examples of built-in data types are `int, float, double, decimal, char and string`.

Type | Example | Description
--- | --- | ---
*Integer* | `int fooInt = 7;` | **Signed 32-bit** Interger
*Long* | `long fooLong = 3000L;` | **Signed 64-bit** integer.**L is used to specify that this variable value is of type long/ulong**
*Double* | `double fooDouble = 20.99;` | Precision: **15-16 digits**
*Float* | `float fooFloat = 314.5f;` | Precision: **7 digits**.**F is used to specify that this variable value is of type float**
*Decimal* | `decimal fooDecimal = 23.3m;` | Precision: **28-29 digits**.Its more precision and smaller range makes it appropriate for **financial and monetary calculations**
*Char* | `char fooChar = 'Z';` | A  single **16-bit Unicode character**
*Boolean* | `bool fooBoolean = false;` | Boolean - **true & false**
*String* |`string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);`|**A string of Unicode characters.**

For complete list of all built-in data types see [here](https://msdn.microsoft.com/en-us/library/ms228360)


 [*_Reference types_*](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) : Variables of reference types store references to their objects, which means they store the address to the location of data on the [stack](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2), also known as pointers. Actual data is stored on the [heap](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3) memory.
 Assigning reference type to another doesn't copy the data, instead it creates the second copy of reference which points to the same location on the heap.

###Flow control statements

* [If else][ifelse] statement
```csharp
            int myScore = 700;
            if (myScore == 700)
            {
                Console.WriteLine("I get printed on the console");
            }
            else if (myScore > 10)
            {
                Console.WriteLine("I don't");
            }
            else
            {
                Console.WriteLine("I also don't");
            }
```

```csharp
            /** Ternary operators
             A simple if/else can also be written as follows
             <condition> ? <true> : <false> **/
            int myNumber = 10;
            string isTrue = myNumber == 10 ? "Yes" : "No";

```
* [Switch][switch] statement

```csharp
int myNumber = 3;
        switch (myNumber)
        {
            // A switch section can have more than one case label.
            case 0:
            case 1:
                Console.WriteLine("Case 0 or 1");
              /** Most switch sections contain a jump statement, such as a break, goto, or return. **/
                break;
            case 2:
                Console.WriteLine("Case 2");
                break;
            // 7 - 4 in the following line evaluates to 3.
            case 7 - 4:
                Console.WriteLine("Case 3");
                break;
            /** If the value of myNumber is not 0, 1, 2, or 3 the
            default case is executed.**/
            default:
                Console.WriteLine("Default case. This is also optional");
              break;// could also throw new Exception() instead
        }
```
* [For][for] & [Foreach][foreach]

```csharp

    for (int i = 0; i < 10; i++)
  	{
  	    Console.WriteLine(i); //prints  0-9
  	}
    for (int i = 0; i <= 10; i++)
  	{
  	    Console.WriteLine(i); //prints  0-10
  	}
    for (int i = 10 - 1; i >= 0; i--) //decrement loop
  	{
  	    Console.WriteLine(i);//prints 9-0
  	}
    for (; ; )
      {
           /** All of the expressions are optional. This statement
           creates an infinite loop.**/
      }

    int[] array = new int[] { 0, 1, 1, 2, 3, 5, 8, 13 }; //declares array of integer values
      foreach (int item in array)
      {
          Console.WriteLine(item); //prints all elements of array
      }

```
* [While][while] & [do-while][dowhile]

```csharp

// Continue the while-loop until index is equal to 10.
	int i = 0;
	while (i < 10)
	{
	    Console.Write("While statement ");
	    Console.WriteLine(i);// Write the index to the screen.
	    i++;// Increment the variable.
	}


  int number = 0;
	// do work first, until condition is satisfied i.e Terminates when number equals 4.
	do
	{
	    Console.WriteLine(number);//prints the value from 0-4
	    number++; // Add one to number.
	} while (number <= 4);
```
[dowhile]:https://msdn.microsoft.com/en-us/library/370s1zax.aspx
[while]:https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx
[foreach]:https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx
[for]:https://msdn.microsoft.com/en-us/library/ch45axte.aspx
[ifelse]:https://msdn.microsoft.com/en-us/library/5011f09h.aspx
[switch]:https://msdn.microsoft.com/en-GB/library/06tc147t.aspx
[linqpad]:http://www.linqpad.net/
[ide]:https://en.wikipedia.org/wiki/Integrated_development_environment
[visualstudio]:https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx
