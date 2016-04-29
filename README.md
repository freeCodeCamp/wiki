# Welcome to the Free Code Camp Wiki!

Our open source community's Wiki focuses on answering your questions about learning to code and getting a coding job. We also cover in detail our:

- Curriculum
- Local Campsite Communities
- Nonprofit Projects

## Get a Fork ready

1. Fork it: You can get your own fork by using the button or clicking [this](https://github.com/FreeCodeCamp/wiki/new/master?readme=1#fork-destination-box).
2. Once you get a fork, you will clone it with:

  ```sh
  git clone https://github.com/YOUR-USERNAME/wiki.git
  ```

3. Add the remote: You will need a way to keep your fork syncronized with the original. using remotes is the right way.

  ```sh
  git remote -v
  origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
  origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

  This means there is not remote pointing to the original one so you would add it with :

  ```sh
  git remote add upstream https://github.com/FreeCodeCamp/wiki.git
  ```

  You can verify the changes with `git remote -v`

  ```sh
  git remote -v
  origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
  origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
  upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

4. Sync the fork when needed: After some other PR have been merged you will need to pull those.

  ```sh
  git fetch upstream
  git checkout master
  git rebase upsstream/master
  git push
  ```

5. Once that is done, you can start contributing by checking our [issues](https://github.com/FreeCodeCamp/wiki/issues) and creating nee pull requests.

## Contribution Guides

We currently have a couple of guides to help you contribute, via the browser, command line or desktop application. You can find this and much more guides and information on the [Wiki Central Page](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Wiki).