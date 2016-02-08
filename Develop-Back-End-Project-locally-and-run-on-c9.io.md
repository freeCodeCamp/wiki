If you like me develop Back End Project locally and want it run on c9, this may help you.

1. push your project to github
2. create a new workspace in c9 and set 'Clone from Git or Mercurial URL (optional)' with your github repository URL. After submit your create page, c9 will clone your project for you.
3. run `echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc` in your c9 terminal window
4. run `bower install && sudo npm install`
5. run `mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
6. run `grunt serve` in another terminal window
