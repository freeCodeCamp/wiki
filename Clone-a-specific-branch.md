<h1>Clone a specific branch</h1>

<p>There are many cases where we want to clone a particular branch. There we need to follow these commands: </p>
    git clone -b <branch_name> <remote_repo>    
  <p>Example</p>
  `git clone -b wiki bugfixing`   
<p>This will help to clone specific branch. Please note here public key setup is required. If you don't have public key setup then also you can clone by</p>
<p>Example, with OpenCV 2.4 branch:</p>
    git clone -b 2.4 --single-branch https://github.com/Itseez/opencv.git opencv-2.4    
    
  
