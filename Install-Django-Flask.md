# Setting Up Python Web-framework: Django and Flask

[Previous](Web-Development-in-Python)

[Home](Python)


In this article, we shall be discussing how to install [Django](https://www.djangoproject.com/) and [Flask](http://flask.pocoo.org/) - two popular web frameworks written in Python.

Perhaps you are already familiar with the widespread usage and community support for Python; in web-development. You might as well be aware as to what a web framework is; and the options available for Python.

In case these assumptions are untrue, you might want to take a look at this [wiki article](Web-Development-in-Python). If you are all caught up, let's go ahread with setting up Python web frameworks in your local development machine.

But it would be unfair if we completely ignore the [Python 2 vs Python 3](http://docs.python-guide.org/en/latest/starting/which-python/#the-state-of-python-2-vs-3) debate.

### Python 2 vs. Python 3

No, we wouldn't be taking a side in the debate. If you are interested in knowing more about it for academic purposes, perhaps [this](https://wiki.python.org/moin/Python2orPython3) would intrigue you.

But; we cannot also be ignorant of the fact that there are two major flavors of Python out there. Why do we care, you ask? Well, because code written adhering to one style; would simply result in syntax error in interpreter of other flavor of Python.

The following is a valid `print` statement in Python 2, but would not work on Python 3 - 

```python
print "Hello World"
```
In Python 3, this would throw an error somewhat like this:

```python
>>> print "hello"
  File "<stdin>", line 1
    print "hello"
                ^
SyntaxError: Missing parentheses in call to 'print'
```

We won't be diverted in our discussion any further trying to document all these differences - but [this](http://spartanideas.msu.edu/2014/06/01/the-key-differences-between-python-2-7-x-and-python-3-x-with-examples/) might of interest to you, if you are into it.

Both Python 2 and Python 3 are cool. Most Linux and OSX distributions come pre-installed with Python 2 as the default Python. And Python 3 was born out of the insatiable quest of more readable, more beautiful language construct.

So, the only question you need to concern yourself with right now; is which one you should pick. Yes, it takes time to even get familiar with most common aspects with either Python; and your time is important. So, invest your time and effort wisely!

If you are new to Python; you should pick Python 3. While Python 2 is well-supported and popular; most common libraries and frameworks in Python prefer Python 3. Django officially [recommends](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) Python 3. Flask and all its dependencies are also [supported](http://flask.pocoo.org/docs/0.10/python3/#python3-support) on Python 3.

This article would use Python 3 to set up the web-frameworks in your development environment. But before that, let's ensure we have Python 3 and we know how to use it!

### Installing and Using Python 3

You can download Python from this official [link](https://www.python.org/downloads/). Based on your OS (Windows or Linux or OSX), you might want to install Python 3 following [these instructions](http://docs.python-guide.org/en/latest/starting/installation/).

It is always a great idea to [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) your Python installation; and keeping it separate from your _System Python_. The _System Python_ is the path to Python interpreter, which is used by other modules installed along with your OS.

It's **not safe** to install Python Web-frameworks or libraries directly using _System Python_. Instead, you can use [Virtualenv](https://virtualenv.readthedocs.org/en/latest/) to create and spawn a separate Python process when you are developing Python applications. 

The [Virtualenvwrapper module](https://virtualenvwrapper.readthedocs.org/en/latest/) makes it easy for you to manage and sandbox multiple Python sandboxed environments in one machine; without corrupting any modules or services written in Python and used by your machine.

Of course, most cloud hosted development environment such as [Nitrous](https://www.nitrous.io/) or [Cloud9](https://c9.io/) also comes with these pre-installed and ready for you to get coding! You can quickly pick a box from your dashboard, and start coding after activating a Python 3 environment.

In [Cloud9](https://c9.io/), you need to select the Django box while creating a new development environment. 

A few shell command examples would follow. If you wish to copy-paste, do note that the `$` sign is a shorthand for the terminal prompt, it's not part of the command. My terminal prompt looks something like this:

```bash
alayek:~/workspace (master) $
```

And, an `ls` would look like

```bash
alayek:~/workspace (master) $ ls
```

But, while writing the same in this documentation, I would be writing it as 

```bash
$ ls
```

Getting back to our discussion, you can create a Python 3 interpreter-included sandbox on Cloud9 by running on your cloud terminal:

```sh
$ mkvirtualenv py3 --python=/usr/bin/python3
```

You have to run it only once after creating a new box for your project. Once executed, this command would create a new sandboxed virtualenv ready for you to use, named `py3`.

To view available virtual environments, you can use 

```sh
$ workon
```

To activate `py3`, you can use the `workon` command with the name of the environment:

```sh
$ workon py3
```

All three terminal commands above would also work on local Linux machines or OSX machines. These are [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/#introduction) commands; so if you are planning on using them, make sure you have this module installed and added to `PATH` variable.

If you are inside a virtual environment; you can easily find that out by checking your terminal prompt. The environment name would be clearly shown in your terminal prompt.

For instance, when I am inside the `py3` environment; I would be seeing this as my terminal prompt:

```bash
(py3)alayek:~/workspace (master) $
```

Notice the `(py3)` in braces! If for some reason, you are not seeing this, even if you are inside a virtual env; you can try doing one of the things [mentioned here](http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv).


To get out of a virtual environment; or to deactivate one - use the command

```bash
$ deactivate
```

Again, this works only with virtualenvwrapper module.

### Installing Django in Virtual Environment

[Django](https://www.djangoproject.com) is an opinionated framework that helps you become productive. For instance, the file structure when you create a Django project. But, if you wish to explore the field of web development in Python in detail; perhaps [Flask](http://flask.pocoo.org/) is more up your alley. Feel free to skip this part of the article, and jump directly to the [Flask Installation help](#installing-flask-in-virtual-environment)

As of this writing, current Django version was Django 1.9.2. But when you are reading this, right now, it could be higher.

The official installation guide is available [here](https://docs.djangoproject.com/en/1.9/intro/install/#install-django). You should install the latest stable and official release; and **not** the latest development version (unless you know what you are doing and you like to live dangerously!)

But before you start installing, make sure you are inside an **activated** virtual environment; where running the following command in terminal would look like this:

```sh
$ python --version
Python 3.5.1
```

It might not be `3.5.1` for you. It could very well be `3.4.3`. But that is ok, just as long as it does not show it as `2.7.9` or something else that starts with `2`.

Once you have ensured you are in an activated virtual environment, and `python` command points to a Python of version 3; you are ready to install Django. Just follow the official [installation guide](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release) and install it with `pip`, the Python package manager.

Once installed; it would be a great idea to check what all did `pip` install; by executing the following command:

```sh
$ pip freeze
```

This would output a list of modules installed with current Python; and you should see Django with proper version (something like `Django==1.9.2` in the list.

If you wish to use Windows, the above discussion is not applicable to you. Perhaps you only have access to a Windows machine, and for some personal reasons, you would prefer not working on a browser-based Linux box on the cloud (slow connection, perhaps?).

You might be able to follow this [tutorial](https://docs.djangoproject.com/en/1.9/howto/windows/) and set up Django with Python 3 in your Windows machine.

Or, you can use [Virtualbox](https://www.virtualbox.org/) with a [Vagrant](https://www.vagrantup.com/) box for Django development directly in your machine!

### Installing Flask in Virtual Environment

If you wish to use Flask, you are in the right place! But install Flask, only because you want to explore web development in Flask. We would always recommend Django over Flask, because it gets difficult to build large web-applications in Flask; if you are new to web development in Python.

Flask is a micro-framework; and you can pick the functionality you wish to have over the basic barebone functionality you already have from a standard web-framework. But if you don't wish to do all the hassle and focus on building your idea; perhaps [Django](installing-django-in-virtual-environment) would be a better company for the road ahead.

I am going to assume you have **not** skipped the section on [installing Python 3 and using it inside a virtual environment](#installing-and-using-python-3)

First make sure that you are not inside a virtual environment already. Then create a new virtual environment, named `py3-flask`

```sh
$ mkvirtualenv py3-flask --python=/usr/bin/python3
```
Now, execute the `workon` command to see a list of virtual environments in your machine. This should list `py3-flask` in a line.

After this, activate this environment:

```sh
$ workon py3-flask
```

Your virtual environment would be activated with a copy of Python interpreter, with Python 3 properties. You should run 

```
$ python --version
```

to ensure that you are indeed inside a Python 3 environment.

Just to be clear, if you have already installed Django following the previous section - it should **not** be in this environment. We are using virtual environment; to keep our installation of different frameworks separated.

To be sure, run 

```
pip freeze
```

Make sure Django is not listed in the output list generated by above command.

Now, let's install Flask. For your peruse, here's the [official installation guide](http://flask.pocoo.org/docs/0.10/installation/). However, a lot of developers prefer installing some extra packages with Flask; for more functionality.

To install just Flask, exeute

```
$ pip install flask
```

When you run `pip freeze` again, it should show you `Flask` in listed packages.

It is cumbersome running long commands like this. Fortunately, there is something like `package.json` in Python domain as well - a list of dependencies, which the package manager can use to duplicate the environment by downloading them with proper version from central repo.

The standard is to use `pip freeze` and log the output to a local file, which can be source controlled.

```sh
$ pip freeze > requirements.txt
```

Here's the content of `requirements.txt` from my environment, after installing those Flask packages. You may add or remove more packages as your application grows; but for now, just copy paste the content of the following in a text file in the same directory as you are in.

```
Babel==2.2.0
Flask==0.10.1
Flask-Babel==0.9
Flask-Login==0.3.2
Flask-Mail==0.9.1
Flask-OpenID==1.2.5
Flask-SQLAlchemy==2.1
Flask-WTF==0.12
Flask-WhooshAlchemy==0.56
Jinja2==2.8
MarkupSafe==0.23
SQLAlchemy==1.0.12
Tempita==0.5.2
WTForms==2.1
Werkzeug==0.11.4
Whoosh==2.7.2
blinker==1.4
coverage==4.0.3
decorator==4.0.9
defusedxml==0.4.1
flipflop==1.0
guess-language==0.2
itsdangerous==0.24
pbr==1.8.1
python3-openid==3.0.9
pytz==2015.7
six==1.10.0
speaklater==1.3
sqlalchemy-migrate==0.10.0
sqlparse==0.1.18
```

This list of packages are taken from [here](http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world).

Once you have saved the file, just run

```
$ pip install -r requirements.txt
```

The package manager would take care of installing missing packages for you! And you should commit this file with your source control system.

The above set of commands assume that you have a Linux machine or Mac OSX machine; or you are using a cloud-hosted box on cloud9 or Nitrous; or maybe you are using a Vagrant box.

But, if you have to use a Windows machine, do consider using Windows Powershell, instead of Windows CMD. Most of the commands would be same. In case you need any assistance, you might want to check [this Stack Overflow discussion](http://stackoverflow.com/questions/17917254/how-to-install-flask-on-windows).

### Wrapping Up

We have successfully installed the web-framework of our need. However, it's not yet complete. Most web applications are content and data driven - so we need a data storage. Or, a Database, if you will.

In next article, we would be discussing how to install PostgreSQL and use it with our Python web application.

A point to ponder - we have been using `pip` heavily, but we have barely said anything about it. Well, for now, it's just a package manager like `npm`. It has some differences with `npm`; but, you don't need to worry about that now. If you are interested, do check out the [official `pip` documentation](http://pip-python3.readthedocs.org/en/latest/index.html).

_If you have suggestions or questions, come join us on [gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp)_.
