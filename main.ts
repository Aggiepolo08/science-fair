input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    RunProject = true
})
input.onButtonPressed(Button.B, function () {
    RunProject = false
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    redValue = -1
    blueValue = -1
    greenValue = -1
    basic.showIcon(IconNames.No)
})
let greenValue = 0
let blueValue = 0
let redValue = 0
let RunProject = false
let open = 0
let closed = 115
let BlueButton = -1
RunProject = false
redValue = -1
blueValue = -1
greenValue = -1
pins.servoWritePin(AnalogPin.P0, closed)
basic.forever(function () {
    while (RunProject == true) {
        basic.showIcon(IconNames.Heart)
        BlueButton = pins.digitalReadPin(DigitalPin.P5)
        if (BlueButton == 0) {
            pins.servoWritePin(AnalogPin.P0, closed)
            redValue = -1
            blueValue = -1
            greenValue = -1
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
        } else if (BlueButton == 1) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            redValue = envirobit.getRed()
            blueValue = envirobit.getBlue()
            greenValue = envirobit.getGreen()
            serial.writeLine("Move trap door")
            basic.pause(2000)
            serial.writeLine("RedValue:" + ("" + redValue))
            serial.writeLine("BlueValue: " + ("" + blueValue))
            serial.writeLine("GreenValue:" + ("" + greenValue))
            // Red
            // Blue
            // Green
            // Yellow
            // Black
            // White
            // Unknown
            if (185 >= redValue && redValue >= 151 && (57 >= blueValue && blueValue >= 35) && (56 >= greenValue && greenValue >= 38)) {
                serial.writeLine("Red cup")
            } else if (66 >= redValue && redValue >= 21 && (147 >= blueValue && blueValue >= 108) && (79 >= greenValue && greenValue >= 68)) {
                serial.writeLine("Blue cup")
            } else if (104 >= redValue && redValue >= 31 && (76 >= blueValue && blueValue >= 59) && (137 >= greenValue && greenValue >= 80)) {
                serial.writeLine("Green cup")
            } else if (255 >= redValue && redValue >= 102 && (101 >= blueValue && blueValue >= 32) && (255 >= greenValue && greenValue >= 78)) {
                serial.writeLine("Yellow cup")
            } else if (92 >= redValue && redValue >= 63 && (89 >= blueValue && blueValue >= 72) && (103 >= greenValue && greenValue >= 77)) {
                serial.writeLine("Black cup")
            } else if (255 >= redValue && redValue >= 104 && (255 >= blueValue && blueValue >= 116) && (255 >= greenValue && greenValue >= 104)) {
                serial.writeLine("White cup")
            } else {
                serial.writeLine("Unknown cup ")
            }
            pins.servoWritePin(AnalogPin.P0, open)
        }
    }
})
