# Math.sqrt() Function in Java
**Description:** `Math.sqrt()` method returns the square root value of the primitive data type. If a number is less than zero, it will return `NaN`.

## Signature:
```java
double sqrt(double d)
```

## Parameters:
    Contains primitive data type.
## Return Value:
    Returns the square root of argument.
    
Example:
```java
public class Math {

 public static void main(String[] args) {

  double a = Math.sqrt(9); //calculates square root of 9
  double b = Math.sqrt(2456.7); //calculates square root of 2456.7
  double c = Math.sqrt(-4568); //calculates square root of -4568

  System.out.println("Math Square root value :" + a);
  System.out.println("Math Square root value :" + b);
  System.out.println("Math Square root value :" + c);

 }

}
```
Output:
```
Math Square root value: 3.0
Math Square root value: 49.565108695532984
Math Square root value: NaN
```

:rocket: [REPL It!](https://repl.it/CLjD/0)

Source: [Math.sqrt()](https://docs.oracle.com/javase/8/docs/api/java/lang/Math.html#sqrt-double-)
