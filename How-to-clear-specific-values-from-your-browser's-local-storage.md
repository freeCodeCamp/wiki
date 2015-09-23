Removing specific values from your browser's local storage will solve many problems related to the browser crashing or freezing on FreeCodeCamp.

This solves, as example, a common problem with browser hanging out in a challenge's page after saving a response with an infinite loop.

When this happens, you must delete the value in `localStorage` storing that response.

In Firefox:
* On **freecodecamp.com**, open your web console with
  * `Ctrl` + `Shift` + `K`
* From there, using directly the console:
  * Type `console.log(localStorage);` and hit `Enter`.
  * Click in `Storage` link.
    ![Print the localStorage Object from web console and show the Storage](http://i.imgur.com/AsflWtv.png)
  * The **Storage** panel will appear at right.
  * You can filter the results to find the bonfire, zipline or waypoint causing the problem.
  * When located, simply hover it and click in the `x` at right of the value.
    ![Click the x for deleting the value entry.](http://i.imgur.com/3URr4jQ.png)
  * Onve removed, check if the problem was solved. Refresh or close and open the browser if necessary.

**Note:** This can also be done with the [Storage Inspector](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector), but seems like Firefox hangs out when there are so many values.