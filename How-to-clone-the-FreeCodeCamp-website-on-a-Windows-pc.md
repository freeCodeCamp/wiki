# How to clone and setup the FreeCodeCamp website on a Windows pc
This list works with the FreeCodeCamp site and have been tested on this Angular tutorial [https://docs.angularjs.org/tutorial](https://docs.angularjs.org/tutorial) as well. Setting up the dev invironment on a Windows pc is easy although it will give a ton of errors first in the process. The important part is to correct theese errors.
## Toolchain
1. Git bash [https://msysgit.github.io/](https://msysgit.github.io/)
2. Node.js [https://nodejs.org/](https://nodejs.org/)
3. MongoDB [https://www.mongodb.org/downloads](https://www.mongodb.org/downloads)
4. SourceTree [https://www.atlassian.com/software/sourcetree/overview](https://www.atlassian.com/software/sourcetree/overview) This is not mandatory but is a nice GUI for working with Git
For working with the FreeCodeCamp (and any other nodejs sites) the Git Bash is indispensable in the process of setting them up.
1. The first 3 tools needs to be installad.
2. from a commandline opened with admin rights run  
  `npm install npm -g`  
  `npm install bower -g`  
  `npm install gulp -g`  
3. If you want to spare the time in explorer finding Mongo when it has to be started create a .cmd file on your desktop and write the path to Mongo. Probably  %programfiles%\MongoDB\Server\3.0\bin\mongod.exe. 
4. Create the default folder for mongo to store databases: C:\data\db

**Every command from now on has to be executed from Git Bash. npm install and bower install is downloading components from Git repos and MUST have access to the Git commands**

4. Follow the instructions here [https://github.com/FreeCodeCamp/freecodecamp](https://github.com/FreeCodeCamp/freecodecamp) and clone the project.
5. Optional, if you installed SourceTree open and add the repo
6. When you first run npm install you will get a ton of errors. This has to do mostly with python. Python is not installed on a standard Windows pc. Run `bower install`, bower install will fetch the needed python components. Run `nmp install` again. Run `bower install` again.
7. Start mongo from the desktop shortcut and run `node seed`. You should now see a lot of activity in the window where you started mongo.
8. Run gulp and note what port it starts the site on. (Should be 3000) Open localhost:3000 (or whatever port it started

**you're good to go**
