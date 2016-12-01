this is for yarn v0.17.9

if you install packages globally , you have to use sudo . and sudo should be avoided while installing packages. also you should have a separate directory for your global packages .

first install yarn using npm:
npm install -g yarn

now do
yarn global bin
if this returns /usr/bin , this will require sudo to install packages here . you can avoid this by changing the path.

now do:
`yarn config get prefix'
if this return '/usr'
do this:

mkdir ~/.yarn-global
this will make a hidden directory '.yarn-global' . press 'ctrl+h' to see this. now,

yarn config set prefix ~/.yarn-global
this will return /home/'username'/.yarn-global

now open your '.zshrc' or '.bashrc' using your terminal
you can type this in your terminal to open that:
subl .zshrc/.bashrc or gedit .zshrc/.bashrc

now add path of your global bin in your '.zshrc' or '.bashrc':

export PATH="$PATH:yarn global bin"

now save it and refresh it using:
source ~/.zshrc' now enteryarn global bin` in your terminal
this should return:
/home/'username'/.yarn-global/bin

now install package globally . For instance:
yarn global add jest
there will be a binary in your bin folder in .yarn-global and see it didn't ask for your permission using sudo :100:
now check it using:
'jest --version' and zsh and bash should return its version.
