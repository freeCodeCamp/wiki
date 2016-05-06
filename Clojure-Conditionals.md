# Clojure - Conditionals

You're not going to get anywhere in a language if all you can do is define
functions that print things and do simple arithmetic. Conditionals and logic
are a fundamental part of making code that does interesting, useful things. Try
and imagine a world without logic in programs: you wouldn't even be able to simple
things, like checking if two numbers are equal!

## Logical Operators

Clojure, like most languages, has 3 logical operators: `and`, `or` and `not`.
These functions take booleans (`true` or `false`) as arguments, and return
booleans based on what those booleans are. Like everything in a Lisp, these
operators use prefix notation, which means they might look weird to you.
```clojure
(and true false)
; => false
(and true true)
; => true
(or false false)
; => false
(or true false)
; => true
(not true)
; => false
(not false)
; => true
```
:rocket: [IDEOne it!](https://ideone.com/XfXn8T)

## If

`if` allows you to execute code based on whether a boolean is `true` or `false`.
`if` in Clojure looks quite weird, not because it uses prefix notation, but
because there is no else keyword. If the condition is true, it evaluates the first
expression. If it's false, it executes the second.
```clojure
(if (= (+ 2 2) 4)
  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4
  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4
; => Maths works!
;    nil
```
This presents a problem: what if we want to do multiple things?
```clojure
(if (= (+ 2 2) 4)
  (println "Maths works!")
  (println "Maths still works!")
  (println "UH OH"))
; => CompilerException java.lang.RuntimeException: Too many arguments to if
```
Thankfully, we have the `do` function to solve this problem. `do` evaluates
multiple expressions, one after the other.
```clojure
(if (= (+ 2 2) 4)
  (do                               ; all of this gets evaluated if 2 + 2 = 4
    (println "Maths works!")
    (println "Maths still works!"))
  (println "UH OH"))
; => Maths works!
;    Maths still works!
;    nil
```
**Note:** since `if` is, itself, an expression, there's no need for a ternary
operator like in many C-like languages.
```javascript
var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH";
console.log(doesMathsWork);
// => Maths works!
```
Now that you look at it, doesn't that look so weird? This is much easier to
read and understand (ignoring the lack of the word `else`):
```clojure
(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH"))
(println does-maths-work)
; => Maths works!
;    nil
```
:rocket: [IDEOne it!](https://ideone.com/5XhcAa)

## Alternatives to If

Clojure also has some macros that behave similarly to `if`, and can sometimes
be more concise.

`if-not` is perhaps the most simple example - it's `if` inverted. These two
pieces of code are exactly the same:
```clojure
(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!"))
(def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!"))
```
The first expression gets evaluated if it's false, and the second gets evaluated
if it's true. Notice that using `if-not` avoids nesting our condition inside
`not`, which can help make our code easier to understand.

`when` is another useful macro. These two pieces of code are also the same:
```clojure
(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!")))
(when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!"))
```
:rocket: [IDEOne it!](https://ideone.com/tUVAw3)

**Note:** There is no `when/else`. `when` *only* executes if the condition is true.

Clojure has plenty of useful macros like these for all kinds of tasks. Try having
a look at [the Clojure documentation](https://clojuredocs.org/) and see if you
can find any more!

| [:point_left: Previous](Clojure-Basics) | [:book: Home :book:](Clojure) | [Next :point_right:](Clojure-Let-Bindings)|
|:---|:---:|----:|
| [Summary](Clojure-Basics) | [Table of Contents](Clojure) | [Conditionals](Clojure-Let-Bindings)|
