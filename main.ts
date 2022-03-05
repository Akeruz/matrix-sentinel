controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`shoot`, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let alien: Sprite = null
let misil: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(assets.image`falconX`, SpriteKind.Player)
mySprite.setPosition(79, 110)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    misil = sprites.createProjectileFromSide(assets.image`misile`, 0, 50)
    misil.x = randint(0, scene.screenWidth())
    misil.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(1000, function () {
    alien = sprites.createProjectileFromSide(assets.image`ufo`, 0, 50)
    alien.x = randint(0, scene.screenWidth())
    alien.setKind(SpriteKind.Enemy)
})
forever(function () {
    if (info.score() == 66) {
        game.over(true, effects.clouds)
    }
})
