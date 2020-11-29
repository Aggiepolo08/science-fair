def on_button_pressed_a():
    global RunProject
    test = 0
    serial.write_line("" + str((test)))
    basic.show_icon(IconNames.YES)
    RunProject = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global RunProject
    RunProject = False
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.B, on_button_pressed_b)

RunProject = False
BlueButton = -1
RunProject = False

def on_forever():
    global BlueButton
    while RunProject == True:
        basic.show_icon(IconNames.HEART)
        BlueButton = pins.digital_read_pin(DigitalPin.P5)
        serial.write_line("BlueButton: " + str((BlueButton)))
basic.forever(on_forever)
