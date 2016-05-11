I was so happy. Took me more than 10 days to finish my voting app, my first web app project at Free Code Camp. I was ready to deploy to heroku and...

![](http://i.imgur.com/fY2be3a.jpg)

After some search at Google I found OpenShift. Then I went to Quincy Larson to know if was any problem to deploy to OpenShift instead of Heroku, he said it was Ok and ask me if I could document the process, and here it is...

# Requirements
- An account in [OpenShift](https://www.openshift.com/app/account/new)
- Our app in a Git Repository

###### Changes in your code
- ```app.listen``` with ```process.env.OPENSHIFT_NODEJS_PORT``` and ```process.env.OPENSHIFT_NODEJS_IP```, both requires.
- In your **package.json** set your ```"main": 'yourMainFile.js``` and ```"script": { "start": "node yourMainFile.js" }```

###### Deploying our app
- [Add a new application](https://openshift.redhat.com/app/console/application_types)

![](http://i.imgur.com/9k9rj8l.jpg)

- Choose a name (second input will be same for all you apps)

![](http://i.imgur.com/gzMcQ3m.jpg)

- Fill our Git URL and our branch name

![](http://i.imgur.com/w4n0lNl.jpg)
![](http://i.imgur.com/Ec7lX3f.jpg)

- "Create Application". It will take some time

![](http://i.imgur.com/ddcWa4r.jpg)

- Enter to "Application", then into your App and check it's started.

![](http://i.imgur.com/ALzAaXp.jpg)
![](http://i.imgur.com/uTedlZP.jpg)

###### Enviroment variables

In my case I have my database in mLab, so I need to create some enviroment variables.

- [Install Ruby and rhc.](https://developers.openshift.com/getting-started/windows.html#client-tools)

**rhc** only work with some versions of Ruby, 1.9.3 and 2.0.0.

- [Setting up Your Machine](https://developers.openshift.com/getting-started/windows.html#rhc-setup)
 
If you have some trouble with ```rhc setup``` read [this](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import).

- [Custom Environment Variables](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

```rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name```. You need to restart your app to load the variables.

Maybe there is a better or easiest way to do it, but this is how it works for me. You can check the app working at http://voting-pitazo.rhcloud.com/#/polls
