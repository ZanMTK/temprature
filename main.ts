input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("CELCIUS")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() * 1.8 + 32)
    basic.showString("REAMOUR")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * 0.8)
    basic.showString("FAHRENHEIT")
})
basic.showIcon(IconNames.SmallHeart)
