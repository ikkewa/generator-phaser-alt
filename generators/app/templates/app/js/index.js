'use strict';

import Boot from './states/boot';
import Preload from './states/preload';
import Menu from './states/menu';
import Play from './states/play';
import GameOver from './states/gameover';

var game = new Phaser.Game(960, 640, Phaser.AUTO, 'gamecanvas');

game.state.add('boot', Boot);
game.state.add('preload', Preload);
game.state.add('menu', Menu);
game.state.add('play', Play);
game.state.add('gameover', GameOver);

// boot the game directly
game.state.start('boot');
