# Squashing Multiple Commits Into One

This is an awesome feature of `rebase` that can be used in the `interactive` mode. To squash the last _n_ commits into one, run the following command:

```
git rebase -i HEAD~n
```

That will open up a text-editor with something similar to the following:

```
pick commit_1
pick commit_2
pick commit_3
...
pick commit_n
# Bunch of comments
```

Leave the first commit alone, and change the rest of the `pick`s to `squash`. Save and exit the editor.

If you've already pushed to a remote before squashing your commits, you'll have to push to the remote again, with the `-f` flag, otherwise git will throw an error at you.

It is strongly suggested that you read the information in the opened file as there are many things you can do.
