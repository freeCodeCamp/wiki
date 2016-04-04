# Translations Guide
## These are some guidelines for translating FreeCodeCamp to any language
Thank you so much for your interest in translating FreeCodeCamp. Reading this document is recommended for anyone who wishes to participate in this collective effort to bring FreeCodeCamp to more and more people all around the world.

## 1. Chat room


Please join the gitter channel [https://gitter.im/FreeCodeCamp/Translators]
and also join the channel for translators of your specific language 
(if it exists):

* Amharic [FreeCodeCamp/TranslationAmharic](https://gitter.im/FreeCodeCamp/TranslationAmharic)
* Arabic [FreeCodeCamp/TranslationArabic](https://gitter.im/FreeCodeCamp/TranslationArabic)
* Bangla: [FreeCodeCamp/TranslationBangla](https://gitter.im/FreeCodeCamp/TranslationBangla)
* Brazilian Portuguese: [FreeCodeCamp/BrazilianPortuguese](https://gitter.im/FreeCodeCamp/BrazilianPortuguese)
* Chinese (Simplified): [FreeCodeCamp/TranslationChinese](https://gitter.im/FreeCodeCamp/TranslationChinese)
* French [FreeCodeCamp/TranslationFrench](https://gitter.im/FreeCodeCamp/TranslationFrench)
* German [FreeCodeCamp/TranslationDeutsch](https://gitter.im/FreeCodeCamp/TranslationDeutsch)
* Hindi [FreeCodeCamp/TranslateHindi](https://gitter.im/FreeCodeCamp/TranslateHindi)
* Korean [StephenMayeux/koreantranslations](https://gitter.im/StephenMayeux/koreantranslations)
* Russian [FreeCodeCamp/TranslationRussian](https://gitter.im/FreeCodeCamp/TranslationRussian)
* Serbian [FreeCodeCamp/TranslateSerbian](https://gitter.im/FreeCodeCamp/TranslateSerbian)
* Spanish [AlexTrapp/FreeCodeCampEspa%C3%B1ol](https://gitter.im/AlexTrapp/FreeCodeCampEspa%C3%B1ol)
* Turkish [FreeCodeCamp/TranslateTurkish](https://gitter.im/FreeCodeCamp/TranslateTurkish)

If it doesn't exist please let us know in the 
[Translators channel](https://gitter.im/FreeCodeCamp/Translators), 
or create one yourself and share it at the  
[translators channel](https://gitter.im/FreeCodeCamp/Translators) 
and at other places to invite more translators and reviewers that speak your 
language.  

We suggest you to communicate there in that language, discuss the current status of the project and coordinate efforts. Help regarding the technical process should also be provided in the chat room. Many people want to collaborate, but get intimidated by the learning curve of Git. While it's not difficult to get started, it's always nice to have someone to help you if you get stuck. Many users go to the official translators chat room of FreeCodeCamp at [**`[FreeCodeCamp/Translators]`**](https://gitter.im/FreeCodeCamp/Translators) . You can go there to recruit new translators for your language every once in a while.

If you find it useful, you can translate these instructions to your language and adapt them for your translation team (see for example, [original in spanish.](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md))

## 2. Check the work of another translator

When a translator completes or advances a translation he/she should send a pull request, that must be reviewed by another peer.  Translators use to send a link to the pull request to the chat room of the translation asking for reviews.  If you see a message requesting reviewal of a translation, visit the pull request and find the tab "Files changed" right under the PR's title. There you will be able to see the changes in the translation in two columns, to the left you will see the original file and to the right the changes proposed.

If you want to suggest an improvement to the translation in one line, click on the + (plus sign) that appears next to the line number when you move the cursor over, in the dialog that pops up you can write your suggestion in the language of the translation.

## 3. Issues related with the translation

In the [issues section](https://github.com/FreeCodeCamp/FreeCodeCamp/issues) of FreeCodeCamp, the issues related to translations have the label Translation that simplifies finding them (i.e [FreeCodeCamp/labels/translation](https://github.com/FreeCodeCamp/FreeCodeCamp/issues?utf8=%E2%9C%93&q=is%3Aopen+label%3Atranslation)). 
There can be 2 kinds of requests related with the translation of the challenges:
- Some to start the translation of one of the files in the directory `seeds/challenges`. See for example: [Issue #4544] ([https://github.com/FreeCodeCamp/FreeCodeCamp/issues/4544](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/4544))   
- Other issues requesting to verify or to update an existing translation of one the files in directory `seeds/challenges`. For example: [https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6517](https://github.com/FreeCodeCamp/FreeCodeCamp/issues/6517) These could be reopened for example when there is a change in the English version of the challenge.

When you want to work on any of these, we invite you to write a comment like "Working on it," then you will have up to 15 days to send a pull request  with a translation or updating an existing one.

We invite you to check the directories and files in  [`seeds/challenges`.](https://github.com/FreeCodeCamp/FreeCodeCamp/tree/staging/seed/challenges)

If you don't find issues for your language, please create a GitHub issues for every file in the directory ```seeds/challenges```.  Include in the title
of your issue the target language, and the word Translation or Translate, as well as the descriptiont of the file that requires translation or updating. 
Take a look at these as an example: https://github.com/FreeCodeCamp/FreeCodeCamp/labels/translation

## 4. Technical procedure to create a translated file
- Install git in your computer and create an account in github.com.
- From your github.com account _fork_ the FreeCodeCamp repository ([https://github.com/FreeCodeCamp/FreeCodeCamp](https://github.com/FreeCodeCamp/FreeCodeCamp)). A directory for the forked repository should appear in your account.
- Clone your fork into your computer as in the following example (replace the word myaccount with your github account's name  [find some help here](https://help.github.com/articles/fork-a-repo/)):

  ```sh
  git clone --depth=1 https://github.com/myaccount/FreeCodeCamp.git
  cd FreeCodeCamp
  ```
- Be sure you add "_Working on it_" to an issue in GitHub as explained in previous section.
- In your forked repository, create a _branch_ with a name such as "add/LG-translation-XXX" where LG is the abbreviated name of the language you're working on, and XXX is the name of the file you're going to modify.  ([more help here.](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches))

  ```sh
  git checkout -b add/ES-translation-basic-javascript
  ```

- Find the JSON file in the `seeds/challenges` directory in your local copy. Find the challenge of your interest and modify it by adding the name of the challenge in `"titleLg"` and its description in `"descriptionLg"`, where "Lg" is the 2 letter code for the language. It's important to keep the proper syntax of the JSON file. You can verify this by installing `node.js` and passing the JSON file to the interpreter. For example: `node seeds/challenges/basic-javascript.json`. You will also be able to verify the syntax by copying and pasting the content of the file in [http://jsonlint.com](http://jsonlint.com). If you think that you can't continue for a while with the translation, you can leave a comment on the same issue, indicating that another person should continue. You can push your changes so far so the next person won't duplicate your hard work.
- When you're done, _commit_ your changes with a brief description in English (regardless of the language). Afterwards, _push_ the changes to your fork (see [the help](https://help.github.com/articles/pushing-to-a-remote/)):

  ```sh
  git commit -m "Challenges of Basic Javascript translated." seed/challenges/basic-javascript.json 
  git push origin add/ES-translation-basic-javascript
  ```

- Afterwards, from the webpage of your fork in github.com, make a _pull request_ to the branch called `staging` in the main repository (see the [help](https://help.github.com/articles/creating-a-pull-request/)). Add "Closes #yyyy" to the description area in the Pull request where `yyyy` is the issue no of the original issue that was created for the challenge translation. Doing this will automatically close the open issue when the Pull request is merged.  

Other translators will be able to see your changes and make comments, which you can discard, or use for making corrections and pushing them again. Be sure, to add some comments explaining the reason of your rejection or what changes you intend to accept. 

Take into account that this file has been created as we work on the translation itself, so many details have not been standardized yet. A final revision might be necessary in order to accommodate any changes made during the process. For this reason, if the comments you receive about your translation don't reflect a serious problem, you can ask in the comments section of the pull request for your changes to be merged, and make the necessary corrections later.

Another way to collaborate in the translation effort is by verifying the translations of other users and making comments in their pull requests.

## 5. General guidelines
- Try not to be too formal yet not too casual, just to keep things friendly.
- In order to make contents more understandable for native speakers of your target language (think of those who don't speak English), translate as much as you can, try to use a word in English only if it is already widely used in the countries where your target language is spoken.

## 6. Glosary
It is efficient if all the translators working on the same language create a glossary showing the translation of words in English employed in FreeCodeCamp's challenges. Sometimes there is more than one way of translating some terms, and regional differences might create confusion (for example, some terms might differ between Spanish from Spain and from Latin America, or between the French language employed in Canada and in France).  Be democratic! Choose the most appropriate translation by voting and keep a record of the results. 
For keeping record of voting and translations we recommend you to use this [application](https://fcc-dict.herokuapp.com/) developed by @justinian336.
Use the chat room for discussing the glossary, so no one will miss anything.

## 7. If you need some help with the Google Translator Toolkit
You may find help automating the translation process by employing the Google Translator Toolkit, please see: [Spanish guide](https://github.com/vtamara/fcc_trad)

## 8. Creating a test instance of FreeCodeCamp
Seeing the final product as you advance with the translation can help you to stay motivated. That's why it is a good idea to create a test instance of FreeCodeCamp where you can include the most recent changes of the translation of the language you're working on and use FreeCodeCamp including those changes. The following test instance was created for the Spanish version of FreeCodeCamp: [Map](https://defensor.info:3000/map) In order to create a test instance, go through the following steps:
1. Verify with the other translators of the same language you're working on if a test instance has been created before
2. Follow the instructions of [Contributing page](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) be sure you can see a running instance in English
3. Follow the changes shown in [this commit](https://github.com/FreeCodeCamp/FreeCodeCamp/commit/d36e33f3938ddd079931a5fb2bc5dc6db37667e5) but instead of `descriptionEs` and `nameEs` use the keys of your language (e.g `descriptonFr` and `nameFr`)

## 9. References
- [Documentation of the source code of FreeCodeCamp.](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
- [Pull Request Contribute](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
- [Help files for translating FreeCodeCamp's challenges and indications using Google Translator Toolkit.](https://github.com/vtamara/fcc_trad/blob/master/README.md)

--------------------------------------------------------------------------------

*This guide is based on [this writeup](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md).*
