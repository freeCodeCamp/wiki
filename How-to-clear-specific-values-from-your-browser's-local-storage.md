Removing specific values from your browser's local storage will solve many problems related to the browser crashing or freezing on FreeCodeCamp.

This solves, as example, a common problem with browser hanging out in a challenge's page after saving a response with an infinite loop.

When this happens, you must delete the value in `localStorage` storing that response.

In Chrome:
* On **freecodecamp.com**, open your developer tools.
  * More tools > Developer tools (or `Ctrl` + `Shift` + `I` (Windows), `Cmd` + `Opt` + `I` (Mac))
* Navigate to the `Resources` tab
* Expand the `Local Storage` item in the left pane
* Select `http://www.freecodecamp.com`
* Find the challenge you wish to delete data in the right pane
  ![Finding a key in localStorage Chrome Developer Tools](http://i.imgur.com/O57tcuN.png)
* Right click the desired challenge and select `Delete`

In Firefox:
* On **freecodecamp.com**, open your web console with
  * `Ctrl` + `Shift` + `K`
* From there, using directly the console:
  * Type `console.log(localStorage);` and hit `Enter`.
  * Click in `Storage` link.
    ![Print the localStorage Object from web console and show the Storage](http://i.imgur.com/AsflWtv.png)
  * The **Storage** panel will appear at right.
  * Filter the results to find the Algorithm, Front End Project or Challenge causing the problem.
  * When located, mouse over it and click the `x` at right.
    ![Click the x for deleting the value entry.](http://i.imgur.com/3URr4jQ.png)
  * Once removed, check if the problem was solved. Refresh or close and open the browser if necessary.

**Note:** This can also be done with the [Storage Inspector](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector), but seems like Firefox hangs out when there are so many values.