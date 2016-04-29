# Welcome to the Free Code Camp Wiki!

Our open source community's Wiki focuses on answering your questions about learning to code and getting a coding job. We also cover in detail our:

- Curriculum
- Other Programming Languages
- Local Campsite Communities
- Nonprofit Projects  
 ...and much more

*Taste* the wiki at [**FreeCodeCamp/wiki**](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki) :yum: 

## 

### 1. **Fork it** :fork_and_knife:   
You can get your own fork/copy of [FreeCodeCamp wiki](https://github.com/FreeCodeCamp/wiki) by using the <a href="https://github.com/FreeCodeCamp/wiki/new/master?readme=1#fork-destination-box"><kbd><b>Fork</b></kbd></a> button or clicking [this](https://github.com/FreeCodeCamp/wiki/new/master?readme=1#fork-destination-box).

> [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/FreeCodeCamp/wiki)

### 2. **Clone it** :busts_in_silhouette:  
Once you have forked the wiki repository in Github, you need to clone/download it to local machine with...
  
```sh
$ git clone https://github.com/YOUR_USERNAME/wiki.git
```

> *this makes a local copy in your machine.*

### 3. **Set it up** :up:
Run the following commands to see that _your local copy_ has a reference to _your forked remote repository_ in Github :octocat:  

```sh
$ git remote -v
origin  https://github.com/YOUR_USERNAME/wiki.git (fetch)
origin  https://github.com/YOUR_USERNAME/wiki.git (push)
```

Magic :sparkles: :sparkles: :eyes:  
Now lets add a reference to the original [FreeCodeCamp wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki) repository with...

```sh
$ git remote add upstream https://github.com/FreeCodeCamp/wiki.git
```

> this adds a new remote named **upstream**.  

You may see the changes with...

> ```sh
$ git remote -v
origin    https://github.com/YOUR_USERNAME/wiki.git (fetch)
origin    https://github.com/YOUR_USERNAME/wiki.git (push)
upstream  https://github.com/FreeCodeCamp/wiki.git (fetch)
upstream  https://github.com/FreeCodeCamp/wiki.git (push)
```

### 4. **Sync it** :recycle:
Always keep your local copy of repository updated with the original repository.  
Before making any changes and/or in an appropriate interval, run the following commands _carefully_ to update your local repository.

```sh
# fetch all remote repos and delete any deleted remote branches
$ git fetch --all --prune 

# switch to `master` branch
$ git checkout master 

# reset local `master` branch to match `upstream` repo's `master` branch
$ git reset --hard upstream/master 

# push changes to your forked wiki repo
$ git push origin master 
```

### 5. Ready Steady Go... :turtle: :rabbit2: 
Once you have completed these steps, you are ready to start contributing by checking our [![Help Wanted Issues](https://img.shields.io/badge/Wiki-Help_Wanted_Issues-159818.svg?style=flat-square&maxAge=2592000)](https://github.com/FreeCodeCamp/wiki/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22 "Help Wanted Issues") and creating *new shiny* :sparkles: [pull requests](https://github.com/FreeCodeCamp/wiki/pulls).

## Help Contributing Guides
We also have guides in our Wiki to assist you in your contributions. You can find this and many more guides, tutorials and other information in the [Wiki Central](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Wiki)  Page such as  

> Contributing Using   
- **Browser** *mostly* :earth_americas: 
- and **Desktop application** :computer:

<!-- 
- **Command Line** interface :page_with_curl: 
-->

_**Happy Contributing**_ :smiley: 
<br>
<br>

> ----
<p align="center">Need Help? Read <a href="https://github.com/FreeCodeCamp/wiki/blob/master/.github/CONTRIBUTING.md"><b>CONTRIBUTING</b></a> Guidelines<br>or Chat with us in <kbd><a href="https://gitter.im/FreeCodeCamp/Wiki"><img src="http://i.imgur.com/ThSWa6Y.png?2"> <b>FreeCodeCamp/Wiki</b></a></kbd></p>

> ----
