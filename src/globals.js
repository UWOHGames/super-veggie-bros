/**
 * Register globals.
 *
 * This needs to be done to properly use Phaser
 */
const PIXI = window.PIXI =
  require('phaser-ce/build/custom/pixi')

const p2 = window.p2 =
  require('phaser-ce/build/custom/p2')

const Phaser = window.Phaser =
  require('phaser-ce/build/custom/phaser-split')

module.exports = { PIXI, p2, Phaser }
