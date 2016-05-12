# Ruby Strings

**Basics:**

 * Strings are a series of characters 'strung' together between quotes.
 * Single or double quotes can be used to create strings in Ruby.
 * Ruby does some extra evaluation on strings that are created with double quotes, such as:
 	*	Escaping characters: \n, \t, \s
 	*	Using variables and expressions inside: #{variable or expression}
 * Strings with single quotes are rendered as they are without any special considerations.


**Examples:**

```
"Hello World"
# is equivilant to:
'Hello World'
```
```
"This is line 1.\nAnd this is line 2."
# returns:
This is line 1.
And this is line 2.
```
```
name = "Batman"
"Hello, my name is #{name}!"
# returns:
Hello, my name is Batman!
```
```
# Note that for single quotes, ruby doesn't take special consideration for variables or backslashes:
'This is your name:\n#{name}'
# returns:
This is your name:\n#{name}
```


## String Operations:

**Concatenation:**

*	Strings can be joined together using the '+' operator.


```
"Hello" + " World" + "!"
# returns:
Hello World!
```

**Multiplication:**

*	Strings can be multiplied by an integer value using the '*' operator.


```
"Hello" * 3
# returns:
HelloHelloHello
```



## String Methods:

### length:

*	The .length property returns the number of characters in a string including white-space.

```
"Hello".length
# returns: 5
```
```
"Hello World!".length
# returns: 12
```

### count:

*	The .count method counts how many times a specific character(s) is found in a string.
*	This method is case-sensitive.

```
"HELLO".count('L')  
# returns: 2
```
```
"HELLO WORLD!".count('LO')  
# returns: 1
```

### insert:

*	The .insert method inserts a string into another string before a given index.

```
"Hello".insert(3, "hi5")
# returns:
Helhi5lo
# "hi5" is inserted into the string right before the second 'l' which is at index 3
```

### upcase:

*	The .upcase method transforms all letters in a string to uppercase.

```
"Hello".upcase
# returns:
HELLO
```

### downcase:

*	The .downcase method transforms all letters in a string to lowercase.

```
"Hello".downcase
# returns:
hello
```

### capitilize:

*	The .capitalize method make the first letter in a string uppercase and the rest of the string lowercase.

```
"HELLO".capitalize
# returns:
Hello
```
```
"HELLO, HOW ARE YOU?".capitalize
# returns:
Hello, how are you?
```
*Note that the first letter is only capitilized if it is at the beginning of the string:*
```
"-HELLO".capitalize
"1HELLO".capitalize
# returns:
-hello
1hello
```

### reverse:

*	The .reverse method reverses the order of the characters in a string.

```
"Hello World!".reverse
# returns:
"!dlroW olleH"
```

### split:

*	The .split takes a strings and 'splits' it into an array.
*	The default method splits the string based on whitespace.

```
"Hello, how are you?".split
# returns:
["Hello,", "how", "are", "you?"]
```

### chop:

*	The .chop method removes the last character of the string.

```
"Name".chop
# returns:
Nam
```

### strip:

*	The .strip method removes the leading and trailing whitespace on strings.

```
"  Hello  ".strip
# returns:
Hello
```



## References:


[The official Ruby documentation for strings](http://ruby-doc.org/core-2.2.0/String.html).
