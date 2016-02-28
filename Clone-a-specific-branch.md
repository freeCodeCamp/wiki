<h1>Clone a specific branch</h1>
There are many cases where we want to clone a particular branch on oue loacal machine. For that we need to follow these methods:

git clone -b <branch_name> <remote_repo>
<p>This will help to clone specific branch. Please note here public key setup is required. If you don't have public key setup then also you can clone by</p>
<p>Example, with OpenCV 2.4 branch:</p>
git clone -b 2.4 --single-branch https://github.com/Itseez/opencv.git opencv-2.4
