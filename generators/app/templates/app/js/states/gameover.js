'use strict';

class GameOver extends Phaser.State {
  preload() {
    this.textIndex = 0;
    this.line = '';
  }

  create() {
    // create game over screen

    // example for gameover
    var text = this.game.add.text(this.game.width / 2, 50, 'Game Over!', {
      font: '74px Courier',
      fill: '#c51b7d'
    });
    text.anchor.setTo(0.5);
    text.inputEnabled = true;
    text.stroke = '#de77ae';
    text.strokeThickness = 16;
    text.setShadow(2, 2, '#333333', 2, false, true);
    text.events.onInputDown.add(this.onClick, this);
  }

  onClick() {
    this.game.state.start('menu');
  }
}


export default GameOver;
