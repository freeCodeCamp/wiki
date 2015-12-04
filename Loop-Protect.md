The Free Code Camp code runner has a built in Infinite Loop Protect feature, leveraged from [JSBin's Loop Protect](https://github.com/jsbin/loop-protect).  The loop protect injects some code into user created loops to allow a safe exit if more than ~500ms has passed without exiting the loop.  Loop protect will catch many, but not all infinite loop issues.
If you see this message:  
`Error: Potential infinite loop at line X`  
It means you have been protected from an infinite loop.  
**Note:** Loop Protect cannot detect infinite recursion.

### Disable Loop Protect
In some cases - a slow computer or a long loop - you may get an incorrect loop protect.  In order to disable loop protect, add the following comment over the line the loop protection message lists:  
`//noprotect`  

**Warning:** Disabling loop protect means you may potentially allow your code to go into an infinite loop, causing your browser to be unresponsive.

### Recovering Unresponsive Code
If you have erred and incorrectly disabled loop protection and now have an unresponsive solution, you can [Disable Code Auto-Run](https://github.com/freecodecamp/freecodecamp/wiki/Disable-Code-Auto-Run).
