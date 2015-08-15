	>> yo angular-fullstack:endpoint whatsit
 Using this line, you get Yeoman to automatically generate another API endpoint and new kind of collection for your database. Now we have *things* as well as *whatsits*! Feel free to open up **/server/api/whatsit/whatsit.model.js** and define your whatsit however you like.

###Fixing exports.update
As it turns out, in **thing.controller.js** as well as in any other endpoints you may generate, the *exports.update* function that is called when you make an *$http.put* call from your frontend to modify an existing database object is broken. This is a <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues/310">known issue</a>, and can be fixed by changing the following line:
 
~~~javascript
// Updates an existing thing in the DB.
exports.update = function(req, res) { 
...    
    var updated = _.extend(thing, req.body); 
    // change _.merge to _.extend
... 
 };
~~~

[PREVIOUS](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Backend-file-structure)
[NEXT]()