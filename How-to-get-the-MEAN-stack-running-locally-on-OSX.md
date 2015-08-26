## Requirements
To install MongoDB, you should have Mac OS X 10.6 (Snow Leopard) or above. To find out which version of OS X you own, click the  icon in the top left corner of your screen and select `About This Mac`.

## Step 1: installing MongoDB
The easiest way to install MongoDB on OS X is using [HomeBrew](http://brew.sh/). If you haven't used HomeBrew before, simply execute the following command in a Terminal window:
```sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
After HomeBrew is successfully installed, follow up with this command:
```sh
brew update && brew install mongodb
```
HomeBrew will automatically install all the dependencies for you.

## Step 2: installing Node.js
Again, we'll let HomeBrew do the heavy lifting:
```sh
brew install node
```
The npm executable is already included in the Node.js package.

Before continuing, let's make sure Node.js modules can be found by others (CAUTION: this command can be destructive if mistyped, so it's best to copy and paste it):
```sh
echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc
```
To check if the configuration is in effect, execute:
```sh
echo $NODE_PATH
```
You should see `./node_modules:/usr/local/lib/node_modules` printed out below your command.

If you use a different shell than Bash, simply replace `~/.bashrc` with your shell configuration file.

## Step 3: installing Express.js
```sh
npm install -g express
```

## Step 4: installing Angular tools
```sh
npm install -g yo grunt grunt-cli generator-angular-fullstack bower
```

## Step 5: generating an Angular site
Make a directory for your Basejump projects. Assuming your desktop is your de facto workspace:
```sh
mkdir ~/Desktop/basejumps && cd ~/Desktop/basejumps
```
Now that all the preparations are in place, it's time for the main event:
```sh
yo angular-fullstack
```
Answer the questions according to checklist items #13-23 of [Waypoint: Get Set for Basejumps](http://www.freecodecamp.com/challenges/waypoint-get-set-for-basejumps). Consult #24-27 if you run into errors. This will download ~350MB worth of files into your current directory.

## Step 6: starting MongoDB
To start MongoDB, run the following commands in your terminal: 
```sh
mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --nojournal --rest "$@" --httpinterface' > mongod && chmod a+x mongod && ./mongod
```
Note that it's normal if you don't see any messages. Keep calm and move on.

## Step 7: starting Grunt
Open a new Terminal tab by pressing `⌘T`, and run the following command:
```sh
grunt serve
```
Grunt should automatically open your new Angular site's index page as soon as it finishes starting up.

## Step 8: initialising local Git repository
Turn the folder in which your application is running into a Git repository by running the following commands: 
```sh
git init && git add . && git commit -am 'initial commit'
```

Now you should be able to follow the rest of the Waypoint instructions to push to GitHub and Heroku. Just ignore the part about SSH key (#33-36) and replace `~/workspace` with `~/Desktop/basejumps` (or wherever your app directory is).

You might also want to keep `basejumps` as a template directory and make a copy of it every time you start a new project, e.g.:
```sh
cd ~/Desktop && cp -r basejumps voting && cd voting
```

The above steps were tested under the following configuration:
* OS X 10.10.5
* zsh 5.0.8 (x86_64-apple-darwin14.3.0)
* node v0.12.7
* npm 2.13.3