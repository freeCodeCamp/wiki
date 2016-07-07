# Data Structure Stacks

`Stack` is a linear data structure which follows a particular order in which the operations are performed. The order may be 
LIFO(Last In First Out) or FILO(First In Last Out).

The basic three operations which can be performed on a `Stack`

1. `Push`: Adds an item in the `Stack`. If the stack is full, then it is said to be an Overflow condition. 
2. `Pop`: Removes an item from the `Stack`. The items are popped in the reversed order in which they are pushed. If the `Stack` is empty, 
           then it is said to be an Underflow condition. 
3. `Peek`: Gets the topmost item of the `Stack`.

## Real life example of a `Stack`

Consider a number of plates kept one upon the one another on a dining table. Now the first plate which we have kept would be the last plate
to be picked up which explains the First In Last Out. In a similar way the plate which was last to go on the top of the collection 
of plates would be the first one to be picked up which explains the Last In First Out concept

#### Creating a `Stack` class

```python
class Stack:
     def __init__(self):
         self.items = []

     def isEmpty(self):
         return self.items == []

     def push(self, item):
         self.items.append(item)

     def pop(self):
         return self.items.pop()

     def peek(self):
         return self.items[len(self.items)-1]

     def size(self):
         return len(self.items)
```

#### Driver program

```python
s=Stack()

print(s.isEmpty()) # Would print True as we have initialized the `Stack` and it is empty
s.push(4)
s.push('dog')
print(s.peek()) # Would print 'dog'
s.push(True) 
print(s.size()) # Would print 3 as the size of the `Stack`
print(s.isEmpty()) # Would print False as `Stack` is not empty
s.push(8.4)
print(s.pop()) # Would print 8.4
print(s.pop()) # Would print True
print(s.size()) # Would print 2
```

:rocket: [Run Code](https://repl.it/C9hC/0)
