# Python Input() Function

Many a times, in a program we need some input from the user. Taking inputs from the user makes the program feel a bit interactive. In python, to take input from the user we have a function `input()`. Let's see some examples:

1. When we just want to take the input:
```python
# This will just give a prompt without any message
inp = input()
```

2. To give a prompt with message:
```Python
prompt_with_message = input('<Your prompt message should appear here>')
# <Your prompt message should appear here> _
# The '_' in the output is the prompt
```

3. When we want to take an integer input:
```Python
number = int(input('Please enter a number: '))
```
If you enter a non integer value then Python will throw an error `ValueError`. **So whenever you use this, please make sure that you catch it too.** Otherwise, your program will stop unexpectedly after the prompt. 

4. When we want a string input:
```python
string = str(input('Please enter a string: '))
```
Though, inputs are stored by default as a string. Using the `str()` function makes it clear to the code-reader that the input is going to be a 'string'. It is a good practice to mention what type of input will be taken beforehand.
