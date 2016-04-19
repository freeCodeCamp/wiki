Removing all your locally stored challenges will solve many problems related to the browser crashing on FreeCodeCamp

In Chrome:
* On [freecodecamp](https://freecodecamp.com) open your console
 * Windows: `Ctrl` + `Shift` + `J`
 * Mac OS: `Cmd` + `Opt` + `J`
* Go to resources tab(chrome). 
 * There click on the "Local Storage" link in the nav bar on the right.
* Delete all the entries on the right side, or run this command in your browser's console to clear all entries from your localStorage: `localStorage.clear();`
* See if this solves your issue

![](https://cloud.githubusercontent.com/assets/6775919/9448820/911626ee-4a53-11e5-98c9-b2bf4ca50816.png)

Alternatively, if you are having issues with a specific challenge freezing your browser, [find the name of that challenge in local storage and delete just that one](How-to-clear-specific-values-from-your-browser's-local-storage).
