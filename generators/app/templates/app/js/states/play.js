'use strict';
// require modules if needed, need to be installed via npm
// var moduleName = require('module-name');

/**
 * Play state - the actual game
 */
function Play() {
  // define game relevant constants or Phaser.Group's
  // with `this` binding here
}

Play.prototype = {
  /**
   * Preload the game
   *
   * This is for overall keybinding and debugging.
   * Nothing really fancy happens here
   */
  preload: function preload() {
    // prevent window jumping, by binding the keys that
    // trigger the browser to scroll
    this.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.SPACEBAR
    ]);

    // if arrow keys needed, use `createCursorKeys`
    //this.cursors = this.input.keyboard.createCursorKeys();

    // rebind arrow keys to w-a-s-d (if `createCursorKeys` not used)
    //this.cursors = this.input.keyboard.addKeys({
    //  'up': Phaser.Keyboard.W,
    //  'left': Phaser.Keyboard.A,
    //  'down': Phaser.Keyboard.S,
    //  'right': Phaser.Keyboard.D
    //});

    // enable advance (precission) timing
    this.game.time.advancedTiming = true;

  },

  /**
   * Create the game instance that makes a 
   * level playable. Constructs the entities and
   * the basic logic that is needed
   */
  create: function create() {
    // load a tilemap or create some level here from assets
    // example tilemap:
    //  this.tileMap = this.add.tilemap('cache-key-tilemap');
    //  this.addTilesetImage('imagename-of-reference-in-tilemap', 'cache-key-tiled-image');
    //  this.background = this.map.createLayer('background');
    //  ...
    //
    // further entities created from prefabs or own components
    // init with calls to own functions for better overview
    // example:
    //  this.createPlayer();
    //  this.createEnemies();

    // example
    this.demoImage = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'menu-btn-play');
    this.demoImage.anchor.setTo(0.5);

    // example: bind esc key to get to gameover screen
    this.escKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    this.escKey.onDown.add(this.onEscKeyPressed, this);
  },

  /**
   * Update function - called on every frame
   *
   * Contains the logic of the game
   *  - input
   *  - physics
   *  - logic
   *
   * Try to keep the logic runtimes as small as possible,
   * maybe by using state checks and if it is needed to update
   * any logic.
   */
  update: function update() {
    // check physics, move player position etc ...

    this.demoImage.angle += 1;
  },

  /**
   * Render function, mostly used for debugging
   */
  render: function render() {
    // example: debug a sprite object when physics are enabled
    //  this.game.debug.body(this.player);
  },

  /**
   * Callback function, when the ESC key is pressed.
   * Used as an example.
   *
   * @param {Phaser.Key} key
   */
  onEscKeyPressed: function onEscKeyPressed(key) {
    if(key.keyCode === Phaser.Keyboard.ESC) {
      this.game.state.start('gameover');
    }
  },
};

module.exports = Play;

