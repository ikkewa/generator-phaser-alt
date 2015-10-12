'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdir = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  init: function init() {
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },
  prompting: function prompting() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the classy ' + chalk.red('PhaserAlt') + ' generator!'
    ));

    var prompts = [{
      name: 'gameName',
      message: 'Name of your game?',
      default: 'myGame'
      }, {
      name: 'authorName',
      message: 'Author name (will be used in different places)?',
      default: ''
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  writing: {
    createFolders: function createFolders() {
      // create app folder and subfolders
      mkdir(this.destinationPath('app'));
      mkdir(this.destinationPath('app/images'));
      mkdir(this.destinationPath('app/js'));
      mkdir(this.destinationPath('app/js/states'));
      mkdir(this.destinationPath('app/js/prefabs'));
      mkdir(this.destinationPath('app/js/components'));
      mkdir(this.destinationPath('app/stylesheets'));

      // assets folders
      mkdir(this.destinationPath('assets'));
      mkdir(this.destinationPath('assets/audio'));
      mkdir(this.destinationPath('assets/designs'));
      mkdir(this.destinationPath('assets/images'));
      mkdir(this.destinationPath('assets/js'));
      mkdir(this.destinationPath('assets/tilemaps'));

      // gulp folder
      mkdir(this.destinationPath('gulp'));
      mkdir(this.destinationPath('gulp/task'));

      // build/dist folder (will be recreated by gulp later anyway)
      mkdir(this.destinationPath('build'));
      mkdir(this.destinationPath('dist'));
    },

    packageJson: function packageJson() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          gameName: this.props.gameName,
          authorName: this.props.authorName
        }
      );
    },

    projectFiles: function projectFiles() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    gulp: function gulp() {
      // copy gulpfile
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      //copy gulp tasks
      this.directory(
        this.templatePath('gulp'),
        this.destinationPath('gulp')
      );
    },

    appFolder: function appFolder() {
      // copy the index jade file for starting point
      this.fs.copyTpl(
        this.templatePath('app/_index.jade'),
        this.destinationPath('app/index.jade'),
        {
          gameName: this.props.gameName,
          authorName: this.props.authorName
        }
      );

      // copy stylus file for stylsheets
      this.fs.copy(
        this.templatePath('app/stylesheets/style.styl'),
        this.destinationPath('app/stylesheets/style.styl')
      );
    },
  },

  appGameFolder: function appGameFolder() {
    this.fs.copy(this.templatePath('app/js/index.js'), this.destinationPath('app/js/index.js'));
    this.fs.copy(this.templatePath('app/js/states/boot.js'), this.destinationPath('app/js/states/boot.js'));
    this.fs.copy(this.templatePath('app/js/states/preload.js'), this.destinationPath('app/js/states/preload.js'));
    this.fs.copy(this.templatePath('app/js/states/menu.js'), this.destinationPath('app/js/states/menu.js'));
    this.fs.copy(this.templatePath('app/js/states/play.js'), this.destinationPath('app/js/states/play.js'));
    this.fs.copy(this.templatePath('app/js/states/gameover.js'), this.destinationPath('app/js/states/gameover.js'));
  },

  assetsFolder: function assetsFolder() {
    this.fs.copy(this.templatePath('assets/audio/menu-tick.mp3'), this.destinationPath('assets/audio/menu-tick.mp3'));
    this.fs.copy(this.templatePath('assets/audio/menu-select.mp3'), this.destinationPath('assets/audio/menu-select.mp3'));
    this.fs.copy(this.templatePath('assets/images/menu-btn-play.png'), this.destinationPath('assets/images/menu-btn-play.png'));
    this.fs.copy(this.templatePath('assets/images/preloader_bg.png'), this.destinationPath('assets/images/preloader_bg.png'));
    this.fs.copy(this.templatePath('assets/images/preloader_fg.png'), this.destinationPath('assets/images/preloader_fg.png'));
    this.fs.copy(this.templatePath('assets/js/devreload.js'), this.destinationPath('assets/js/devreload.js'));
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
