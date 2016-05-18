# Using `pip`

We had seen about how to use `import` statements to `import` various modules and to use them in our programs. Python itself comes with several built-in modules. But python community has more to offer.
> Its the modules that makes python so powerful!

Third party module has added so much more functionality to Python. Now we would learn how to install these modules so that we can use those in our programs.

The simplest way is to use `pip`

```
pip install <module_name>
```
If you have used `npm`, then you can think of it as *npm* of python :smiley:.

Last time, in [`import-statements`](#) wiki we used `requests` module as an example. As it is a third party module we have to install it separately after installing python.

Installing it would be as simple as ```pip install requests``` . You can even pass various arguments along with it. The one that you'll come across more often is `--upgrade`.
You can  upgrade a python module by :

```
pip install <module_name> --upgrade
```
 So for example to upgrade the requests module to its latest version would be as simple as `pip install requests --upgrade`.

 But before using `pip` you'd have to install it. Installing it is pretty simple. You can install it from [here](https://bootstrap.pypa.io/get-pip.py)

 There is one more alternative to `pip` i.e. [`easy_install`](https://bootstrap.pypa.io/ez_setup.py).

 Using `easy_install` is also simple. The syntax is :
```
easy_install <module_name>
```

But `pip` is more popular then `easy_install`.
