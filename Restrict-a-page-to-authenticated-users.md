Let's say you have a route that you want to restrict to logged-in users; maybe you have a [/profile](#) page that lets your users fill in some information about themselves, but it wouldn't work if they weren't logged in. Open **/client/app/profile/profile.js**, and add `authenticate: true` to the options passed to _$routeProvider.when_ like so:

```javascript
    $routeProvider
      .when('/profile', {
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl',
        authenticate: true // restrict to authenticated users
      });
```

This way, if the user isn't authenticated when they try to access the <A href="#">/profile</a> page, they'll be redirected to your login screen to authenticate before continuing to their profile page.

[PREVIOUS](Get-info-about-the-current-user) [NEXT](isLoggedInAsync)
