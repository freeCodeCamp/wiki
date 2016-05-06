# Clojure - Let

`let` is a fundamental part of Clojure. Whereas `def` creates a global variable,
`let` creates a local variable.
```clojure
(def x 5)
(println x)
; => 5
;    nil
(let [x 2]
  (println x))
; => 2
;    nil
(println x)
; => 5
;    nil
```
:rocket: [IDEOne it!](https://ideone.com/xcNth2)

`x` in this example never actually gets changed. `x` just refers to something
different inside of our `let` binding. This can be a useful way to avoid repetition
inside a function.

This is incredibly useful. Having too many global variables can lead to nasty
bugs and unintended behaviour.
```clojure
(def x 5)
(defn add-5 [y] (+ x y))
(add-5 5)
; => 10
(defn change-x []
  (def x 6))
(change-x)
; => nil
(add-5 5)
; => 11
```
:rocket: [IDEOne it!](https://ideone.com/MFjA3C)

Uh oh! That's not adding 5 anymore! Of course, this example is a bit silly, but
using too many global variables can lead to bugs that are just as scary as this
one.

**Note:** We aren't really *reassigning* `x` here, like you would in a C-like
language. We're just creating a new variable that happens to also be called x.
This is a _very, very, **very**_ bad idea.

## Multiple Bindings

`let` can also define multiple variables at once, and can assign variables to
expressions.
```clojure
(let [spam "foo"
      ham (str "b" "ar")] ; str is a function that concatenates strings
  (println spam ham))      ; or converts variables into strings.
; => foo bar
;    nil
```
:rocket: [IDEOne it!](https://ideone.com/y5EBIM)

| [:point_left: Previous](Clojure-Conditionals) | [:book: Home :book:](Clojure) | [Next :point_right:](Clojure-Loop-Recur)|
|:---|:---:|----:|
| [Conditionals](Clojure-Conditionals) | [Table of Contents](Clojure) | [Loop and Recur](Clojure-Loop-Recur)|
