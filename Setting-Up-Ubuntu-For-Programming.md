# Setting up Ubuntu for Web Development

> Note: We will be referring to Ubuntu 16.04 LTS (Xenial Xerus) in this article.

[1. Download and Install Ubuntu Desktop](#download-and-install-ubuntu-desktop)

[2. Customising Ubuntu](#customising-ubuntu)

[3. Jazzing up the Terminal](#jazzing-up-the-terminal)

[4. Installing DevTools and modern web browsers](#installing-devtools-and-modern-web-browsers)

[5. Downloading Text Editors and IDEs](#downloading-text-editors-and-ides)

[6. Alternatives to popular Windows and Mac software](#alternatives-to-popular-windows-and-mac-software)

## Download and Install Ubuntu Desktop

You can download the latest version of Ubuntu Desktop [here](http://www.ubuntu.com/download/desktop).
If you need any help with installing the operating system [this](http://www.ubuntu.com/download/desktop/install-ubuntu-desktop) tutorial by Ubuntu will help you out. If you want to dual boot your computer with Windows and Ubuntu checkout [this](https://help.ubuntu.com/community/WindowsDualBoot) helpful article.

Once Ubuntu is installed, open the terminal and type `sudo apt update && sudo apt upgrade` to update your packages.

## Customising Ubuntu

#### Removing Bloatware

To remove all pre-installed bloatware because of privacy concerns or to keep your operating system minimal, checkout [this](https://gist.github.com/ansell/61313400e26cd42289f8) gist.

#### Aliases

You can create a temporary alias like this:
```bash
alias alias_name="command_to_run"
```
However, when you close your shell session, this alias will cease to exist.

To create a permanent alias you will need to create the `~/.bash_aliases` file using the command `touch ~/.bash_aliases`. Once you've opened this file with your text editor of choice, add a line at the bottom of the document, similar to the example above.

To find out more, DigitalOcean has a great tutorial that can be found [here](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions).

#### Unity Tweak Tool

The Unity Tweak Tool provides users with tons of configuration options for tweaking the Unity Desktop.

To install the Unity Tweak Tool type `sudo apt install unity-tweak-tool`, and to launch it, `unity-tweak-tool`.

[Here](http://www.techrepublic.com/blog/linux-and-open-source/six-must-have-ubuntu-unity-tweaks/) is a list of the six must-have Ubuntu Unity Tweaks.

## Jazzing up the Terminal

Out of the box, the terminal shipped with Ubuntu is a bit bland. This section will let you become a power-user :muscle:.

#### Terminator

[Terminator](https://launchpad.net/terminator) lets you arrange multiple terminals in a grid-like interface.
To install Terminator enter `sudo apt-get install terminator` into the terminal.

Screenshot of Terminator:

![Screenshot of Terminator](http://2.bp.blogspot.com/-DYWH3IZubRI/TrmFBPxmyEI/AAAAAAAAAAA/nBGoP3U3ae4/s1600/terminator-mad.png)

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

## Installing DevTools and modern web browsers

#### Git
```bash
sudo apt-get install git
```

#### Node JS
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
nvm install stable
```

#### Ruby
```bash
curl -sSL https://get.rvm.io | bash -s stable
rvm install 2.3.1
```

#### Python
`Python 2` and `Python 3` come pre-installed on Ubuntu Desktop.

#### Modern Web Browsers

The most popular web browsers used by developers are [Chrome](https://www.google.com/chrome/)/[Chromium](https://www.chromium.org/) and [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/).

**Installing Chromium:**
```bash
sudo apt-get install chromium-browser
```

**Installing Firefox Developer Edition:**
```bash
sudo add-apt-repository ppa:ubuntu-mozilla-daily/firefox-aurora
sudo apt-get update
sudo apt-get install firefox
```

## Downloading Text Editors and IDEs

#### Text Editors

**Installing Atom:**
```bash
sudo add-apt-repository ppa:webupd8team/atom
sudo apt-get update
sudo apt-get install atom
```

**Installing Sublime Text 3:**
```bash
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text-installer
```

**Installing Visual Studio Code:**

Download the latest Visual Studio Coder package: https://code.visualstudio.com/Docs/?dv=linux64_deb

```bash
sudo dpkg -i vscode-amd64.deb
```

#### IDEs

**Installing Eclipse:**

```bash
sudo apt-get install openjdk-7-jdk
```

Download the latest Eclipse package: http://www.eclipse.org/downloads/?osType=linux

```bash
sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt
sudo tar -xvf eclipse-inst-linux64.tar.gz
```

Create a new file called `eclipse.desktop` in the `/usr/share/applications/` directory and add the lines below:

```
[Desktop Entry]
Name=Eclipse 
Type=Application
Exec=/opt/eclipse/eclipse
Terminal=false
Icon=/opt/eclipse/icon.xpm
Comment=Integrated Development Environment
NoDisplay=false
Categories=Development;IDE
Name[en]=eclipse.desktop
```

You can now drag this file to the launcher, enabling you to start Eclipse.

**Installing Intellij IDEA:**

Download the latest version of Intellij IDEA: https://www.jetbrains.com/idea/download/#section=linux

```bash
sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt
sudo tar -xvf idea-2016.1.1.tar.gz
```

## Alternatives to popular Windows and Mac software
> Feel free to add software to this list in the form of a Pull Request.

http://alternativeto.net/ is a very helpful site for finding alternatives to software.

#### [Adobe Photoshop](http://www.adobe.com/products/photoshop)

_Description:_ Photoshop is Adobe's photo editing, image creation and graphic design software. Photoshop is very helpful for creating wireframes and mockups of websites.

_Alternatives:_
- [GIMP](https://www.gimp.org/)
- [Inkscape](https://inkscape.org)