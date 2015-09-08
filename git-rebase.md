`git rebase` is an extremely useful tool that is most commonly used to *squash* multiple commits into one. While useful in this scenario, this is not the only function that the `git rebase` command can perform. It in fact proves to be far more useful when used for the intended function that its name suggests: to essentially *rebase* a branch. Let me explain what I mean by that.

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

You're branch, in git terminology, is now a commit behind the `dev` branch. This means that you cannot simply merge the two branches: you must bring your `auth` branch up-to-date with the `dev` branch.

Git provides you with two methods to do this: the `merge` command and the `rebase` command. Let's look at the `merge` command first (so that I can snigger at its inadequacy when explaining the `rebase` command). 

Merging the `auth` branch with the `dev` branch, or the `dev` branch with the `master` branch is straightforward and does what you expect, but merging the other way around has its own idiosyncrasies that are not intuitive at first blush. I can babble about it, or I can show you another great diagram of what would happen if you merged the `dev` branch with the `auth` branch at this moment:

```
                                                  --- Commit 5 ----------- auth branch
                                                /               /
                                               --- Commit 4 -------------- dev branch 
                                             /
 --- Commit 1 ---- Commit 2 ---- Commit 3 -------------------------------- master branch
```

See what I did there? Look at the diagram for a second and try to understand what is happening here before you move on. You essentially made another commit to the `auth` branch with the commits in the `dev` branch included. But that's all right, right? After all, at the end of the day I wanted to bring my `auth` branch up-to-date with the `dev` branch, and now it *is* up-to-date? Yep. But let me show you a diagram to explicitly illustrate what the other diagram implies: Your `auth` branch now looks like this:

```
    --- Commit 5 ------- Commit 4 ------- auth branch
  /                /
------ Commit 4 --- --------------------- dev branch
```

See it now? You *copied* the commit over. If you were to merge to the `dev` branch now, it would look something like this:

```
    --- Commit 5 ------- Commit 4 -------------------------------------- auth branch
  /                /                  \
------- Commit 4 ----------------------- Commit 5 ---- Commit 4 -------- dev branch
```

You merged the same commit twice! This will of course have no repercussions for your code itself, but if you one fine day decide to look at your `git logs`, you will immediately realize how dirty your git history is, with some commits being made over and over. If you wanted to revert to a commit, it would be very difficult to decide which commit to revert to. But of course, git is smart and has a solution: `git rebase`, which as I mentioned before, essentially *rebases* your branch.

Here's the diagram of the repository before `git merge` made it all ugly:

```
                                                  --- Commit 5 --- auth branch
                                                /
                                               --- Commit 4 ------ dev branch 
                                             /
 --- Commit 1 ---- Commit 2 ---- Commit 3 ------------------------ master branch
```

Let's run `rebase` now:
```
git checkout auth
git rebase dev
```

The repo will now look like this:

```
                                                                 --- Commit 5 --- auth branch
                                                               /
                                               --- Commit 4 --------------------- dev branch 
                                             /
 --- Commit 1 ---- Commit 2 ---- Commit 3 --------------------------------------- master branch
```

Do you see what happened? Git essentially saved the commits in the `auth` branch, 'removed' it, and then created it again with the same commits *after* the commits in the `dev` branch. This means that `Commit 4` only exists in the `dev` branch and not the `auth` branch! And that is really all there is to it! This might seem a bit confusing at first, but try to understand the diagram. This is an extremely useful took.

Pro tip: if you contribute to the FCC codebase, or are planning to do it, always run this command before you make any changes in your local files and push them:

`git pull --rebase upstream staging` (thanks, @SaintPeter)

If you don't have `upstream` set up, then run this command before you run the above command (git will throw an error because it doesn't know what upstream is):
`git remote add upstream https://github.com/freecodecamp/freecodecamp.git`

Happy coding!