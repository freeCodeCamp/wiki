# Java Basics

## Core Concepts

### The Java Virtual Machine (JVM) 

Java belongs to a family of languages called **Compiled Languages** (https://en.wikipedia.org/wiki/Compiled_language). Any code written in such a language needs to be converted (compiled) to an intermediate form that can then be understood by the host platform (the OS/platform in which the code runs). 

For Java, this intermediate form is called **Bytecode** which is then interpreted by a runtime called a Java Virtual Machine (JVM). Think of JVM (https://docs.oracle.com/javase/specs/jvms/se7/html/) as a piece of software that does the hard work of running your Java code. It takes care of memory allocation, thread management, garbage collection and so much more. Apart from Java, it also supports (read: able to run) code written in languages such as Groovy, Scala etc.

In Java, code is written and saved as `.java` files. The compiler (javac) operates on the java files and generates the equivalent Bytecode (`.class`) files. The `java` command would now be able to execute the Bytecode stored in the `.class` files. More on this later. 

The following sections describe some of the basic building blocks of coding in Java.

### Variables

Variables store values. 

In [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java), variables are [_strongly typed_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22), which means you have to define the type for each variable whenever you declare it. Otherwise, the compiler will throw error at [compile time](https://en.wikipedia.org/wiki/Compile_time). Therefore, each variable has an associate data type of either :

* Primitive Type : `int`, `short`, `char`, `long`, `boolean`, `byte`, `float`, `double`
* Wrapper Type : `Integer`, `Short`, `Char`, `Long`, `Boolean`, `Byte`, `Float`, `Double`
* Object Type: `String`, `StringBuilder`, `Calendar`, `ArrayList` etc.

We made a distinction between **Wrapper Type** and general **Object Type** for a reason - wrapper types are closely linked with their primitive counterparts via [autoboxing and unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html); but more on that later.

Typically you can declare variables using the following syntax :

```java
//Primitive Data Type

int i = 10;

// Object Data Type
//initiates an Float object with value 1.0
// variable myFloat now points to the object
Float myFloat = new Float(1.0);
```

But there are more to these variables, [read about them here](#TODO).

### Classes & Objects

Classes are groups of variables and operations on them. A class can have variables, methods (or functions) and constructors (or methods which are used to initiate, more on that later!).

Think of a `Class` as a blueprint for creating something concrete. A `Class` tells you the 'what' and 'how' an `object` of that Class will look like once `instantiated`. In essence, it defines `properties` (say color, engine capacity) and `behavior` (stop, speed up, change gears, honk etc.) for a Car in this case. 

Objects are _instances_ of a class. All objects are instances of a certain class. Imagine a class being a "template", which every Object copies to. When you create an Object, basically it creates a new object on the blueprint of a class. Now lets look at this from a little piece of code :

```java
// Car class
public class Car {
  // car name
  private String name;
	// car mannufacturer name
	private String manufacturerName;
  // constructor
	public Car(String name, String man) {
		this.name = name;
		this.manufacturerName = man;
	}
  // getter method
	public String getName() {
		return name;
	}
  // getter method
	public String getManufacturerName() {
		return manufacturerName;
	}

  //setter method
  public void setName(String name){
     this.name = name;
  }	
}

Car modelS = new Car("Model S","Tesla");

System.out.println("Full Car Name = " + modelS.getManufacturerName() + " " + modelS.getName());
// prints Tesla Model S
```

So, `Car` is a class, which has the fields or properties name and manufacturerName. `modelS` is an object of `Car` class. So `modelS` also has the same properties and methods.

### Access Modifiers

Ok, so if `modelS` has all the same properties, I should be able to access `name` or `manufacturerName` right?

```java
System.out.println(modelS.name);
```
Results in :

```asciidoc
Main.java:13: error: name has private access in Car
		System.out.println(modelS.name);
		                         ^
1 error
```

Why? Notice we had mentioned `private` before the variable `name` in class `Car`. This marks the variable as `private` to the class which means that the variable cannot be modified or accessed from another class, even if an object of the class is instantiated. So, unless you provide a public `setter` method or any other `public` method to access the variable, there is no way it's visible to the outside world.

There are other kinds of access modifiers such as public, protected, default etc. [Read more about them here](#TODO).

### Constructors

What's the point then? I should be able to store data in it right?

That's when we use either **getter** (e.g., getName()) / **setter** (e.g., setName()) methods or in this case constructors to initialize a class. Basically every Java Class has a constructor, which is the method which is called first when any object of the class is initialized. Think of it as a bit of starter code.

When you write a class without any constructor, then Java assumes it has a default constructor :

```java

public class Car {
	private String name;
}

Car modelS = new Car();
```

This initializing with no parameters is a way of calling the default constructor. You can also have a default constructor written yourself this way :

```java
public class Car {
	private String name;

	public Car() {
		name = "Tesla";
	}
}
```

Then, when calling `new Car()`, the variable `name` will get auto-initialized to `"Tesla"`.

Like what `Constructor`s can do? [Dive into it more here](#TODO).

### Methods

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

```java
public class Car {
	private String name;

	public void changeName() {
		name = "Tesla";
	}
}
```
As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability. [Read more about them here](#TODO).

## Inheritance

So great you have successfully created a Car class. But, wait, aren't Tesla cars supposed to be electric variants? I want an Electric car class, but it also should have the properties of the original `Car` class.

Solution : **Inheritance**. Java provides a neat way to "inherit" parent properties :

```java
public class Car {
	
	private String name;
	private String manufacturerName;

	public Car(String name, String man) {
		this.name = name;
		this.manufacturerName = man;
	}
    // Getter method
	public String getName() {
		return name;
	}
    // Getter method
	public String getManufacturerName() {
		return manufacturerName;
	}
}

public class ElectricCar extends Car {
	
	public ElectricCar(String name, String man) {
		super(name, man);
	}

	public void charge() {
	 System.out.println("Charging ...");
	}
}

ElectricCar modelS = new ElectricCar("Model S","Tesla");
// prints Tesla
System.out.println(modelS.getName());
// prints Charging ...
modelS.charge();
```

See here that the class `ElecticCar` inherits or `extends` the public methods from `Car` class, as well as has its own methods and properties. Cool way to pass on information!

Also notice the usage of [super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html) keyword here. Since our `Car` class had a constructor, so we have to initialize that constructor from the child class as well. We do that using the `super` keyword. Read more about [Inheritance here](#TODO).

### Interfaces

But wait, my manager has given me a set of strict specifications every class to create, but has told me you can implement it in whichever way you want. Incidentally, Java has a nifty feature of Interfaces which does exactly that!

```java
interface Car {
	public String getName();
	public String getManufacturerName();
}

class ElectricCar implements Car {
	
	private String name;
	private String manufacturerName;

	public ElectricCar(String name, String man) {
	  this.name = name;
	  this.manufacturerName = man;
    }

	public void charge() {
	 System.out.println("Charging ...");
	}

	// Getter method
	public String getName() {
		return name;
	}
  	// Getter method
	public String getManufacturerName() {
		return manufacturerName;
	}
}
```

So interface basically binds you to a contract to follow, where you must _implement_ all the methods. If you don't, the compiler will complain! Know more about the [awesome power of Inheritance here](#TODO).

## Basic Operations

Java supports the following operations on variables:

* Arithmetic : `Addition(+)`, `Subtraction(-)`, `Multiplication(*)`, `Division(/)`, `Modulus(%)`,`Increment(++)`, `Decrement(--)`.
* String concatenation:  `+` can be used for String concatenation but subtraction `-` on a String is not a valid operation.
* Relational: `Equal to(==)`, `Not Equal to (!=)`, `Greater than(>)`, `Less than(<)`, `Greater than or equal to(>=)`, `Less than or equal to(<=)`, 
* Bitwise: `Bitwise And(&)`, `Bitwise Or(|)`, `Bitwise XOR(^)`, `Bitwise Compliment(~)`, `Left shift(<<)`, `Right Shift (>>)`, `Zero fill right shift (>>>)`
* Logical: `Logical And (&&)`, `Logical Or(||)`, `Logical Not (!)`
* Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, `|=`
* Others: `Conditional/Ternary(?:)`, `instanceof`

While most of the operations are self explanatory, the Conditional (Ternary) Operator works as follows:

`expression that results in boolean output ? return this value if true : return this value if false`

For e.g: 
```java
int x = 10;
int y = (x == 10) ? 5 : 9; <-- y will equal 5 since the expression x == 10 evaluates to true
```


###### The `instanceof` operator
The `instanceof` operator allows you to check the validity of a `IS A` relationship. If at any point of time, we are not sure about this and we want to validate this at runtime, we can do the following:

```java
 
 //assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true
 if( vehicle instanceof Car ) {
   //do something if vehicle is a Car
 }
```

## Control Flow

Control flow statements are exactly what the term means. They are statements that alter execution flow based on decisions, loops and branching so that the program can conditionally execute blocks of code.

Primarily, Java has the following constructs for flow control:

* `if`

```java
        if( <expression that results in a boolean>) {
         //code enters this block if the above expression is 'true'
        }
```

* `if...else`
   
```java
        if( <expression that results in a boolean> ){
          //execute this block if the expression is 'true'
        
        } else{
          //execute this block if the expression is 'false'
        }
```

* `switch`

Switch is an alternative for the `if...else` construct when there are multiple values and cases to check against. 

```java
        switch( <integer / String / Enum > ){
            case <int/String/Enum> : <statements>
            break;
            case <int/String/Enum> : <statements>
            default: <statements>
        }
```
 
 Note: The program flow `falls through` the next `case` if the `break` statement is missing. For e.g. Let's say you say the standard 'Hello' to everyone at office, but you are extra nice to the girl who sits next to you and sound grumpy to your boss. The way to represent would be something like:
    
```java
    switch(person){
           case 'boss' : soundGrumpy();
           break;
           case 'neighbour' : soundExtraNice();
           case 'colleague': soundNormal();
           break;
           default :
           soundNormal();
       }
```
    Note: The `default` case runs when none of the `case` matches. Remember that when a case has no `break` statement, it `falls through` to the next case and will continue to the subsequent `cases` till a `break` is encountered.
    
* `nested statements`

Any of the previous control flows can be nested. Which means you can have nested `if`,`if..else` and `switch..case` statements. i.e., you can have any combination of these statements within the other and there is no limitation to the depth of `nesting`.

For example, let's consider the following scenario:

If you have less than 25 bucks, you get yourself a cup of coffee. If you have more than 25 bucks but less than 60 bucks, you get yourself a decent meal. If you have more than 60 bucks but less than a 100, you get yourself a decent meal along with a glass of wine. However, when you have more than a 100 bucks, depending on who you are with, you either go for a candle lit dinner (with your wife) or you go to a sports bar (with your friends). 

One of the ways to represent this will be:

```java

if(cash<25){
	getCoffee();
}else if(cash<60){
	getDecentMeal();
}else if(cash<100){
	getDecentMeal();
	getGlassOfWine();
}else{
	
  switch(company){
    case "wife" : candleLitDinner();
    break;
    case "friends" : meetFriendsAtSportsBar();
    break;
  }
}

```

    
    
## Loop constructs


Remember that one friend who goes on and on about something? Well, that's a `loop` right there for you. In `Java`, a developer can represent the action of  `doing something repeatedly` using the following constructs:

###### `while` Loop


The `while` loop executes a group of statements / single statement till a condition evaluates to `true`. For instance:

```java
 while(some_condition_is_true){
  //do something
 }
```
`Note`: For the `while` loop to start executing, you'd require the condition to be true. However, to exit the loop you must do something as given below (otherwise the loop will execute forever. Practically, it will run till the JVM runs out of memory).

```java

while(i<10){
	System.out.println("i :"+ i);
	i++; //<- This ensures that value of i in the while condition will become more than 10 at some point thereby breaking the condition and exiting the loop.
}

```

Can you now guess the output of the following snippet?

```java
 int i = 0;
 while( i < 10 ){
  System.out.println("Value of i is : " + i);
  i++;
 }
```

###### `for` Loop


There are 2 of these:

1. Normal `for` loop

```java
 for( initialize variable; condition; modify variable ){
  //perform action
 }
```

For e.g.

```java
 for(int i=0; i<10; i++){
  System.out.println("The value of is : " + i);
 }
```

2. Enhanced `for` loop

Well, this came into existence in Java 5. It helps when you are required to iterate over a list of items and perform some action like so:

```java
 //assuming nameList is a List of names that are actually Strings
 for( String name : nameList ){
  SYstem.out.println(name);
 }
```


###### `do..while` Loop


The `do..while` loop is a special case of the `while` loop wherein the group of statements is guranteed to run atleast once before checking for a given condition. Confused? Ok, the follwing example should clear things up.

Can you guess the output of the following code snippet? 

```java

int i=10;
do{
	System.out.println("The value of i is " + i);
	i--;
}while( i >= 10 );

```

`Remember` : The condition of a `do-while` loop is checked After the code body is executed once.

Now that you have some idea of basic syntax, let's delve into some of the most relevant and commonly used data types which will help you to develop programs in Java.

## Strings

Strings, as you might be already aware, are a sequence of characters. In Java, a `String` is an `Object`. 

```java

String course = "FCC";
System.out.println( course instanceof Object); //<- This prints 'true'

```

You can create a String in the following ways:

1. `String str = "I am a String";` //This is a String literal
2. `String str = new String("I am a String")`; //This is a String Object

You might be thinking: What's the difference between the two?

Well, using the `new` keyword gurantees that a new `String` object will be created and a new memory location will be allocated in the `Heap` memory (Click here to learn more)[https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html]. You see, Java takes care of memory allocation and collecting unused memory in the background - among other things. However, in this case, it's good to be aware about the difference so that you can write code that can help the JVM make appropriate optimizations. 

The following snippet will make things more clearer. The objective is to understand: How many String objects are created?

```java
 
 String str = "This is a string";
 String str2 = "This is a string";
 String str3 = new String("This is a string");
 
 System.out.println( str == str2 ); //This prints true
 System.out.println( str == str3 ); //This prints false

```

The answer is: 2 String objects are created. 

You see, the creators of the JVM are pretty smart. They figured that Strings differ mostly in terms of its `content`. When you create a String literal, the JVM internally checks, what is known as `the String pool`, to see if it can find a similar (content wise) String object. If it finds it, it returns the same reference. Otherwise, it just goes ahead and creates a new String object in the pool so that the same check can be performed in the future. 

However, whenever you use the `new` keyword, it no longer performs this check. So, there could be a 1000s of String objects with the same content and yet, it'll go ahead and create a new String - using up additional memory. This is precisely why it's a good practice to use `String literals` instead of using the `new` keyword as much as possible.




