# Vagrant

## Installation

The following instruction will help you install the necessary software and also how to set up your first Vagrant and Virtual Box. This will create a working environment so you can test your web site on your local machine. The <b>Vagrantfile</b> can be configured to your specific environment so that anyone working with you can make and see changes no matter if they use Linux, Mac OS X, or Windows. Using this virtual environment, you will be able to see your PHP scripts run, build and work with your databases, and so much more. So, without further or do, let's get down to business. 


Check out the following links and install each program. Be sure that it matches your OS (Operating System).

[Virtual Box](https://www.virtualbox.org/)

[Vagrant](https://www.vagrantup.com/downloads.html)

[Git Bash, Gui, and Command](https://git-scm.com/downloads)

Now that we have the necessary programs installed, let’s get down to business.

<b>Git</b> has several different programs we can use here. Let’s open the <b>Git GUI</b>. We also can start up <b>Virtual Box</b> so that we can see the box running.

Once you run the <b>Git GUI</b>, you’ll see several options. Let’s select the top option, </b>“Create New Repository”</b>.

Select the <b>“Browse”</b> button and select the drive you want to install and run your virtual machine / server from. You can right click in the folder area and create a new folder. Let’s name it <b>FreeCodeCampMachine</b>.

Now, you’ll see the <b>Git Gui</b> and beside Directory, you should see <b>C:/FreeCodeCampMachine</b>.

At the bottom, select the button that says <b>“Create”</b>.

Now the interface looks different. Don’t worry about any of the buttons at the bottom or freak out about all the options at the top. We want to work on one thing. Select the option at the top left that says <b>“Repository”</b>, then under that option, you’ll find <b>“Git Bash”</b>. Select <b>Git Bash</b>.

Now we see we are in a terminal / console window. You should see the name of your computer followed by <b>MINGW64 /d/FreeCodeCampMachine (master)</b>. That simply says we are operating in the folder you created and you are on the <b>master</b> repository. Later we will create a branch but let’s worry about that later. 

Now, let’s throw some commands down and get the ball rolling. First type the following and hit Enter:
```
git clone https://github.com/scotch-io/scotch-box myProject
```

This will create a folder inside your directory named <b>“myProject”</b>. Next, let’s drill into that folder, so enter the following commands and hit enter:
```
cd myProject
```

Now we’re in the folder we want to be in. Now type the following on the command line and hit enter:
```
vagrant up
```

Now, let’s open a browser window and enter the following IP address:

```
http://192.168.33.10/
```

You should see a landing page for <b>Scotch Box</b> telling you everything that is there and installed. Now, when you dig through the file you created earlier, you’ll find one that says <b>“public”</b>. Inside that folder you’ll see a file named <b>“index.php”</b> and that’s what you see for the landing page. You can edit that file with a text editor, save it, and refresh your browser to see your changes. 


