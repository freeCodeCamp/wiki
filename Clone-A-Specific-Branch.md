#Clone a specific branch

There are many cases where we want to clone a particular branch. For those, we need to run the following command:

````
// E.g. git clone -b <branch_name> <remote_repo>
git clone -b wiki bugfixing
````


In the following, please note how a public key setup is required. If you don't have a public key already set, you can also clone by using this: 

```
// Example, with OpenCV 2.4 branch:
git clone -b 2.4 --single-branch https://github.com/Itseez/opencv.git opencv-2.4
```    
