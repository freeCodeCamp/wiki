# Writing a Markdown File for GitHub using Atom

Markdown is a way to style text on the web, and GitHub users make use of markdown to provide documentation for their repositories.

From [GitHub guides](https://guides.github.com/features/mastering-markdown/):

<>You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

>You can use Markdown most places around GitHub:

> - Gists
> - Comments in Issues and Pull Requests
> - Files with the .md or .markdown extension

>Markdown files have the extension `.md` and you'll see that a vast number of GitHub repositories have `README.md` files.

A great example is that if you want to write a Wiki file for this repository, it'll need to be a `.md` file. What you're reading right now is a markdown file called `writing-a-markdown-file-using-atom.md`.

Markdown files are easy to write, and you can find a markdown cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

---
## Creating a readme file on GitHub

You can compose a README.md file on GitHub itself:

[IMAGE]

This gives you the capability to switch between 'Edit new file' and 'Preview' views:

[IMAGE]

This is ideal if your readme file is small, and you don't mind switching between the two views.

But what if your `.md` file is not a readme, and you want the luxury of working in a text editor and a live preview of what your text looks like at the same time as you edit it?

---
## Writing Markdown files with Atom

If you're writing a long or detailed markdown file, it helps to get a live preview of exactly what your markdown looks like, in the same way that you might use live reload capabilities to update your browser if you're working on a project that uses HTML and CSS, for example.

A good way to go about creating a markdown file uses the [Atom text editor](https://atom.io/). You can install and use Atom for free.

Atom, like other text editors, makes use of packages, which are pieces of code that allow you to customise your workflow.

1. **Firstly, you'll want to install the Atom text editor from [here](https://atom.io/).**

2. **When Atom is installed, open it, and open a new file with a `.md` extension.**

3. **To see your live preview, right click your `.md` file from the explorer on the left, and then select the top option, 'Markdown Preview':**

  [IMAGE]

  Cool! You should now see two panes in Atom. On the left is your text, and on the right is your 'compiled' markdown, ie what it might look like on GitHub:

  [IMAGE]

  Notice that Atom also recognises what you are working with to be a specific format, ie 'GitHub Markdown':

  [IMAGE]

4. **When your markdown file is ready to commit to your GitHub repository, you can go ahead and commit it!**

  For contributing to the FreeCodeCamp wiki, go to [this page](https://github.com/FreeCodeCamp/freecodecamp/wiki) and check out the 'Guides on how to Contribute' section.

  For adding a project or files to GitHub, go to [this page](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

**Bonus step:** Atom has a package named 'Markdown Preview Plus'. It does the same as the normal markdown previewer, but the preview file is styled more accurately to the GitHub style. Go ahead and install this package and see what you get!

Author: [alanbuchanan](https://github.com/alanbuchanan/)
