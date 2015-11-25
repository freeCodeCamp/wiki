---
title: Creating a new route
order: 5
---
	>> yo angular-fullstack:route newpage 
   Typing the above into your command-line will generate a **newpage/** route for your app! It automatically generates all the necessary files within your **/client/app/newpage** folder, like your **/client/app/main** folder, with a **newpage.controller.js**, **newpage.controller.spec.js**, **newpage.js**, and **newpage.html**. These all pretty much behave like the ones in the **main/** route. If you’re accessing the database in your newpage controller, you’ll want to add *$http* to the list of dependencies in **newpage.controller.js** the same way it’s included in **main.controller.js**: 

~~~javascript
angular.module('myApp')
  .controller('MainCtrl', function ($scope, $http) { ...
~~~

[PREVIOUS](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Frontend-file-structure)
[NEXT](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Creating-a-new-directive)