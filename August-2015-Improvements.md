We're super slow today. Sorry for the inconvenience. We are working to fix this as fast as possible.

In short, we switched to Loopback.js, and they have a faulty Mongo connection that only shows up at scale. We're fixing it, and will commit the fix back to Loopback.js as well.

### In the meantime, we invite you to:

* [Hang out in our chat room with us](//gitter.im/freecodecamp/freecodecamp)
* [Listen to our camper-DJ'd radio station](//plug.dj/freecodecamp)
* [Work through other awesome coding free resources](http://blog.freecodecamp.com/2015/06/25-free-resources-for-new-javascript-developers.html)

![WIP](http://i.imgur.com/mHZS2A6.png)

## Other major known issues

### I can't log in with my e-mail address
If you have used an alternate authentication source like Twitter or GitHub you may be able to log in with it. Otherwise, we are working on the problem.

### I can't submit my code on Waypoints/Bonfires
On Chrome:  Open your dev console (F12) and click and HOLD the normal refresh button.  Select 'Empty Cache and Hard Reload'.

If you have any issues with Free Code Camp, please let us know: https://github.com/freecodecamp/freecodecamp/issues/new

## Today's Improvements (the aspirations that got us into this mess)
* replaced our getting-started videos with a simple 10-minute process (using GIFs instead of videos)
* doubled the number of our HTML5 and Bootstrap challenges
* replaced Codecademy's JavaScript and jQuery challenges with our own challenges
* added our own Object-oriented Programming and Functional Programming challenges
* added two new Zipline front end challenges (Personal Portfolio and Simon game), and moved our Ziplines to much earlier in our curriculum
* completely replaced our Field Guide with a searchable, and easily-editable open-source wiki
* made it so your Bonfire code is stored in your browser, so if you leave the page, your code will be there when you come back
* simplified our portfolio pages. You can now click a single button to mirror your Free Code Camp profile with your GitHub profile. Bonfire solutions are no longer shown here, but they'll eventually be accessible through our API.
* fixed some issues with Brownie Points and Streaks
* improved our Camper News page by removing the (mostly unused) comments and adding one-click upvoting
* added a Creative Commons license to literally all of our images and text
* thanks to Loopback, everything is now an API, and we will soon publish cool ways to interact with Free Code Camp's (non-sensitive) data

## FAQ

### The challenge I was most recently doing disappeared.
You can just keep going. If you have time to go back and try our new challenges, they should be a quick review for you. Otherwise, keep moving forward.

### Why are you deploying all these improvements at once?
We've been working on some of the features for months on our Staging branch. Most of them were held up by a single task: our transition to [Loopback](http://loopback.io/). @BerkeleyTrue started working on this back in March. 

### Was deploying everything at once necessary?
Probably not. Going forward, we will deploy new code several times a day (as we did prior to the Loopback feature). We plan to start using a [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) and other agile best practices as we reduce our [technical debt](https://en.wikipedia.org/wiki/Technical_debt).