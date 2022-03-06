controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`shoot`, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`bomb`, mySprite, 0, -50)
    projectile2.ax = 100
    projectile2.startEffect(effects.warmRadial)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
    music.beamUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let enemyspeed = 0
let alien: Sprite = null
let misil: Sprite = null
let Alien_worm: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(assets.image`falconX`, SpriteKind.Player)
mySprite.setPosition(79, 110)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
game.onUpdateInterval(9000, function () {
    Alien_worm = sprites.createProjectileFromSide(assets.image`alien_worm0`, 7, 35)
    Alien_worm.x = randint(0, scene.screenWidth())
    Alien_worm.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(1000, function () {
    misil = sprites.createProjectileFromSide(assets.image`misile`, 0, 30)
    misil.x = randint(0, scene.screenWidth())
    misil.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(4000, function () {
    alien = sprites.createProjectileFromSide(assets.image`ufo`, 20, 10)
    alien.x = randint(0, scene.screenWidth())
    alien.setKind(SpriteKind.Enemy)
})
forever(function () {
    music.playMelody("B - A - F E F D ", 214)
})
forever(function () {
    if (info.score() == 200) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(100, function () {
    enemyspeed = 10
    enemyspeed = Math.min(enemyspeed, 50)
})
