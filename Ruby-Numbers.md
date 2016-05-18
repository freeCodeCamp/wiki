# Ruby Numbers

### Basics:

- Ruby has two categories of numbers - integers and floating-point (also called floats).
- Integers are whole numbers that can be positive or negative but cannot be fractions.
- Depending on their size, integers can have the class `Fixnum` or `Bignum`.
- Floats are numbers with a decimal place.

## Examples:

```ruby
x = 5.5
x.class
# returns
Float
```

```ruby
x = 5
x.class
# returns
Fixnum
```

```ruby
x = 11122233344455566677
x.class
# returns
Bignum # basically, Bignum is a very large number
# [read this article for more info](http://ruby-doc.org/core-2.0.0/Bignum.html)
```

## Table of Contents

1. [Ruby Numbers Operatorations](Ruby-Numbers-Operations)
2. [Ruby Numbers Methods](Ruby-Numbers-Methods)

## References:

- [The official Ruby documentation for integers](http://ruby-doc.org/core-2.2.0/Integer.html).
- [The official Ruby documentation for floats](http://ruby-doc.org/core-2.2.0/Float.html).
