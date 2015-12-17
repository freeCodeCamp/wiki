# Change Text Inside an Element Using jQuery
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and italicize the text of our heading:

`$("h3").html("<i>jQuery Funhouse</i>");`

jQuery also has a similar function called `.text()` that only alters text without adding tags. So when using `.html()` please remember that you will be editing the whole markup and not just the text.

You can also italicize the text without explicitly typing in the actual text using jQuery. That is italicize using a reference to the text. For example, in the waypoint you can get the text "jQuery Funhouse" using `$("h3").html();`. Then you can italicize it using `$("h3").html("<i>" + $("h3").html() + "</i>");`. This way you really don't need to know the actual text and you also avoid any "text-entry" error when you want to just italicize the text without changing the text.
