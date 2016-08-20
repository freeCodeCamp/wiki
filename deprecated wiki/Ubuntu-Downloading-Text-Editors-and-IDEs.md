# Downloading Text Editors and IDEs

We discuss popular Text Editors and IDEs and how to install them on Ubuntu.

## Popular choices:

### Text Editors

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

Download the latest Visual Studio Coder package: [Visual Studio](https://code.visualstudio.com/Docs/?dv=linux64_deb)

```bash
sudo dpkg -i vscode-amd64.deb
```

### IDEs

**Installing Eclipse:**

```bash
sudo apt-get install openjdk-7-jdk
```

Download the latest Eclipse package: [Eclipse](http://www.eclipse.org/downloads/?osType=linux)

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

Download the latest version of [**Intellij IDEA**](https://www.jetbrains.com/idea/download)

```bash
sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt
sudo tar -xvf idea-2016.1.1.tar.gz
```

:point_left: Previous | :book: Home :book: |  Next :point_right:
:---|:---:|---:
 [**Installing DevTools and modern web browsers**](Ubuntu-Installing-DevTools) | [**Table of Contents**](Setting-Up-Ubuntu-For-Programming) | [**Alternatives to popular Windows and Mac software**](Ubuntu-Software-Alternatives)
