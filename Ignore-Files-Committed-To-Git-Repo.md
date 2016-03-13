# Untrack files previously committed from new .gitignore

To untrack a <i>single</i> file, ie stop tracking the file but not delete it from the system use:

```git rm --cached filename```

To untrack <i>every</i> file in .gitignore:

<b>First commt any outstanding code changes</b>, and then run:

```git rm -r --cached```

This removes any changed files from the index(staging area), then run:

```git add .```

Commit it:

```git commit -m ".gitignore is now working"```

To undo ```git rm --cached filename```, use ```git add filename```
