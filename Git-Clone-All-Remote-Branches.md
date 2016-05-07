# Cloning all remote branches in Git :octocat:

To clone a remote git repository, enter the following into the terminal:

> Note: Make sure you are in a root folder e.g. `webdev` instead of a project specific folder.
```bash
git clone <remote_repo>
cd <remote_repo>
```

List your branches using these commands:
```bash
git branch // Lists local branches
git branch -a // Lists local and remote branches
```

To checkout a remote branch locally:
> If a remote branch exists with the name of the branch you checked out, it will automatically track the remote branch.
```bash
git checkout <branch>
```

Here is an example of fetching the remote `master` branch from FreeCodeCamp:
```bash
git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git
cd FreeCodeCamp
git checkout master
```