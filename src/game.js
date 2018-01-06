/**
 * Register globals
 */
const { Phaser } = require('./globals')
const { Game } = Phaser

const game = new Game(1200, 800, Phaser.CANVAS, 'phaser-test', {
  preload () {},

  create () {},

  update () {}
});
