# How to Rename a Local Branch

* If you're <b>on the branch</b> you want to rename:

    <code>git branch -m <b>new_name</b></code>

* If you're on a <b>different</b> branch:

    <code>git branch -m <b>old_name new_name</b></code>

## What is the difference between '-m' and '-M'
* `-m` stands for "move" (or `mv`), which is how you rename files. It can throw an error if the branch with the same name exists.
* But if you want to <b>force save</b> your branch, use '-M' instead.
