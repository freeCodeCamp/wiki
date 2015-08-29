Include the following code in the page.
```html
<!-- Write these first. Here `bootstrap.js` doesn't mean Twitter Bootstrap. -->
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>

<!-- Edit the src. Write `type="module"` (important) for linked script -->
<script src="app.js" type="module"></script>

<!-- Remember to write `type="module"` for embedded script -->
<script type="module">
    //→ write your script here
</script>
```

**See:** https://github.com/google/traceur-compiler/wiki/Getting-Started