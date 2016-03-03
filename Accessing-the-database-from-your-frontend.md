You must have noticed in **main.controller.js** how *things* were retrieved from the database and displayed:
  
~~~javascript
 $http.get('/api/things').success(function(awesomeThings){  
	$scope.awesomeThings = awesomeThings;  
});

~~~  

What this does is call the api with a “get” request, which is then routed by **/server/api/thing/index.js** to the *exports.index* function in **thing.controller.js**. You’ll also notice in **main.controller.js** that there are included examples of *$http.post* and *$http.delete* functions too! How nice!  

[PREVIOUS](Fixing-exports.update)
[NEXT](Seed-data)