# Setting up a React, ES6 and Webpack project

This wiki will instruct you how to set up a bare-bones project that uses React, Webpack and ES6. We'll go over everything in depth.

[Help: More about React](https://facebook.github.io/react/docs/why-react.html)

For this project we will make use of Webpack, which is a module bundler, and is commonly used in React projects.

[Help: More about Webpack](https://webpack.github.io/docs/what-is-webpack.html)

React goes well with ES6, so we’re going to use ES6 in our code. ES6 (EcmaScript 6, or EcmaScript 2015) is the ‘next version’ of JavaScript; it doesn’t work in browsers on its own yet, but we can make it work manually using Babel to transpile it to ES5.

The cool thing is that our `index.html` file will refer to one bundled JavaScript file from which we can refer in other JavaScript files, rather than referring to them from the HTML file with `script` tags.

[Help: More about ES6](http://dev.venntro.com/2013/09/es6-part-1/)

##### Prerequisites

This tutorial is intended to give you a bare bones structure upon which to expand. It should be a good starting point for anyone that wants to learn React and ES6. If you haven’t built anything with JavaScript or jQuery yet, you should go through some of the exercises in the [FreeCodeCamp map](http://www.freecodecamp.com/map) first.

Before you start, make sure you have [NodeJS](https://nodejs.org/en/download/) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) installed at their most recent versions.

## Contents
- [Initializing the Project](#initializing-the-project)
- [Installing Dependencies](#installing-dependencies)
- [File Structuring](#file-structuring)
- [Writing the Code](#writing-the-code)

## Initializing the Project

The first thing to do is open our terminal/command line. We need to install Webpack and Webpack Dev Server globally.

[Help: More about installing Node Modules globally](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)

```
npm install webpack webpack-dev-server –g
```

Installing these modules globally means that we can refer to use their respective command line interfaces in the terminal. Installing Webpack allows us to run `webpack` from the terminal to execute a Webpack script. Installing Webpack Dev Server allows us to run a localhost server using our Webpack configuration. This will all become clear a little later.

In your directory of choice, make a new directory, for example `react-webpack-example`, and change directory into it:

```
mkdir react-webpack-example && cd $_
```

Now that we're in our new directory, we need to create our Webpack file, which will live in the root. This is a configuration file, and so it's usually always named `webpack.config.js`.

```
touch webpack.config.js
```

Now, we can go ahead and [initialise an npm project](https://docs.npmjs.com/cli/init) using the following command:

```
npm init
```

This command will create a `package.json` file, which is going to contain important data about our project.

So far, this is what our tree should look like:
```
.
├── package.json
└── webpack.config.js
```

## Installing Dependencies

Now that we have an empty Webpack Configuration file (`webpack.config.js`) and a freshly made Package file (`package.json`), we need to install some dependencies. Installing dependencies automatically adds some data to our `package.json`.

This project will depend on React, ReactDOM, Webpack, and Webpack Dev Server. It will also depend on a number of Babel packages, because we are going to be writing code using ES6, and [Babel is an ES6 transpiler](https://babeljs.io/).

The dependencies we require in detail:

| Package | Reason |
| --- |---|
| [React](https://www.npmjs.com/package/react) | 'An npm package to get you immediate access to React, without also requiring the JSX transformer.' |
| [React DOM](https://www.npmjs.com/package/react-dom) | 'This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.' |
| [Webpack](https://www.npmjs.com/package/webpack) | 'Allows to split your codebase into multiple bundles, which can be loaded on demand.' |
| [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server) | 'Serves a webpack app. Updates the browser on changes.' |
| [Babel Loader](https://www.npmjs.com/package/babel-loader) | 'Babel module loader for Webpack.' |
| Babel Core | Required for Babel Loader. |
| Babel Preset: ES2015 | Required for Babel Loader. |
| Babel Preset: React | Required for Babel Loader. |

We can go ahead and install all these modules with a single command:

```
npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react
```

If we look at our `package.json` file now, we will notice that our `devDependencies` has become a list of the Node packages we just installed. This is important because it means we can install these again if we need to using `npm install`.

[Help: More about `dependencies` and `devDependencies`](http://stackoverflow.com/a/22004559/4637110)

## File Structuring

Now it's time to set up our file structure before we write any code.

Firstly, let's create a new file called `.gitignore`:

```
touch .gitignore
```

This file will contain a list of all the files and folders that are **not** to be included when we push our project to GitHub. For now, we can paste in [this boilerplate code](https://github.com/github/gitignore/blob/master/Node.gitignore).

Notice that this code includes `node_modules`. This is extremely important, because we don't want to include our `node_modules` folder with our Git commits, as they take up a lot of disk space, and can be installed with `npm install`.

Most of the files and folders there don't exist in our project yet, but if they do in the future, they won't be included in our Git commits, which is important and useful, because we must be selective about what we commit.

Now, we need to make a new folder that will contain the contents of our code. Let's call it `src`:

```
mkdir src
```

Now that we have installed our packages and created an empty source folder, our tree will look like this (not including `.gitignore`, which is a hidden file):

```
.
├── node_modules
├── package.json
├── src
└── webpack.config.js
```

Now, we can make a new `js` folder that goes into our 'src' folder. This will contain all our React code:

```
mkdir src/js
```

Go ahead and create an empty `client.js`. This will be our main React file:

```
touch src/js/client.js
```

We also need an `index.html` that should go into our `src` file (not `src/js`):

```
touch src/index.html
```

So now, our tree looks something like this:

```
.
├── node_modules
├── package.json
├── src
│   ├── index.html
│   └── js
│       └── client.js
└── webpack.config.js
```

## Writing the Code

### src/index.html
We can go now open our `src/index.html`. This will be the one HTML page that loads our entire app. We don't need much code at all for this file, just enough to:
- Set an element for the React DOM in the `src/js/client.js`.
- Link to our bundled JavaScript file (which doesn't exist yet).
Therefore, this is what our `src/index.html` file will look like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <!-- React app will be injected into the following `div` element: -->
  <div id="app"></div>
  <!-- Include bundled JavaScript: -->
  <script src="js/client.min.js"></script>
</body>
</html>
```

You might be wondering why this page links to a `client.min.js` when all we have so far is an empty `client.js`. This will be revealed later when we write our Webpack configuration file.

### src/js/client.js
Now it's time to write some React code. Just like in the `src/index.html` file, for now we will write just enough code to get the app going, so there won't be much code required at all:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div><h1>This is one cool app!</h1></div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
```

The code that looks like HTML elements is actually JSX, which is a part of React.

[Help: More about JSX](http://buildwithreact.com/tutorial/jsx)

To explain what is going on in this file, we'll break it down:
- First, we are importing `React` and `ReactDOM`. These are required for any React file that is used to inject code into the DOM. The `ReactDOM` is a virtual DOM, and it's not the same thing as the standard Document Object Model.

   [Help: More about the React DOM](https://facebook.github.io/react/docs/glossary.html)

- Next, we are creating a React class. Classes were added to JavaScript in ES6. Therefore, this is the ES6 method of writing a React class, but of course [we can write one in ES5 too](https://toddmotto.com/react-create-class-versus-component/).

   [Help: More about ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

   Every React class has a `render` method. In this case, the `render` method is `return`ing a JSX `div` element. This is what we'll see all over any React file. The class can contain other methods which must appear before the `render` method, which always goes at the bottom of a class.

- Lastly, we are linking React with our `index.html`. We set the `app` to be the location of wherever we want our React code to be injected. And finally, using ReactDOM, we inject the component we wrote, `<Main />`, into the app, which in this case is the `div` with the `id` of `app`.

### webpack.config.js

There's still one more file left to write before our project is ready. It's the Webpack configuration file. At first, `webpack.config.js` files can be confusing to look at, but often, they're not as complex as they seem.

In this case, at its most basic, a `webpack.config.js` exports an object that has the following properties:

| Property | Role |
| --- | --- |
| entry | What goes in: the entry point of the app. In this case, it's `src/js/client.js`. |
| output | What comes out: what Webpack is going to bundle for us. In this case, it's whatever we name it in the `webpack.config.js`. |
| loaders | The tasks that Webpack is going to carry out. |

Here is what the `webpack.config.js` file looks like:

```js
var path = require('path');
var context = path.join(__dirname, 'src')

module.exports = {
  context: context,
  entry: "./js/client.js",
  output: {
      path: context,
      filename: "./js/client.min.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          }
      ]
  }
};
```

Again, let's break it down so that it's clear what this file is doing:
- Firstly, we are requiring NodeJS's `path` module so that we can handle file paths, and then using its `join` method to specify a `context`. This is mainly to avoid having to prefix `src` every time we want to refer to a file within the `src` folder.  Caching this location in a context simply means we are not repeating ourselves, as the `context` is referred to more than once.

- Next, we are setting up the object that we want to export.

- After that, we are writing the object. These properties are all relevant to Webpack.
   - We first provide a context, which simply specifies where our app is. It refers to the `context` variable that we just created.
   - We then specify the entry point, which is of course the React app we wrote earlier (`src/js/client.js`).
   - Next we specify the name of the bundled file that Webpack creates when it runs. In this case it's `src/js/client.min.js`. Sound familiar? It should do, because this is the file we are linking to from our `src/index.html`!
   - Finally comes the `module` property, which contains an array, `loaders`, which currently contains a single object. This object's properties tell Webpack what JavaScript files are being written with ES6 and React, so that its loader, `babel` can run accordingly when `webpack.config.js` is run. This is largely boilerplate code that we can see at [the readme page on Babel Loader](https://github.com/babel/babel-loader).

If `webpack.config.js` is confusing now, don't worry, as long as you understand what it is there to do.

[Help: More about writing a Webpack configuration file](https://webpack.github.io/docs/tutorials/getting-started/#config-file)

## Running Webpack and Webpack Dev Server

The time has come to use Webpack. Because Webpack is installed globally, we can run the following in our terminal:

```
webpack
```

This will run our `webpack.config.js` file. It should run successfully, and we should see something like this appear in our terminal:

```
Version: webpack 1.12.14
Time: 3828ms
             Asset    Size  Chunks             Chunk Names
./js/client.min.js  679 kB       0  [emitted]  main
    + 159 hidden modules
```

Notice that it refers to `client.min.js`. This means this file has been created. Check out your `src/js` folder, and you should see your `client.js` alongside your `client.min.js`.

Our tree will now look like this:

```
.
├── node_modules
├── package.json
├── src
│   ├── index.html
│   └── js
│       ├── client.js
│       └── client.min.js
└── webpack.config.js
```

So now that we have a `src/js/client.min.js`, our `src/index.html` file is now referring to a file that exists! If we take a look at `client.min.js`, we'll see that it's a bundle of all the JavaScript files in our project. Cool! Go ahead and search for some contents of our `src/js/client.js`, like `This is one cool app!`. You'll see how Babel has converted the code to ES5 and bundled it among other JavaScript files - including all our Node Modules, of course. Now all our React files can refer to this bundle using `import` statements.

Despite its name, the `src/js/client.min.js` is not yet minified; minifying the bundle will be covered in the next tutorial.

Finally, it's time to check out the app in a browser. Go ahead and run:

```
webpack-dev-server --content-base src
```

We need to include `--content-base src` to specify a content base to Webpack Dev Server, so that it knows where to get files to serve; in this case, it's the `src` folder.

In our terminal, we should see something like the following:

```
http://localhost:8080/webpack-dev-server/
webpack result is served from /
content is served from /Code/react-webpack-example/src
Hash: ###
Version: webpack 1.12.14
Time: 3208ms
```

Following that will be a table of all the files bundled to `src/js/client.min.js` by Webpack. Amazing!

Now is the time to head to the URL provided by that `webpack-dev-server` command, `http://localhost:8080/webpack-dev-server/`. We should see a page with an `h1` that reads:

```
This is one cool app!
```

If you got this far, well done! Now you know how to set up a workspace using React, Webpack and ES6 code, which is awesome.

In the next tutorial we will cover some more advanced steps to building a React project, going into more detail with React, and looking at some other cool features of Webpack, like compiling SCSS and minifying the output bundle.
