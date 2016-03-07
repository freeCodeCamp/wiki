In CSS, selectors are patterns used to select DOM elements.

Examples of selectors are `a` or `h1` in:
```css
a { color: black; }
h1 { font-size 24px; }
```

or in:

```css
a {
  color: black;
}
h1 {
  font-size 24px;
}
```

## Cheat list of selectors

| Selector | Selects |
|---|---|---|
| `head` | element with the 'head' tag |
| `.red` | element with the 'red' class |
| `#nav` | element with the 'nav' ID |
| `div#container` | all divs with the 'container' ID |
| `*` | all DOM elements |

Selectors can be combined in interesting ways like:

| Selectors | Select |
|---|---|---|
| `li a` | DOM descendant selector. All aa's tags that are child of li tags |
| `li > a` | Difference selector. Select only direct descendants, an not all of them like the descendant selectors |
| `li + a` | The adjacent selector. It only selects the element that is immediately preceded by the former element. In this case, only the first `a` after each `li`. |
| `a:link` | `link` pseudo-class selects all links that have not been clicked yet |
| `a:hover` | `hover` pseudo-class selects a link that is being hovered by a mouse pointer |
| `a:active` | `active` pseudo-class selects a link that is being clicked by a mouse pointer |
| `a:visited` | `visited` pseudo-class selects a link that has already been clicked |

## Games
[CSS Diner](http://flukeout.github.io) is a web game that teaches almost everything there is to know about combining selectors.

## this is a stub entry!
please read up on this stuff from cheat sheets around the web and edit/complete this document!

[Great Reference at CodeTuts](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
