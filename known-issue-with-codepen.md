# Known Issue With Codepen

Free Code Camp learners are encouraged to use [Codepen.io](http://www.codepen.io/) to put together projects, and Codepen is a fantastic resource for quickly putting together useable code. However, Codepen does introduce an additional level of abstraction into the process of debugging code. Here are some known issues that can trip you up in Codepen, if you're not aware of them:

* CodePen overrides ```<a href='URL'>``` anchor elements, which means that you have to add a ```target='_blank'``` to your anchor elements - otherwise they won't work.

* The Chrome extension "HTTPS Everywhere" (created by the [Electronic Frontiers Foundation](http://www.eff.org/)) has been known to interfere with AJAX calls. Because the extension automatically uses HTTPS, it can cause a "mixed content" error that prevents the JSON/XML data from being loaded. If you encounter such an error, make sure that your plugins are not the culprit!
