# Cloning a specific branch in Git :octocat:

To clone a branch, enter the following into the terminal:
```bash
git clone -b <branch> <remote_repo>
```

If you only want to fetch the specified branch:
```bash
git clone -b <branch> --single-branch <remote_repo>
```

Here is an example of fetching the `staging` branch from FreeCodeCamp:
```bash
git clone -b staging https://github.com/FreeCodeCamp/FreeCodeCamp.git
```