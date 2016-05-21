# Start Translating

When you want to work on any of the translations, we encourage you to leave a comment like `"Working on it"` on the [open/ongoing translation issues](https://github.com/FreeCodeCamp/FreeCodeCamp/issues?q=is%3Aissue+is%3Aopen+label%3Atranslation). This will notify contributors about your interest in translating that part of the curriculum.

## Steps:

- Check the technical steps in this guide for doing translations.

- After this you will have up to 15 days to create a [Pull Request](FreeCodeCamp-Guide-Pull-Request) with the proposed translation or updating an existing one.

- We invite you to check the directories and files in  [`seeds/challenges`](https://github.com/FreeCodeCamp/FreeCodeCamp/tree/staging/seed/challenges) for doing translations.

> _Pro Tip : Remember to discuss your progress in chat rooms. Being active in the chat, reflects that you are working on it!_

### Technical procedure to create a translated file

 1. [Install Git](https://www.git-scm.com/) on your computer and [create an account on GitHub](https://github.com/join) if you don't already have one.

 2. From your GitHub account [_fork_](https://help.github.com/articles/fork-a-repo) FreeCodeCamp's repository ([https://github.com/FreeCodeCamp/FreeCodeCamp](https://github.com/FreeCodeCamp/FreeCodeCamp)). That's it! Now, you have a _fork_ of the original repo under your account.

 ![Forking Free Code Camp's Repository](./images/Translations-Guide/Forking-FreeCodeCamp.gif)

 3. Launch the terminal and clone a local copy of your fork to your computer (replacing the word `USERNAME` with your github account's username):

 ```sh
 git clone --depth=1 https://github.com/USERNAME/FreeCodeCamp.git
 cd FreeCodeCamp
 ```

 4. On GitHub, go to the [_Issues_ Section](https://github.com/FreeCodeCamp/FreeCodeCamp/issues) of the FreeCodeCamp repository and look for the [open translation issues](https://github.com/FreeCodeCamp/FreeCodeCamp/issues?q=is%3Aissue+is%3Aopen+label%3Atranslation). Leave a comment similar to `"Working on it"` if no one else appears to be already working on it (or has been inactive for over 2 weeks).

 ![Leaving a comment on a translation issue](./images/Translations-Guide/ScreenShot_IssueCommenting.gif)

 5. In your forked repository, create a _branch_ with a name such as `"translate/Lg-translation-XXX-YYY"` where `Lg` is the abbreviated name of the language you're working on, and `XXX-YYY` is the name of the file you're going to modify.

 ```sh
 git checkout -b translate/Es-translation-basic-javascript
 ```

 In the example above `Es` is the language code for Español (Spanish) and `basic-javascript` is the name of the JSON file that is to be translated. Refer the list of [Two letter codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for your language, for clarification.

 6. Find the `JSON` file in the `seeds/challenges` directory for the challenge you want to translate. Modify the JSON by adding the name of the challenge in `"titleLg"` and its description in `"descriptionLg"`, where `"Lg"` is the language of your choice (explained above).

 ![Modifying Challenge JSON](./images/Translations-Guide/Editing_JSON.gif)

 You can verify the JSON syntax by copying and pasting the contents of the file into [http://jsonlint.com](http://jsonlint.com).

 7. When you're done, _commit_ your changes with a brief description in English (regardless of the language). Afterwards, you can _push_ the changes to your fork:

 ```sh
 git commit -m "Challenges of Basic Javascript translated into Spanish" seed/challenges/basic-javascript.json
 git push origin add/Es-translation-basic-javascript
 ```

If you think that you can't continue for a while with a translation, you can leave a comment on the same issue, indicating that another person should continue. You can push your incomplete changes so the next person won't duplicate your hard work.

[**Back to Translations Guide**](Translation-Guide)
