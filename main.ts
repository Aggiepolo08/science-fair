input.onButtonPressed(Button.A, function () {
    let test = 0
    serial.writeLine("" + test)
    basic.showIcon(IconNames.Yes)
    RunProject = true
})
input.onButtonPressed(Button.B, function () {
    RunProject = false
    basic.showIcon(IconNames.No)
})
let RunProject = false
let BlueButton = -1
RunProject = false
basic.forever(function () {
    while (RunProject == true) {
        basic.showIcon(IconNames.Heart)
        BlueButton = pins.digitalReadPin(DigitalPin.P5)
        serial.writeLine("BlueButton: " + ("" + BlueButton))
    }
})
