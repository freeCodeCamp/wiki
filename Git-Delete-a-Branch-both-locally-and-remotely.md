#### When to Delete branches?

Normally in a contribution flow `Branches` are a great way to work on different features, fixes, etc. while isolating them from the main codebase. So a repo may have a `master` branch, and separate branches to work on different features.

Typically once the work is completed on a feature and it is recommended to delete the branch.

#### The Delete workflow:

Lets say you have a repo called as `AwesomeRepo`, and its hosted on Github, at a location such as `https://github.com/my_username/AwesomeRepo`.

Also lets assume it has the branches like: <br>
`master`<br>
`feature/some-cool-new-stuff`<br>
`fix/authentication`<br>
`staging`<br>

For consistency we will assume branch names are same on `local` as well as on the `remote`.

Now, lets say you are done with that fix for authentication and want to remove the branch `fix/authentication`.

#### Deleting the branch REMOTELY:

Simply do:<br>
`git push --delete <remote> <branch>`. 

For example: `git branch --delete origin fix/authentication`

#### Deleting the branch LOCALLY:

First checkout to a branch other that the one you want to delete:<br>
`git checkout <branch>`. For example: `git checkout master`

Git will not let you delete the branch you are currently on.

Then proceed with deleting:
`git branch -D <branch>`. For example: `git branch -D  fix/authentication`
