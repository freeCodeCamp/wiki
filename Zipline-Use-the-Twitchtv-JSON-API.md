If you're trying to tackle this challenge with jQuery's `$.getJSON()` method, chances are you'll get an error message concerning Cross-Origin Resource Sharing (CORS).
One way to get around this issue is to use the following code snippet:
## []()
```js
/*
* Usage:
* 
* JSONP( 'someUrl.php?param1=value1', function(data) {
*   //do something with data, which is the JSON object retrieved from someUrl.php
* });
*/
var JSONP = (function(){ 'use strict';
    var counter = 0;

    var memoryleakcap = function() {
        if (this.readyState && this.readyState !== "loaded" && this.readyState !== "complete") { return; }

        try {
            this.onload = this.onreadystatechange = null;
            this.parentNode.removeChild(this);
        } catch(ignore) {}
    };

    return function(url, callback) {
        var uniqueName = 'callback_json' + (++counter);

        var script = document.createElement('script');
        script.src = url + (url.toString().indexOf('?') === -1 ? '?' : '&') + 'callback=' + uniqueName;
        script.async = true;

        window[ uniqueName ] = function(data){
            callback(data);
            window[ uniqueName ] = null;
            try { delete window[ uniqueName ]; } catch (ignore) {}
        };

        script.onload = script.onreadystatechange = memoryleakcap;

        document.getElementsByTagName('head')[0].appendChild( script );

        return uniqueName;
    };
}());
```
So where you'd normally call `$.getJSON(url, callback)`, now you just replace it with `JSONP(url, callback)`.

JSONP is considered insecure [according to Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP), but should be sufficient for our purposes. For a detailed discussion on Twitch's CORS restriction, please read [issue #133](https://github.com/justintv/Twitch-API/issues/133) on the Twitch-API repository.