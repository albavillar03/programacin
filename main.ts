radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(7)
    radio.sendString("ALBA")
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "KARINA") {
        basic.showString("ok")
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(8)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
