
# Detailed Guide to Contributions.
===================================
 Guide first posted at [Sean Campbell's Blog](https://natacseanc.wordpress.com/2015/09/07/beginners-guide-to-easy-contributions-to-free-code-camp/)

The first 2 steps are *setting up* the environment.

### Step 1: Fork, Clone, Upstream Setup

First - fork the [Free Code Camp repo](https://github.com/FreeCodeCamp/FreeCodeCamp) to your GitHub account. Done by clicking the fork button at the top right of the page. You see a little animated image of the &#039;forking&#039;. From there move to terminal. Running the commands below will create a copy of the Free Code Camp repo you just forked.

```bash
git clone https://github.com/[USERNAME]/freecodecamp # put in your [USERNAME]
cd freecodecamp
git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp
```

The first line clones the repo to your local machine, making a directory called `freecodecamp` in the current folder you are in. Then move inside that folder with `cd freecodecamp`. The last line adds the original Free Code Camp repo as a remote upstream. This allows you to pull in the changes that are made to the main project to keep your local copy up to date. This is done by running...

```bash
git fetch upstream
```

If there were changes then run the commands below to merge; if nothing happens then skip these 2 commands.

```bash
git checkout staging # make sure I am on staging branch
git merge upstream/staging # merge the changing to my local machine
```

Your local `staging` branch is up to date with the [Free Code Camp repo](https://github.com/FreeCodeCamp/FreeCodeCamp) now.

### Step 2: Follow README.md Instructions for more Setup.

This guide stresses the importance of reading the [README.md](https://github.com/FreeCodeCamp/FreeCodeCamp#contributing) on contributing. Please have [ESlinter](http://eslint.org/docs/user-guide/integrations.html) running, as the warnings are there to help you.

### Prerequisites

- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- [ESlinter](http://eslint.org/docs/user-guide/integrations.html)


These commands are straight from the FCC directions on the README.md


```bash
# Install NPM dependencies
npm install

# Install bower globally
npm install -g bower

# Install Bower dependencies
bower install

# Install Gulp globally
npm install -g gulp

# Create a .env file
touch .env
```

What goes in the .env file?? Well first if you do not have a [Mandrill account](https://mandrill.com/signup/?_ga=1.36983655.693747097.1440924471) you will need to set one up.
Mandrill is an email service that is beyond the scope of this guide. A quick note; this file will not be included when pushing to GitHub as it will be listed in the `.gitignore` file.

#### .env file contents

```

MONGOHQ_URL='mongodb://localhost:27017/freecodecamp' // do not change

FACEBOOK_ID=stuff
FACEBOOK_SECRET=stuff

GITHUB_ID=stuff
GITHUB_SECRET=stuff

GOOGLE_ID=stuff
GOOGLE_SECRET=stuff

LINKEDIN_ID=stuff
LINKEDIN_SECRET=stuff

MANDRILL_PASSWORD=stuff // Your mandrill password
MANDRILL_USER=stuff // Your mandrill username

TRELLO_KEY=stuff
TRELLO_SECRET=stuff

TWITTER_KEY=stuff
TWITTER_SECRET=stuff
TWITTER_TOKEN=stuff
TWITTER_TOKEN_SECRET=stuff

BLOGGER_KEY=stuff

SESSION_SECRET=secretstuff // any word you like in small case I believe.
COOKIE_SECRET='this is a secret'

PEER=stuff
DEBUG=true

```

### Setup is complete - next - the workflow of contributions
=============================================================

# Start of issue fixing

### Part 3: Start MongoDB

Open up two terminal windows, one to run the mongodb:

```bash
mongod
```

Then minimize this terminal and move to the other which will be the one to complete the workflow.

```bash
# run mongodb
mongo

# switch to the free code camp database
use freecodecamp

# exit mongo
press Crtl + d
```
### Step 4: Finding Issue in the Code Base

The issue on GitHub will look something like this.

<a href="https://natacseanc.files.wordpress.com/2015/09/issue1.png"><img class="alignnone wp-image-161" src="https://natacseanc.files.wordpress.com/2015/09/issue1.png?w=300" alt="issue" width="456" height="205" /></a>


To find out what file the challenge will be in go to the FCC Map to find out which section the challenge is a part of; the example is [Learn how Script Tags and Document Ready Work](http://freecodecamp.com/challenges/learn-how-script-tags-and-document-ready-work) and it is a part of the jQuery section.

<a href="https://natacseanc.files.wordpress.com/2015/09/section.png"><img class="alignnone size-medium wp-image-164" src="https://natacseanc.files.wordpress.com/2015/09/section.png?w=300" alt="section" width="300" height="262" /></a>

The actual data for each challenge is located in the `seed/challenges/` directory. In this folder there are `.json` files. Each file is named for the section of challenges. So for this demo you need to be in the `jQuery.json` file.

<a href="https://natacseanc.files.wordpress.com/2015/09/files.png"><img src="https://natacseanc.files.wordpress.com/2015/09/files.png?w=287" alt="files" width="287" height="300" class="alignnone size-medium wp-image-171" /></a>

The file itself is of an object that has a `challenges` attribute which is a list of challenge objects. These have key/value pairs of the title, description, test, and other info that is needed for the other code to build the actual challenge.<a href="https://natacseanc.files.wordpress.com/2015/09/json1.png"><img class="alignnone size-large wp-image-159" src="https://natacseanc.files.wordpress.com/2015/09/json1.png?w=809" alt="JSON" width="809" height="665" /></a>


To fix a simple typo in the test output you should do a search for the challenge then navigate to the `"test":` key to find the error. The test is explained in the next part. Any text wrapped in the `<code>` tags will appear in the red text that you see in the challenge description or test output.

<a href="https://natacseanc.files.wordpress.com/2015/09/codetag.png"><img class="alignnone size-full wp-image-140" src="https://natacseanc.files.wordpress.com/2015/09/codetag.png" alt="codeTag" width="384" height="206" /></a>

### Step 5: Making the Change

Go to your terminal and run the command below to make sure that nothing has changed to the main code base

```bash
git fetch upstream
```

If there was a change then merge in like Step 1. Create a branch that explains the change ie `fix/typo-jquery-test`. Include a brief description of the changes you have made. Include `closes #1337` for each issue that this pull request intends to close.

```bash
# create and move to branch
git checkout -b fix/typo-jquery-challange-test
```

Open the `jQuery.json` file; the issue that you have is that there is parenthesis in the test output that should not be there. Each test has two parts to the `assert()` method. The first is the test(s), the second part which is separated by a comma is the output description. Please note this picture shows after the change has been made.

<a href="https://natacseanc.files.wordpress.com/2015/09/test.png"><img class="alignnone size-full wp-image-131" src="https://natacseanc.files.wordpress.com/2015/09/test.png" alt="test" width="809" height="18" /></a>

The test is the `editor.match(/\\.parent\\(\\)\\.css/g)`, where the description section is `'You should use the <code>.parent()</code> function to modify this element.'`. The issue is that in the description section there are actual `(` and `)`. Meaning the code used to be.

<a href="https://natacseanc.files.wordpress.com/2015/09/testbad.png"><img class="alignnone size-full wp-image-130" src="https://natacseanc.files.wordpress.com/2015/09/testbad.png" alt="testbad" width="809" height="17" /></a>

This causes the strange outputs that occur in the tests. By using the right [character code](http://character-code.com/) you will be able to replace the parenthesis and the period. At this point save the file but do **not** stage or commit anything with Git yet; you **will want** to run the app locally and see if the changes worked!

### Step 6: Run Free Code Camp App Locally

Mental check that part 3 was done if not do it now. Then:

```bash
# Seed database with the challenges
node seed/

# start the application
gulp
```

The gulp command will take a second or two then there will be a IP address that I right click and open in my browser. Now I will navigate to that challenge to verify the changes were what I expected. This is the purple local URL:

<a href="https://natacseanc.files.wordpress.com/2015/09/ipadress.png"><img class="alignnone size-full wp-image-137" src="https://natacseanc.files.wordpress.com/2015/09/ipadress.png" alt="ipadress" width="674" height="100" /></a>

### Step 7: Creating Pull Request

After making changes and verification of your work run:

```bash
# check status for piece of mind to see unstaged changes
git status

#check if anything changed in upstream
git fetch upstream
# ASSUMING no changes I can proceed.
# if there are changes see Appendix A about stash.
# DO NOT continue if there are changes as you may create conflicts

# stage the file
git add [FILENAME]

# commit changes
git commit
```

You can have [Git open up Sublime when you want to commit a message.](https://help.github.com/articles/associating-text-editors-with-git/). This allows and encourages meaningful commit messages. Make a title on the first line then go into more detail on new lines. So for this demo the message would be something like:

```
fix typo on [CHALLENGE]

there were unnecessary parenthesis in the test outputs
closes #1337
```

You are able to auto [close the issue when the PR is merged into the code base](https://help.github.com/articles/closing-issues-via-commit-messages/). Save and close the commit message file; brings you back to the terminal

```bash
git push -u origin fix/typo-jquery-test
# where the part after origin is what ever you called the local branch
```

Now the changes are on both your local machine and your GitHub account. Opening up a browser, you can navigate to the forked copy on your GitHub account. There will be a green button just above the listing of files on the right that read Compare & Pull Request.

<img class="alignnone size-full wp-image-139" src="https://natacseanc.files.wordpress.com/2015/09/compare.png" alt="compare" width="500" height="203" />

Clicking this takes you to the screen where you can review the changes once again and finalize the commit message. Then wait for the code to be merged in or possibly some tips on how to improve the changes.

<img class="alignnone size-full wp-image-132" src="https://natacseanc.files.wordpress.com/2015/09/pr.png" alt="pr" width="600" height="489" />

Guide written by: [@natac13](https://github.com/natac13) on Twitter [@natac1311](https://twitter.com/?lang=en)

### Appendix A: Stash

Short explanation on what happens if during the time you were making changes there were some merged into the [`upstream`](https://github.com/FreeCodeCamp/FreeCodeCamp). Meaning your local copy is not up to date. This puts you right **before** adding any files to be *staged* or *committed*. So:

```bash
# check changes to upstream
git fetch upstream
# changes have happened

# stash your changes
git stash

# merge upstream into the working branch
git merge upstream/staging

# reapply your changes
git stash apply
```

You are now back up to date with your changes ready to be staged and committed. [Git docs on stash](https://git-scm.com/book/en/v1/Git-Tools-Stashing).
