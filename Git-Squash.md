# Squashing Multiple Commits Into One

This is an awesome feature of `rebase` that can be used in the `interactive` mode. To squash the last _n_ commits into one, run the following command:

```sh
git rebase -i HEAD~n
```

That will open up a text-editor with something similar to the following:

```text
pick commit_1
pick commit_2
pick commit_3
...
pick commit_n

# Rebase hash1..hashn onto hash1 (n command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Leave the first commit alone, and change the rest of the `pick`s to `squash`. Save and exit the editor.

If you've already pushed to a remote before squashing your commits, you'll have to push to the remote again, with the `-f` flag, otherwise git will throw an error at you.

It is strongly suggested that you read the information in the opened file as there are many things you can do.
