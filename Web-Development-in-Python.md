# Using Python for Web Development

[Previous](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python-Functions)

[Home](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python)

[Next](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Install-Django-Flask)


[Python](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Python) is known for its beautiful syntax and ease of readabilty. This scripting language can be used for some quick-and-dirty prototyping of your idea of a web-app. It can also be used to build scalable and maintainable large web applications.

#### Web Frameworks in Python

Like most domains in Python development, the Python community treats web-development with great affection, and have given us matured, well-maintained frameworks; of varying complexity.

We have micro-frameworks like [Flask](http://flask.pocoo.org/), [Bottle](http://bottlepy.org/docs/dev/index.html). We also have frameworks like [Django](https://www.djangoproject.com/), which comes with [batteries included](https://github.com/rosarior/awesome-django). You can find a complete list of web-frameworks, written in Python, [over here](https://en.wikipedia.org/wiki/Comparison_of_web_frameworks#Python).

#### Web Applications using Python

Highly popular sites like [YouTube](http://highscalability.com/youtube-architecture), [Reddit](https://github.com/reddit/reddit), [Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances),  [Quora](http://qr.ae/RUkZJd), [Pinterest](http://qr.ae/RUkZOJ), [Dropbox](http://eranki.tumblr.com/post/27076431887/scaling-lessons-learned-at-dropbox-part-1), [Bitbucket](https://blog.bitbucket.org/2012/08/24/segregating-services/) etc. are written mostly in Python. You would probably get a more comprehensive list by investigating on your own.

Obviously, the above list is not a complete one; but this would be a great time to point something out to you - writing your back-end in Python would not _automatically_ make your site as fast and scalable as YouTube. We cite the list of sites above to simply point out that Python is a favourite of many software engineers in the industry, for web-development.

Python gives you the lego blocks to build robust, scalable web applications. You also get to enjoy the ease of writing Python modules while building it. But a weapon is only as potent as its master. If you don't know how to wield it, you would end up probably shooting yourself in the foot.


#### Web Frameworks and What They Do For You

We have used the word `framework` quite librarily in the earlier sections. You might or might not be familiar with what that is. Nonetheless, we would discuss what Python Web Frameworks do for you, out-of-the-box.

Web Frameworks, to put it informally, does for you what would be doing *repeatedly* if you were to build a lot of websites with different functionalities. 

Let's take an extremely crude example and attempt to make a simple analogy. Say, you go to dinner, and it's a fancy restaurant. It could be any type of restaurant - Italian, Mexican, Indian, Korean, Pan-Asian.

Try to think of the common things that happen in a restaurant when a customer walks in. A valet might take your car and validate parking. You might be asked at the reception if you had booking; and how many of your friends are with you. You would probably be shown to your table, or asked to wait - depending on the crowd inside.

Once seated, you would be asked if you wanted regular or bottled water. Then someone would ask if you prefer drinks. You might order some starter, followed by main-course; and finally, some dessert. You have to pay the bill.

I understand if you would like to take a moment to take a trip down the memory lane, enjoying a delicious toothsome. Once you are done, you need to put yourself in the position of the person who is running the business.

If you notice, there are some activities that you are doing repeatedly for every customer. And based on the type of restaurant and time of day, there are some things that would be different. For instance, the menu and food prices.

Say, you are running the business; you would also need to handle other aspects of this business that a customer would be oblivious to. For instance; the salary of the staff, managing books, paying rent and tax on the property, printing new menu card etc.

You are wondering where this conversation is headed. Calm down! We are getting back to Python Web Development ASAP.

A Web Framework does these repeating activities for you - that you would do when you build a web application using only a programming language and some networking library. Like Request Handling, URL Routing, Template Compilation, Context Setting, CSRF Protection, Logging, Database Interaction via ORM, Authentication, Response Rendering etc.

You are probably wondering what, then, is left for the developer to do? Based on the application, you have to use the framework APIs and write your application-specific logic.

Your code will fill the gaps *intentionally* left in the framework code - and combining your code with the framework; your web application would have life breathed into it!

So let's get started with some web frameworks and learn how they help build web app on-hands. But before that, we would need to set-up the development environment by completing [installation of web frameworks in Python](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Install-Django-Flask).
