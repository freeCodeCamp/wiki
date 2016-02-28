# Setting up a basic working environment with React and Webpack.

You can view, use, and test an example of a React-Webpack environment [here](https://github.com/alanbuchanan/mangadb-demo/tree/9b5e9519c31a29aad0e135daac8009a8df65257d).

# General build info:

Tree:
```
.
├── data
│   └── dummy_data.js
├── package.json
├── src
│   ├── client.min.js
│   ├── index.html
│   ├── js
│   │   ├── client.js
│   │   ├── components
│   │   │   ├── Header.js
│   │   │   └── Layout.js
│   │   └── pages
│   │       └── User.js
│   └── style
│       ├── bootstrap.min.css
│       └── style.scss
└── webpack.config.js
```
### index.html
In the `index.html`, the only elements required in the `body` are:
```
<div id="app"></div>
<script src="client.min.js"></script>
```
The `div` is the container for React. So our app will be injected into this `div` by React.
The `script` tag is linking to a minifed bundle of all the JavaScript in the project that needs to be bundled. This bundle is handled by Webpack which I will cover in a moment.

### Dummy data
`dummy_data.js` exports an array of objects whose keys mirror the schema in the readme.md of [Rafase's repo](https://github.com/Rafase282/Mangadb). Of course, this is for testing purposes, and in the production app, the data will be retrieved from the database.

### React

Using React means that there is very little HTML; instead you can manipulate the DOM using JSX, which looks like HTML, but is very different.

The `User` component is probably a good example of React at its most basic:

Firstly, declare everything we need to import:
```
import React from 'react';
import Header from '../components/Header';
import $ from 'jquery';
import dummyData from '../../../data/dummy_data'; // This will be brought in from db
```

Begin the `class` that is going to be exported:
```
export default class User extends React.Component {
```

Set up a `componentDidMount()` method. This is like `$(document).ready`. This is used heavily in React, and the other methods can be found [here](https://facebook.github.io/react/docs/component-specs.html):

```
componentDidMount() {
    console.log(dummyData)
}
```

Finally, all React components have a `render()` method. In this case, the render method is making a list of user information from the dummy data:

```
render() {

    let { username } = this.props;

    let getElementProps = mangaItem => {
        return (
            <div>
                <img src={mangaItem.thumbnail} alt=""/>
                <h4>{mangaItem.title}</h4>
            </div>
        )
    };

    let listOfUsersManga = (
        dummyData.map((element, index) => {
            return <a href={element.url}><li key={index}>{getElementProps(element)}</li></a>
        })
    );

    return (
        <div>
            <Header />
            <div class="page-user container">
                <button class="btn btn-success"><i class="fa fa-plus-circle"></i> Add</button>

                <ul>
                    {listOfUsersManga}
                </ul>

            </div>
        </div>
    )
}
```

Note that this doesn't use any [stateful components](https://facebook.github.io/react/docs/component-api.html) yet.

All the React files live in the `js` folder. They are not named with the `.jsx` extension, but they use JSX.

The entry point of the app is `client.js`:

```
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import User from "./pages/User"
require('../style/style.scss');

const app = document.getElementById('app');
ReactDOM.render(<User username="bert"/>, app);
```

Notice that `app` is pointing to the HTML `div` with the `id` of app that we set up in `index.html`.
`ReactDOM.render()` is telling React what to inject into the app. In this case, it is injecting the `User` React component, and passing it a property called `username`. Again, this is of course placeholder data and the user's username will be attained by the backend at login and then passed to the front end.

#### Components and Pages
It seems to be turning into best practise to organise React files into a components folder, and a pages folder. Pages will comprise Components.

In this case, the `User` page incorporates the `Header` component, like so:

```
return (
    <div>
        <Header />
        <div class="page-user container">
            <button class="btn btn-success"><i class="fa fa-plus-circle"></i> Add</button>

            <ul>
                {listOfUsersManga}
            </ul>

        </div>
    </div>
)
```
In a production app, you might have an overall `Layout` 'main' page that can be passed children pages, eg:
```
return (
    <div>
        <Header />
        <User />
        <Footer />
)
```
If React Router is used, you can pass whatever page is necessary into the `Layout` page, so that it renders whatever is requested.

## Webpack

Webpack is a build tool that allows you to do cool things. It can be really confusing to look at. In this case, the most important things `webpack.config.js` is doing is the following:

  - Allowing us to use ES6 code using Babel:

  ```
  presets: ['react', 'es2015', 'stage-0'],
  ```

  - Bundling all necessary JavaScript into a single `client.min.js`.
    - Among the advantages of this is the fact that you can use ES6 `import` statements on the front end, so that you don't have to link with `script` tags from `index.html`:

  ```
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  ```

  - Compiling SCSS to CSS without generating a CSS to read from:

  ```
  {
    test: /\.scss$/,
    loaders: ["style", "css", "sass"]
  }
  ```

All of the features we are using Webpack for are generated whenever we run the command `webpack`. This will generate a new `client.min.js`. Using the `webpack-dev-server` command, we can run a local server that will update our files as we changed them, and adding the `inline` and `hot` args we can hot-reload the page as we edit its files. The full command is attributed to `npm run dev` in `package.json`:

```
"scripts": {
  "dev": "webpack-dev-server --content-base src --inline --hot",
},
```
Webpack is flexible between `production` and `development` environments, if the option is changed, `webpack.config.js` will execute differently, eg:
```
var debug = process.env.NODE_ENV !== "production";

plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
],
```

This `webpack.config.js` uses the basis of learncode.academy's React series which I have linked at the bottom of this file.

More info: [this set of great tutorials](https://www.youtube.com/watch?v=MhkGQAoc7bc)
