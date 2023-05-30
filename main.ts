radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
    radio.sendNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(273 + input.temperature())
    radio.sendNumber(273 + input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(1.8 * (input.temperature() + 32))
    radio.sendNumber(1.8 * (input.temperature() + 32))
})
radio.setGroup(121)
