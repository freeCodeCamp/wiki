# How to Rename a Local Branch
- If you're **on the branch** you want to rename:

  ```bash
    git branch -m new_name
  ```

- If you're on a <b>different</b> branch:

  ```bash
    git branch -m old_name new_name
  ```

## What is the difference between '-m' and '-M'
- `-m` stands for "move" (or `mv`), which is how you rename files. It can throw an error if the branch with the same name exists.
- But if you want to **force save** your branch, use '-M' instead.