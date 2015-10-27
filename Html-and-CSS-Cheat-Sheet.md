# This a page that (hopefully) in time will grow to cover the basic and simple HTML and CSS solutions. 
### Please add to your alternate solutions if you know a different way.

## <hr> making a `<hr>` horizontal rule smaller
    hr {
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }
<hr>
### Giving a `<div>` non scrolling background 


    #sectionName {
      padding-top: 50px;
      height: 500px;
      color: #fff;
      background-image: url("your_url.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100%;
    }
and over in the html
    `<div id="sectionHome" class="container-fluid">`

