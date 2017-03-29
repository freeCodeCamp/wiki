# if else and else if in Java
-  **if:** if the if condition is true , if statement is evaluated 
- **else:** if the if condition is false, else statement is evaluated. 
-  **else if:**  else if  is always used with if condition. If  **if condition** evaluated to false, the **else if statement** is executed.

## Syntax
if(condition)

statement1;

 else
 
  statement2;
   
*Condition:* A condition is a Boolean expression which evaluates to true or false.

*statement1:* When **if condition** evaluates true, the statement 1 is executed.

*statement2:* If **if condition** evaluates to false, statement 2 is executed.

---

#### Example Using if else
```
int a=10;
if(a>12) //This condition  is false.
System.out.println("10 is not greater than 12"); //skips this statement
else
System.out.println("exit"); //This statement  is executed.
```
```
Output:
exit
```

---

### Using else if
#### Syntax
if(condition)

 statement1; 
 
 else if(condition)
 
 statement2;
    
 else
 
   statement3;
 
 ---

#### Example Using else if:
```
public class Example{

   public static void main(String args[]){
    int a = 15;

      if( a>55 ){// This condition  is false.
         System.out.print("Value of a is less than 55."); //skips this statement
      }else if( a==15){// This condition  is true
         System.out.println("Value of a is 15.");//This statement is executed. 
      }else{
         System.out.print("Exit");
      }
   }
}
```
```
Output:
Value of a is 15.
```

source:source:[if else](http://www.tutorialspoint.com/java/if_else_statement_in_java.htm)
