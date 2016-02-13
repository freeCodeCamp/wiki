As a developer you will often want to debug code. You might have already used `console.log` in some of the challenges, which is the simplest way to debug.

In this article we will tell you some of the coolest tricks, to debug using the native debug-tools of the browsers.

#### A brief insight into the FreeCodeCamp Code Editor:
Before jumping into debugging lets leak out some secret facts about that *awesome code checking engine* at FCC.

We use a customized [CodeMirror](http://codemirror.net/mode/javascript/index.html), as the code editor. A [`eval()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) is used to evaluate the JavaScript code represented as a string from the editor. When `eval()` is called, browsers will natively execute your code. We will learn more why this secret is important in later sections of this article.

#### Now moving on to the tricks:

## Google Chrome DevTools

Google Chrome is one of the most popular browsers with a built-in JavaScript engine called [V8](https://developers.google.com/v8/), and
offers a great toolset for developers called [Chrome DevTools](https://developer.chrome.com/devtools).
Visiting their [Complete JavaScript debugging guide](https://developer.chrome.com/devtools/docs/javascript-debugging) is highly recommended.

### 1 : Basics of DevTools

#### Launching the Chrome DevTools
Hit <kbd>F12</kbd>. Alternatively you can press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> on Windows and Linux or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd> on Mac,
or If you just love your mouse  go to `Menu > More Tools > Developer Tools`.

#### Getting to know the `Sources` and the `console` tabs.
These two tabs are the perhaps going to be your best friends while debugging.
The `Sources` tab can be used to visualize all the scripts that's on the webpage you are visiting. This tab has sections for the code window, file tree, call stack & watch windows, etc.

The `console` tab is where all of the log output goes.
Additionally you can use the console tab's prompt to execute JavaScript code. Its kind of synonymous to the command prompt on Windows, or terminal on Linux.

 > *Tip : Toggle the console anytime in the DevTools using <kbd>Esc</kbd> key.*

### 2 : Common Shortcuts and features
While you can visit the [complete list of shortcuts](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts), below are a few that are most used:
<table>
 <tr>
  <td>Feature</td><td>Windows, Linux</td><td>Mac</td>
 </tr>
 <tr>
  <td>Search for a keyword, regex is supported.</td>
  <td><kbd>Ctrl</kbd>+<kbd>F</kbd></td>
  <td><kbd>Cmd</kbd>+<kbd>F</kbd></td>
 </tr>
 <tr>
  <td>Search and Open a file</td>
  <td><kbd>Ctrl</kbd>+<kbd>P</kbd></td>
  <td><kbd>Cmd</kbd>+<kbd>P</kbd></td>
 </tr>
 <tr>
  <td>Jump to line</td>
  <td><kbd>Ctrl</kbd>+<kbd>G</kbd>+`:line_no`</td>
  <td><kbd>Cmd</kbd>+<kbd>G</kbd>+`:line_no`</td>
 </tr>
 <tr>
  <td>Add a breakpoint</td>
  <td><kbd>Ctrl</kbd>+<kbd>B</kbd>, or click on the line no.</td>
  <td><kbd>Cmd</kbd>+<kbd>B</kbd>, or click on the line no.</td>
 </tr>
 <tr>
  <td>Pause / resume script execution</td>
  <td><kbd>F8</kbd></td>
  <td><kbd>F8</kbd></td>
 </tr>
 <tr>
  <td>Step over next function call</td>
  <td><kbd>F10</kbd></td>
  <td><kbd>F10</kbd></td>
 </tr>
 <tr>
  <td>Step into next function call</td>
  <td><kbd>F11</kbd></td>
  <td><kbd>F11</kbd></td>
 </tr>
</table>

### 3 : Using a Source Map for our Code
One of the coolest feature that you will love is [debugging Dynamic Script](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript), on the fly, via [Source Maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps).

Every script can be visualized in the Source tab of the DevTools. The source tab has all the JavaScript source files. But the code from the code editor is executed via `eval()`in a container simply called a virtual machine(VM) within the browser process.

As you might have guessed by now is that our code is actually a script that doesn't have a file name. So we don't see that in the Source tab.

> :sparkles: ***Here comes the hack!*** :sparkles:

We must leverage `Source Maps` to assign a name to the JavaScript from our editor. Its pretty simple:

Lets say we are on the [Factorialize](http://www.freecodecamp.com/challenges/factorialize-a-number) challenge, and our code looks like this:

```javascript
function factorialize(num) {
  if(num <= 1){
  ...
}
factorialize(5);
```

All we need to do is add `//# sourceURL=factorialize.js` to the top of the code, i.e the first line:

```javascript
//# sourceURL=factorialize.js

function factorialize(num) {
  if(num <= 1){
  ...
```

> :sparkles: ***And Eureka that's it!*** :sparkles:

Now open up the DevTools and search for the file name.
Add break points, Debug away and enjoy!
