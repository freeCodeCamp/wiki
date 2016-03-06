<h1>Git Pull vs Git Fetch:</h1>

These two commands are regularly used by git users. Let's see the difference between both commands.


A clone is simply a copy of a repository. It is something like where you can download source code from some other repository.
<b>git fetch</b> is the command that says "bring my local copy of the remote repository up to date."
<b>git pull</b> says "bring the changes in the remote repository where I keep my own code."
Normally when use <b>git pull</b> , it does the same thing done by <b>git fetch</b> to bring the local copy of the remote repository(up-to-date), and then merging the changes into own code repo.Example
 
     git pull origin ankur bugfix         


The take away is to keep in mind that there are often at least three copies of a project on your workstation. One copy is your own repository with your own commit history. The second copy is your working copy where you are editing and building. The third copy is your local "cached" copy of a remote repository.
One can use     git fetch     to know the changes done in the remote branch since your last pull since. So you can check before doing an actual pull, which could change files in your current branch and working copy.

    git fetch    
    git diff ...origin    
