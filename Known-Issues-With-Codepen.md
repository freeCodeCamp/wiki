# Known Issues With Codepen

Free Code Camp learners are encouraged to use [Codepen.io](http://www.codepen.io/) to put together projects, and Codepen is a fantastic resource for quickly putting together useable code. However, Codepen does introduce an additional level of abstraction into the process of debugging code. Here are some known issues that can trip you up in Codepen, if you're not aware of them:

1. **URL issue with anchor tags:** CodePen overrides `<a href='URL'>` anchor elements, which means that you have to add a `target='_blank'` to your anchor elements - otherwise they won't work.
2. **https plugin issue:** The Chrome extension "HTTPS Everywhere" (created by the [Electronic Frontiers Foundation](http://www.eff.org/)) has been known to interfere with AJAX calls. Because the extension automatically uses HTTPS, it can cause a "mixed content" error that prevents the JSON/XML data from being loaded. If you encounter such an error, make sure that your plugins are not the culprit. Optionally you could use [crossorigin.me](http://crossorigin.me) as a proxy.
3. **imgur hotlinking:** If you use images from [http://imgur.com](http://imgur.com) they will not show up most of the time, this is due to their TOS. A way to solve this is to use an alternate service like [http://postimg.org](http://postimg.org)
4. **auto reload:** By default, everytime you make changes in the HTML or JS editor windows, the preview window refreshes. You can turn this off and enable a "Run Button", by going to Settings > Behaviour > "Want a Run Button?" and unticking the box.
