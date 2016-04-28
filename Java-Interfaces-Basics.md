# Java Interfaces

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

:rocket: [REPL It!](https://repl.it/CJZa/0)

So interface basically binds you to a contract to follow, where you must _implement_ all the methods. If you don't, the compiler will complain! Know more about the [awesome power of Interfaces here](Java-Interfaces).

[Previous](Java-Basics)
