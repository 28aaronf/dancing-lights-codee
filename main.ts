input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
basic.forever(function () {
    basic.showString("" + (input.soundLevel()))
})
basic.forever(function () {
    while (input.soundLevel() >= 65) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    while (input.soundLevel() >= 65) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    while (input.soundLevel() >= 65) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    }
})
