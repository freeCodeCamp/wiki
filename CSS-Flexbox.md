# CSS Flexbox 

[CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) allows us to easily format our HTML like you never knew was possible. With flexbox it is possible to align vertically and horizontally, easily. Like the sound of it? Yeah me too.

It is also fantastic for general layout of your website or app, it is easy to learn, supported well (in all modern browsers) and is great to work with, not to mention it doesn't take long to get to grips with at all!

## Flexbox  

Here is a list of the flexbox properties that can be used to position out elements in css:

### CSS that can be applied to the container

```css

display: flexbox | inline-flex;
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
justify-content: flex-start | flex-end | center | space-between | space-around;
align-items: flex-start | flex-end | center | baseline | stretch;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;

```

### CSS that can be applied to items/elements in the container

```css

order: <integer>;
flex-grow: <number>; /* default 0 */
flex-shrink: <number>; /* default 1 */
flex-basis: <length> | auto; /* default auto */
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
align-self: auto | flex-start | flex-end | center | baseline | stretch;

```

So now you have your toolkit but you ask "What do I do with my tools, how do I use these?", well let me show you.

### Display Flex

`display: flex;` is just to tell your browser hey I would like to use flexbox with this container, please. This will initialize this box as a flex container and apply some default flex properties.  

This is what out container looks like without `display: flex;`

![CSS playground no flex properties](http://i.imgur.com/m6rjD5n.png)

After adding `display: flex;` we get the below, the default flex properties are applied causing it to show as such

![CSS playground display flex default style](http://i.imgur.com/tjTiJtw.png)

### Flex Direction

`flex-direction:` allows us to control how the items in the container display, do you want them left to right, right to left, top to bottom or bottom to top? you can do all these easily with setting the flex direction of the container.

Flexbox applies row as the default for the direction. Here is what they all look like: 

`flex-direction: row;`

![flex-direction: row; example](http://i.imgur.com/Gv2PSmR.png)

`flex-direction: row-reverse;`

![flex-direction: row-reverse example](http://i.imgur.com/eOutooF.png)

`flex-direction: column;`

![flex-direction: column example](http://i.imgur.com/7ZtcqWh.png)

`flex-direction: column-reverse;`

![flex-direction: column-reverse example](http://i.imgur.com/4cuV92k.png)

### Flex Wrap

Flexbox by default will try to fit all elements into one row but you can change this with the flex-wrap property, this allows you to set if the elements will spill over or not, there are 3 properties for `flex-wrap:`

`flex-wrap: nowrap` this is the default and will look to fit everything in one row from left to right. 

`flex-wrap: wrap` this will allow items to go on to create multiple rows and from left to right.

`flex-wrap: wrap-reverse` allows for items to be on multiple rows but displaying right to left this time.

### Flex Flow

Flex flow combines the use of `flex-wrap` and `flex-direction` into one property, it is used by first setting the direction and then the wrap. 

`flex-flow: column wrap;` is an example if how to use this. 

### Justify Content

`justify-content` is a a property to align items in the container along the main axis (this changes depending on how content is displayed). There are multiple options for this and it allows us to fill any empty space on rows but defining how we want to 'justify' it.  

Here are our options when we justify our content `flex-start | flex-end | center | space-between | space-around;`.

### Align Items

Align items allows us to align items along the cross-axis. This allows content to be positioned in many different ways using justify content and align items together. 

`align-items: flex-start | flex-end | center | baseline | stretch;`

### Align Content 

This is for aligning items with multiple lines, it is for aligning on the cross-axis and will have no effect on content that is one line.

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## Games and Apps
[Flexbox Defense](http://www.flexboxdefense.com/) is a web game that teaches flexbox the fun way.

[Flexbox Froggy](http://flexboxfroggy.com/) is also a web game that teaches flexbox the fun way.

[Flexbox in 5](http://flexboxin5.com/) is a web app that allows you to be able to see how flexbox works with a few simple controls.

[Flexyboxes](http://the-echoplex.net/flexyboxes/) is an app that allows you too see code samples and change parameters to see how flexbox works visually.

[Flexbox Patters](http://www.flexboxpatterns.com) is a website that shows off loads of flexbox examples

## Documentation
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Videos
[Flexbox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[Flexbox Practical Examples](https://www.youtube.com/watch?v=H1lREysgdgc)

[What The Flexbox?!](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid)