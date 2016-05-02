# The C# Programming Language

1. ### Basics
  * Setup
  * Your first C# program
  * Types and variables
  * Flow control statements
  * Operators
  * Strings
  * Classes, Objects, Interface and Main methods
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

### Setup
[LinqPad][linqpad] is an ultimate .NET scratchpad to quickly test your C# code snippets.The standard edition is free and a perfect tool for beginners to quickly execute language statements, expressions and programs.

Alternatively, you could also download [Visual Studio Community 2015]  [visualstudio]  which is an extensible [IDE][ide] used by most professionals for creating enterprise applications.

### Your First C# Program

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
Every C# console application must have a [Main method][main] which is the entry point of the program.

Edit [HelloWorld][HelloWorld] in .NET Fiddle, a tool inspired by [JSFiddle](http://jsfiddle.net) where you can alter the code snippets and check the output for yourself.
Note, this is just to share and test the code snippets, not to be used for developing applications.

If you are using visual Studio, follow this [tutorial](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx) to create console application and understand your first C# program.

### Types and variables
C# is a strongly typed language. Every variable has a type.
Every expression or statement evaluates to a value.
There are two kinds of types in C#
  * Value types
  * Reference types.

*_Value Types_* : Variables that are value types directly contain values. Assigning one value type variable to another copies the contained value.

[Edit in .NET Fiddle][valuetype]

```chsarp
int a = 10;
int b = 20;
a=b;
Console.WriteLine(a); //prints 20
Console.WriteLine(b); //prints 20
```

Note that in other dynamic languages this could be different, but in C# this is always a value copy.
When value type is created, a single space most likely in [stack][stack] is created, which is a "LIFO" (last in, first out) data structure. The stack has size limits and memory operations are efficient.
Few examples of built-in data types are `int, float, double, decimal, char and string`.


Type | Example | Description
--- | --- | ---
*Integer* | `int fooInt = 7;` | **Signed 32-bit** Integer
*Long* | `long fooLong = 3000L;` | **Signed 64-bit** integer.**L is used to specify that this variable value is of type long/ulong**
*Double* | `double fooDouble = 20.99;` | Precision: **15-16 digits**
*Float* | `float fooFloat = 314.5f;` | Precision: **7 digits**.**F is used to specify that this variable value is of type float**
*Decimal* | `decimal fooDecimal = 23.3m;` | Precision: **28-29 digits**.Its more precision and smaller range makes it appropriate for **financial and monetary calculations**
*Char* | `char fooChar = 'Z';` | A  single **16-bit Unicode character**
*Boolean* | `bool fooBoolean = false;` | Boolean - **true & false**
*String* |`string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);`|**A string of Unicode characters.**

For complete list of all built-in data types see [here](https://msdn.microsoft.com/en-us/library/ms228360)


 [*_Reference types_*](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) : Variables of reference types store references to their objects, which means they store the address to the location of data on the [stack][stack], also known as pointers. Actual data is stored on the [heap][heap] memory.
 Assigning reference type to another doesn't copy the data, instead it creates the second copy of reference which points to the same location on the heap.

 In heap, objects are allocated and deallocated in random order that is why this requires the overhead of memory management and [garbage collection][garbage].

 Unless you are writing [unsafe code][unsafe] or dealing with [unmanaged code][unmanaged], you don't need to worry about the lifetime of your memory locations. .NET compiler and CLR will take care of this, but it's still good to keep this mind in order to optimize performance of your applications.

More information [here] [heapvsstack]
### Flow control statements

* [If else][ifelse] statement :
  [Edit in .NET Fiddle](https://dotnetfiddle.net/IFVB33)

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

            /** Ternary operators
             A simple if/else can also be written as follows
             <condition> ? <true> : <false> **/
            int myNumber = 10;
            string isTrue = myNumber == 10 ? "Yes" : "No";

```
* [Switch][switch] statement :
[Edit in .NET Fiddle](https://dotnetfiddle.net/lPZftO)

```csharp
using System;

public class Program
{
	public static void Main()
	{
		int myNumber = 0;
		switch (myNumber)
		{
			// A switch section can have more than one case label.
			case 0:
			case 1:
			{
				Console.WriteLine("Case 0 or 1");
				break;
			}

			// Most switch sections contain a jump statement, such as a break, goto, or return.;
			case 2:
				Console.WriteLine("Case 2");
				break;
			// 7 - 4 in the following line evaluates to 3.
			case 7 - 4:
				Console.WriteLine("Case 3");
				break;
			// If the value of myNumber is not 0, 1, 2, or 3 the
			//default case is executed.*
			default:
				Console.WriteLine("Default case. This is also optional");
				break; // could also throw new Exception() instead
		}
	}
}
```
* [For][for] & [Foreach][foreach] :
[Edit in .NET Fiddle](https://dotnetfiddle.net/edxtvq)

```csharp

for (int i = 0; i < 10; i++)
{
  Console.WriteLine(i); //prints  0-9
}

Console.WriteLine(Environment.NewLine);
for (int i = 0; i <= 10; i++)
{
  Console.WriteLine(i); //prints  0-10
}

Console.WriteLine(Environment.NewLine);
for (int i = 10 - 1; i >= 0; i--) //decrement loop
{
  Console.WriteLine(i); //prints 9-0
}

Console.WriteLine(Environment.NewLine);
//for (; ; )
{
// All of the expressions are optional. This statement
//creates an infinite loop.*
//		
}
```
* [While][while] & [do-while][dowhile] :
[Edit in .NET Fiddle](https://dotnetfiddle.net/O5hOF1)

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
[heapvsstack]:http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91
[unsafe]:https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx
[unmanaged]:https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100).aspx
[garbage]:https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110).aspx
[HelloWorld]:https://dotnetfiddle.net/kY7QRm
[valuetype]:https://dotnetfiddle.net/JCkTxb
[stack]:http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2
[heap]:http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3
[main]:https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx
