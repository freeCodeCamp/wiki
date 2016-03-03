Say you want something to show up on the user view when you add it to the database. A new *thing* object will instantly show up in an *ng-repeat* loop in your HTML view if you simply add it to your local array with  

~~~javascript

$scope.awesomeThings.push(newThing);
~~~

But you’ll still need to add it to your database collection. Add it to your collection with  

~~~javascript

$http.post('/api/things', newThing);	

~~~
But wait! You’ll soon realize that while all the other things in your *$scope.awesomeThings* array have unique ids assigned by MongoDB (under the *thing.\_id* property), your *newThing* object will not, which will make it hard for you at some point to make database actions on it (deleting it from your database requires you to use its *._id* property). So what you’ll want to do after you add it to your *$scope.awesomeThings* array (because we want it to show up on the user’s page immediately). Altogether, your code to add a newThing to your local array and database will look like:

~~~javascript
$scope.awesomeThings.push(newThing);
$http.post('/api/things', newThing).success(function(thatThingWeJustAdded) {
	$scope.awesomeThings.pop(); // let's lose that id-lacking newThing 
	$scope.awesomeThings.push(thatThingWeJustAdded); // and add the id-having newThing!
};
~~~
This updates the local array for seemingly instant results for your user and then syncs it to your database and updates the local array in the background with the database’s version of your *newThing* object, unique *._id* and all. Notice the callback we pass to the *success* function receives the new *thing* back from the database as an argument! This way you can easily add it back to your local scope without too much overhead.

[PREVIOUS](Seed-data)
[NEXT](Dynamic-URLs-using-$routeParams)