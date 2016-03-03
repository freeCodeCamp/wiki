You may have noticed if you opened up **/client/app/admin/admin.controller.js** that it calls the *Auth* module like so:

~~~javascript
.controller('AdminCtrl', function ($scope, $http, Auth …
~~~
You can include Auth in your other controllers the same way. It’s pretty useful to have *Auth* available in your controller to detect if a user is logged in, or to get information about the current user. In the body of your controller you can add 

~~~javascript
$scope.getCurrentUser = Auth.getCurrentUser;
$scope.isLoggedIn = Auth.isLoggedIn;
~~~
And then you can use *isLoggedIn()* or *getCurrentUser()* in the HTML view for your controller!  

[PREVIOUS](More-useful-APIs)
[NEXT](Restrict-a-page-to-authenticated-users)