Depending on how many remotes are present for your local repo, follow the appropriate flow.

#### Checkout a remote branch workflow:

#### For repos with one remote:

If your local repo is having just one remote for example just `origin`:
```
git remote -v
origin  https://github.com/my_username/AwesomeRepo.git (fetch)
origin  https://github.com/my_username/AwesomeRepo.git (push)
```
Then you can simply do:<br>
`git fetch`<br>
`git checkout some_branch_name`

#### For repos with multiple remote:

If your local repo is having multiple remotes:
```
git remote -v
origin      https://github.com/raisedadead/wiki.git (fetch)
origin      https://github.com/raisedadead/wiki.git (push)
upstream    https://github.com/FreeCodeCamp/wiki.git (fetch)
upstream    https://github.com/FreeCodeCamp/wiki.git (push)
```
Then you have to specify a remote as well:<br>
`git fetch`<br>
`git checkout -b some_branch_name <remote>/some_branch_name`

where `<remote>` in this example is either `upstream` or `origin`.
