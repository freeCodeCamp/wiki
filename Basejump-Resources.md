The curriculum lead-up to the first Basejump is not very comprehensive.  Here are a number of common resources which other campers have found helpful.

### Getting Started with Yeoman
* https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Intro-to-Yeoman-Angular-Fullstack-Basejumps - Lots of helpful tips and tricks for the Yeoman Angular Fullstack setup
* https://github.com/DaftMonk/generator-angular-fullstack#generators - Generator used by Yeoman, you can find syntax and what files it creates

### MEAN Stack Videos
https://www.youtube.com/watch?v=kHV7gOHvNdk - 5 Part Series on setting up a MEAN stack

### MEAN Stack Tutorials
Clementine is a stripped down MEAN stack, great for learning the fundamentals.  
https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html

Authentication with Passport for the MEAN stack:
https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs

An amazing list of resources for learning the MEAN stack:
https://github.com/ericdouglas/MEAN-Learning

### Scotch IO Tutorials
* https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application   
* https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure

### Cloud 9 Tricks
##### Speed up browser reloads
1. Open gruntfile.js and edit both instances of `livereload: true` to `livereload: false`.
2. Open server/config/express.js and comment out the line `app.use(require('connect-livereload')());`