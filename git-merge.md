Let us say that you are working on an application that is similar to reddit, but specifically for code snippets. In such an application, you would likely have a `master` branch which contains all the released features, a `dev` branch which might contain features that have been coded, but not implemented yet. Every developer in the team will create his own branches off the `dev` branch for individual features. The repository structure would look something like this:
                               
```
                                  --- Commit 3 --------- dev branch 
                                /
 --- Commit 1 ---- Commit 2 ---------------------------- master branch
```

If you decided to merge the 3rd commit (`Commit 3`) into the `master` branch from the `dev` branch, then it would be as simple as running a `git merge` command because the `dev` branch is *up-to-date* with the `master` branch: all of the commits in the `master` branch exist in the `dev` branch. You can merge the branches by running the follow commands:
```
git checkout dev
git merge master
```
The result would be something like this:

```
                                               --------- dev branch 
                                             /
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch
```

Now you decide to work on the authentication feature. To work on the authentication feature, you create another branch based on the `dev` branch and decide to call it `auth`. This is what the repo structure looks like:

```
                                                  ------ auth branch
                                                /
                                               --------- dev branch 
                                             /
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------- master branch
```

If you were to commit any changes to the `auth` branch, merging them with the `dev` branch would be trivial because it is up-to-date with the `dev` branch. Now while you were working away on the authentication feature, one of the developers finished coding the syntax-highlighting feature, and decided to merge it with the `dev` branch. The repo looks like this now:

```
                                                  --- Commit 5 --- auth branch
                                                /
                                               --- Commit 4 ------ dev branch 
                                             /
 --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch
```

You're branch, in git terminology, is now a commit behind the `dev` branch. This means that you cannot simply merge the two branches: you must bring your `auth` branch up-to-date with the `dev` branch. This can be done with `git merge`!
