If you're trying to tackle this challenge with jQuery's `$.getJSON()` method, chances are you'll get an error message concerning Cross-Origin Resource Sharing (CORS).

The easiest way to resolve this is to use jQuery's JSONP capabilities. From the Twitch API's [readme page](https://github.com/justintv/Twitch-API#json-p):

> All API methods support JSON-P by providing a callback parameter with the request.

Also the [jQuery documentation](http://api.jquery.com/jQuery.getJSON/) states:

> If the URL includes the string "callback=?" (or similar, as defined by the server-side API), the request is treated as JSONP instead.

Here's an example call to fetch Free Code Camp's Twitch channel data:

```js
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});
```

JSONP is considered insecure [according to Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP), but should be sufficient for our purposes. For a detailed discussion on Twitch's CORS restriction, please read [issue #133](https://github.com/justintv/Twitch-API/issues/133) on the Twitch-API repository.