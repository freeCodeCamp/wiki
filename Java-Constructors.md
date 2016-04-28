# Java Constructors

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

[Previous](Java-Basics)
