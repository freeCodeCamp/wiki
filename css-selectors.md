In CSS, selectors are patterns used to select DOM elements.

basic selector format:
Selector {property:value;}

Example:
```css
a { color: black; }
h1 { font-size 24px; }
```

## Cheat List of Selectors
```css
A                - target all A tags (for example: 'a', 'h1', 'p')
.name            - target all items of with class of 'name'
#name            - target elements with ID of 'name'. 
A,B              - target all A elements and all B elements
A B              - target B elements that are inside of A elements
B > A            - target A elements that are direct children of B
B + A            - target all A elements that come directly after B elements
A~B              - target all B elements that have an A element preceeding it
```
### Pseudo-class Selectors
These are keywords that you can add to css selectors to specifiy a specific state of the element to be selected. 

```css
A:hover           - Specify styling for tag A, when the user hovers over A
A:not(.name)      - Target all A elements that do NOT have the class name
A::before         - Insert something before the content of the A element
A::after          - Insert something after the content of the A element
A::first-child    - Target all A elements that are the first child of their parent

```
##There are many more CSS selectors! Learn about them here!
[Great Reference at CodeTuts](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)  
[CSS selector reference at w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp)  
[Overview by the Mozzilla Developer Network](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors)  

NOTE: Feel Free to add to this document.   
