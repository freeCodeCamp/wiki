# Ruby Numbers Methods

In Ruby there are a variety of build in methods you can perform on numbers.

## Even:

- Use `.even?` to check whether or not an integer is even.

```ruby
15.even?
4.even?
# returns:
false
true
```

## Odd:

- Use `.odd?` to check whether or not an integer is odd.

```ruby
15.odd?
4.odd?
# returns:
true
false
```

## Ceil:

- The `.ceil` method rounds up to the nearest integers.

```ruby
8.3.ceil
6.7.ceil
# returns:
9
7
```

## Floor:

- The `.floor` method rounds down to the nearest integers.

```ruby
8.3.floor
6.7.floor
# returns:
8
6
```

## Next:

- Use `.next` to return the next consecutive integer.

```ruby
15.next
2.next
-4.next
# returns:
16
3
-3
```

## To String:

- The `.to_s` method changes an integer into a string.

```ruby
15.to_s
# returns:
"15"
```

## Greatest Common Denominator:

- The `.gcd` method returns the greatest common denominator of two numbers.

```ruby
15.gcd(5)
9.gcd(4)
# returns:
5
1
```

| Home | Next |
| :---          |          ---: |
| [Ruby Numbers Basics](Ruby-Numbers) | [Ruby Numbers Operations](Ruby-Numbers-Operations)   |
