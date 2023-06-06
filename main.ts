radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    humedad = pins.analogReadPin(AnalogPin.P1)
    radio.sendNumber(pins.analogReadPin(AnalogPin.P2))
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
    radio.sendNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.lightLevel())
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    basic.pause(1000)
    basic.clearScreen()
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
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
    basic.clearScreen()
})
let humedad = 0
radio.setGroup(677)
basic.forever(function () {
    serial.writeNumber(input.temperature())
    serial.writeNumber(pins.analogReadPin(AnalogPin.P1))
})
