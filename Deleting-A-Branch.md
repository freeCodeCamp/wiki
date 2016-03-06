#Delete a Git branch both locally and remotely:

```
// locally ((if you know what you are doing!)
git branch -d localBranchName

// and then if you need to...
// on remote
git push origin :remoteBranchName
```

To delete a local branch

git branch -d the_local_branch
To remove a remote branch (if you know what you are doing!)

git push origin :the_remote_branch
Note

If you get the error `error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name'`
perhaps someone else has already deleted the branch. Try to synchronize your branch list using
```
git fetch -p 
```
The git manual says -p, --prune After fetching, remove any remote-tracking branches which no longer exist on the remote.
