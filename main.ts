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
let BlueButton = -1
RunProject = false
redValue = -1
blueValue = -1
greenValue = -1
basic.forever(function () {
    while (RunProject == true) {
        basic.showIcon(IconNames.Heart)
        BlueButton = pins.digitalReadPin(DigitalPin.P5)
        if (BlueButton == 0) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            redValue = envirobit.getRed()
            blueValue = envirobit.getBlue()
            greenValue = envirobit.getGreen()
            // Red
            // Blue
            // Green
            // Yellow
            // Black
            // White
            // Unknown
            if (185 >= redValue && redValue >= 151 && (57 >= blueValue && blueValue >= 35) && (56 >= greenValue && greenValue >= 38)) {
                pins.servoWritePin(AnalogPin.P7, 0)
            } else if (66 >= redValue && redValue >= 21 && (147 >= blueValue && blueValue >= 108) && (79 >= greenValue && greenValue >= 68)) {
                pins.servoWritePin(AnalogPin.P7, 0)
            } else if (104 >= redValue && redValue >= 31 && (76 >= blueValue && blueValue >= 59) && (137 >= greenValue && greenValue >= 80)) {
                pins.servoWritePin(AnalogPin.P7, 0)
            } else if (255 >= redValue && redValue >= 102 && (101 >= blueValue && blueValue >= 32) && (255 >= greenValue && greenValue >= 78)) {
                pins.servoWritePin(AnalogPin.P7, 0)
            } else if (92 >= redValue && redValue >= 63 && (89 >= blueValue && blueValue >= 72) && (103 >= greenValue && greenValue >= 77)) {
                pins.servoWritePin(AnalogPin.P7, 0)
            } else if (255 >= redValue && redValue >= 104 && (255 >= blueValue && blueValue >= 116) && (255 >= greenValue && greenValue >= 104)) {
                pins.servoWritePin(AnalogPin.P7, 0)
            } else {
                pins.servoWritePin(AnalogPin.P7, 0)
            }
            pins.servoWritePin(AnalogPin.P9, 100)
        }
    }
})
