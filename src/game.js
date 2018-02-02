require('babel-polyfill')

const { Phaser } = require('./globals')
const { Game } = Phaser

const { LEFT, RIGHT, SPACEBAR } = Phaser.Keyboard

let player
let platforms

function playerJump () {
  player.body.velocity.y = -800
}

const game = new Game(1200, 800, Phaser.CANVAS, 'phaser-test', {
  preload () {
    game.load.spritesheet(
      'player',
      './assets/cabbage-spritesheet.png',
      160,
      160,
      2
    )

    game.load.spritesheet(
      'floor',
      './assets/coin-spritesheet.png',
      160,
      160,
      2
    )
  },

  create () {
    // create player
    player = game.add.sprite(500, 500, 'player')
    platforms = game.add.physicsGroup()

    for (let i = 0; i < 10; i++) {
      platforms.create(i * 80, 675, 'floor')
    }

    platforms.setAll('body.allowGravity', false)
    platforms.setAll('body.immovable', true)

    // add physics to the player character
    game.physics.arcade.enable([ player ])
    game.physics.arcade.gravity.y = 1000
  },

  update () {
    if (game.input.keyboard.isDown(LEFT)) {
      player.x -= 10
    } else if (game.input.keyboard.isDown(RIGHT)) {
      player.x += 10
    } else if (game.input.keyboard.isDown(SPACEBAR)) {
      playerJump()
    }

    game.physics.arcade.collide(player, platforms)
  }
})
