# Welcome to the Free Code Camp Wiki!

Our open source community's Wiki focuses on answering your questions about learning to code and getting a coding job. We also cover in detail our:

- Curriculum
- Local Campsite Communities
- Nonprofit Projects

## Get a Fork ready

1. Fork it: You can get your own fork of our wiki by using the button or clicking [this](https://github.com/FreeCodeCamp/wiki/new/master?readme=1#fork-destination-box).

  ![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)

2. Once you have forked the repository, you will clone it with:

  ```sh
  $ git clone https://github.com/YOUR-USERNAME/wiki.git
  ```

  This will make a local copy on your machine.

3. Add the remote: You will need a way to keep your fork synchronized with the original repository. The following command will show you **verbose** list of the current remotes you have.

  ```sh
  $ git remote -v
  origin  https://github.com/YOUR_USERNAME/wiki.git (fetch)
  origin  https://github.com/YOUR_USERNAME/wiki.git (push)
  ```

  This means there is no remote pointing to the original repository you forked from. You would add it with:

  ```sh
  $ git remote add upstream https://github.com/FreeCodeCamp/wiki.git
  ```

  This will create a new remote named **upstream**. You can verify the changes with `git remote -v`

  ```sh
  $ git remote -v
  origin    https://github.com/YOUR_USERNAME/wiki.git (fetch)
  origin    https://github.com/YOUR_USERNAME/wiki.git (push)
  upstream  https://github.com/FreeCodeCamp/wiki.git (fetch)
  upstream  https://github.com/FreeCodeCamp/wiki.git (push)
  ```

4. Sync the fork when needed: After another PR has been merged, you will need to fetch the changes and rebase your work.

  ```sh
  # fetch all remote repos and delete any deleted remote branches
  $ git fetch --all --prune

  # switch to `master` branch
  $ git checkout master

  # reset local `master` branch to match `upstream` repo `master` branch
  $ git reset --hard upstream/master

  # push changes to your forked wiki repo
  $ git push origin master
  ```

5. Once you have completed these steps, you can start contributing by checking our [issues](https://github.com/FreeCodeCamp/wiki/issues) and creating new pull requests.

## Contribution Guides

We currently have a couple of guides to help you contribute, via the browser, command line or desktop application. You can find this and many more guides and information on the [Wiki Central Page](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Wiki).
