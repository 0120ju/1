input.onButtonPressed(Button.A, function () {
    방어.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    방어.change(LedSpriteProperty.X, 1)
})
let 방어: game.LedSprite = null
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
방어 = game.createSprite(2, 4)
let 폭탄 = game.createSprite(randint(0, 4), 0)
game.setLife(3)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        폭탄.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (방어.isTouching(폭탄)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
        game.addScore(1)
        폭탄.delete()
        폭탄 = game.createSprite(randint(0, 4), 0)
    } else {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        game.addScore(-1)
        game.removeLife(1)
        폭탄.delete()
        폭탄 = game.createSprite(randint(0, 4), 0)
    }
})
