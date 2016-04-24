# generator-phaser-alt

## Version notice

### Version 1.x
Version 1.x was developed to use ES5 (< ES2015), so standard JavaScript.

### Version 2.x
Version 2.x is an enhancement of v1.x that uses BabelJS to get ES6 support. Now you can use
`class`, `import`, `let` and so on in your code. Should also run ES5 Code, so no need to use
v1.x just to get ES5 compability.

## Getting Started

### What is Generator-Phaser-Alternative?

This PhaserJS Generator is an alternativen Yeoman generator, which is a boilerplate to get your Phaser Game setup.
It is designed around my best-practice and uses [Gulp](http://www.gulpjs.com) to automate tasks to work more
in your game, instead of repeating tasks manually.

### Yeoman Generators

To use Yeoman generator you need to have [NodeJS](http://www.nodejs.org) installed. With NodeJS the Node Package Manager
[NPM](http://www.npmjs.org) will be installed. That is the basis for the next steps.
To install NodeJS and NPM please use the interwebs for instructions how to install it on your system.

#### Install Yeoman globally

After NodeJS is installed start installing the [Yeoman](http://www.yeoman.io) tool. More details on Yeoman can
be found on the Yeoman website, but basicly it is the following command:

```bash
npm install -g yeoman
```

After that you are good to go to use the Generator-Phaser-Alternative renerator


## Instructions on Generator-Phaser-Alt

Before using the generator your need to install the generator on your system via NPM to use it on your next project.

### Install Generator on your system

To install generator-phaser-alt from npm, run:

```bash
npm install -g generator-phaser-alt
```

### Usage of Generator

Create a new folder, where your game will live and change to that directory:

```bash
mkdir ~/create/new/gamefolder
cd ~/create/new/gamefolder
```

Finally, initiate the generator:

```bash
yo phaser-alt
```

After installing the generator you just need to run `gulp` in you command line.

```bash
gulp
```

## Features of this Generator

This generator was developed, as the other existing generators did not fit my needs.
The directory structure and the task runner were the two main disadvantages for
my needs, thats why I created my own generator.


### Features

- [Jade](http://www.jade-lang.com) for HTML files
- [Stylus](https://learnboost.github.io/stylus/) for generating CSS
- [Gulp](http://www.gulpjs.com) as task runner
- [Browserify](http://browserify.org/) to bundle your code
- [JSHint](http://jshint.com/) to help your with your code
- [BabelJS](https://babeljs.io/) to get ES6 support
- Gulp Tasks to
  - copy audio/image assets
  - copy other js files that you want on your website or for the game
  - optimize images
  - build in server to test your app
- all dependencies are installed after running the generator via NPM
- directory structure to organize website code and game code

After installing the generator you just need to run `gulp` in you command line.

### Directory Structure after running generator

The generator-phaser-alt will create the following folder structure in your game folder:

```
.
├── app                       // main app folder, contains Jade files
│   ├── images                // image folder for your website images, not game images
│   ├── js                    // main folder vor all your javascripts including game js files
│   │   ├── components        // components in your game
│   │   ├── prefabs           // prefabs in your game
│   │   └── states            // states folder with predefined states
│   └── stylesheets           // folder for the Stylus files
├── assets                    // main assets folder for your game assets
│   ├── audio                 // audio game assets, used when build game
│   ├── designs               // design folder, contains only design which are not used in the game
│   ├── images                // game image folder, which will be used when build
│   ├── js                    // extra JS files, which are not directly game related
│   └── tilemaps              // tilemaps folder
├── build                     // build folder will be created on each build
│   ├── assets                // assets copied from the /assets folder
│   │   ├── audio
│   │   └── images
│   ├── css                   // generated CSS files from stylus
│   └── js                    // copied JS files (game js files, included JS)
├── dist                      // distribution folder, all assets are optimized and minified
└── gulp                      // gulp folder with config
    └── task                  // js files with the definition of all tasks
```

### Configuration of Gulp Tasks

The main config of all Gulp tasks is in the file `gulp/config.js`, there should be everything as needed.


### More About the Features

The Generator uses Jade to compile to HTML code. The `index.jade` file is located in `app/index.jade`
and will result in your `index.html` file as starting point in your `/build/index.html` and used
to be served when using the build in webserver and the address `http://localhost:3000` to test your game.

Almost the same with the Stylus Preprocessor. The main styl file is located in `app/stylesheets/style.styl`
and from there you can include other styl files. The main CSS file will be placed in `build/css/style.css`.

To not manually reload the browser page on every change, the gulp tasks are setup to automaticly reload
via `devreload.js` file. On every change (save of file) this will run. If putting new files into the
`app` or `assets` folder, you need to restart `gulp`, as new files are not automaticly detected!


## TODO

Bug Fixing

## License

MIT © [IkkeWa](http://ikkewa.github.io/)
