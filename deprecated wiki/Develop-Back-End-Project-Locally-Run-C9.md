# Develop Back End Projects Locally and Run on C9

If you like me develop Back End Project locally and want it run on c9, this may help you.

1. Push your project to github
2. Create a new workspace in c9 and set 'Clone from Git or Mercurial URL (optional)' with your github repository URL. After submit your create page, c9 will clone your project for you.
3. Run in your c9 terminal window

  ```bash
  echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc
  ```

4. Run `bower install && sudo npm install`
5. Run `mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
6. Run `grunt serve` in another terminal window
