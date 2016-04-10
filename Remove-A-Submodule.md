Removing a submodule is useful when it is no longer required. The steps below outline the removal of a submodule.

#### To remove a submodule follow the steps below:

1. Delete the section referring to the submodule from the ```.gitmodules``` file

2. Stage the changes via ```git add .gitmodules```

3. Delete the relevant section of the submodule from ```.git/config```.

4. Run ```git rm --cached path_to_submodule``` (no trailing slash)

5. Run ```rm -rf .git/modules/path_to_submodule```

6. Commit the changes with ```git commit -m "Removed submodule <name>"

7. Delete the now untracked submodule files ```rm -rf path_to_submodule```

Information sourced from:

http://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule
https://git.wiki.kernel.org/index.php/GitSubmoduleTutorial#Removal
