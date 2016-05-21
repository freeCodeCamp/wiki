# Jazzing up the Terminal

Out of the box, the terminal shipped with Ubuntu is a bit bland. This section will let you become a power-user :muscle:.

## Tools:

#### Terminator

[Terminator](https://launchpad.net/terminator) lets you arrange multiple terminals in a grid-like interface.
To install Terminator enter `sudo apt-get install terminator` into the terminal.

Screenshot of Terminator:

![Screenshot of Terminator](https://2.bp.blogspot.com/-DYWH3IZubRI/TrmFBPxmyEI/AAAAAAAAAAA/nBGoP3U3ae4/s1600/terminator-mad.png)

#### Oh My ZSH!

Prerequisites:
- `git` should be installed

To install `ZSH` and `Oh My ZSH!` use the following commands:

```bash
sudo apt install zsh && chsh -s $(which zsh)
```

> Note: you will need to log out and in again to use ZSH instead of bash as your default shell.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Once you restart your terminal, `Oh My ZSH!` should be installed.

Checkout the [Official Documentation](https://github.com/robbyrussell/oh-my-zsh/wiki) to learn how to install plugins and themes.

#### Advanced Tutorials

- [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)
- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
- [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial)

:point_left: Previous | :book: Home :book: |  Next :point_right:
:---|:---:|---:
 [**Customising Ubuntu**](Ubuntu-Customising) | [**Table of Contents**](Setting-Up-Ubuntu-For-Programming) | [**Installing DevTools and modern web browsers**](Ubuntu-Installing-DevTools)
