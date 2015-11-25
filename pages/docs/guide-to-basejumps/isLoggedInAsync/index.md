---
title: isLoggedInAsync()
order: 5
---
Let's say you have a public page, but if the user is logged in you want to show special information to them. You'll need to detect if a user is logged in before you make an *$http* call, right? It’s not guaranteed that this will work, because *isLoggedIn()* is actually an async call. If you want to force something to wait until after *isLoggedIn()* is successful before it gets called, you should include *Auth.isLoggedInAsync*:

~~~javascript
$scope.isLoggedInAsync = Auth.isLoggedInAsync;
~~~	

*isLoggedInAsync* takes a callback function as an input, and passes the callback function a *true* boolean if the user is logged in, and a *false* if the user is not. You can call it like so: 

~~~javascript
$scope.isLoggedInAsync(callback(bool) {
	if (bool) { /** do thing if they’re logged in **/ } 
	else { /** do different thing if they’re not logged in **/ }
});
~~~

[PREVIOUS](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Restrict-a-page-to-authenticated-users)
[NEXT](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Bonus-SocketIO)