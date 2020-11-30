def on_button_pressed_a():
    global RunProject
    basic.show_icon(IconNames.YES)
    RunProject = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global RunProject, redValue, blueValue, greenValue
    RunProject = False
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P12, 0)
    redValue = -1
    blueValue = -1
    greenValue = -1
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.B, on_button_pressed_b)

greenValue = 0
blueValue = 0
redValue = 0
RunProject = False
BlueButton = -1
RunProject = False
redValue = -1
blueValue = -1
greenValue = -1

def on_forever():
    global BlueButton, redValue, blueValue, greenValue
    while RunProject == True:
        basic.show_icon(IconNames.HEART)
        BlueButton = pins.digital_read_pin(DigitalPin.P5)
        if BlueButton == 0:
            pins.digital_write_pin(DigitalPin.P8, 1)
            pins.digital_write_pin(DigitalPin.P12, 0)
        else:
            pins.digital_write_pin(DigitalPin.P8, 0)
            pins.digital_write_pin(DigitalPin.P12, 0)
            redValue = envirobit.get_red()
            blueValue = envirobit.get_blue()
            greenValue = envirobit.get_green()
            # Red
            if 185 >= redValue and redValue >= 151 and (57 >= blueValue and blueValue >= 35) and (56 >= greenValue and greenValue >= 38):
                pass
            # Blue
            elif 185 >= redValue and redValue >= 151 and (57 >= blueValue and blueValue >= 35) and (56 >= greenValue and greenValue >= 38):
                pass
            # Green
            elif 185 >= redValue and redValue >= 151 and (57 >= blueValue and blueValue >= 35) and (56 >= greenValue and greenValue >= 38):
                pass
            # Yellow
            elif 185 >= redValue and redValue >= 151 and (57 >= blueValue and blueValue >= 35) and (56 >= greenValue and greenValue >= 38):
                pass
            # Black
            elif 185 >= redValue and redValue >= 151 and (57 >= blueValue and blueValue >= 35) and (56 >= greenValue and greenValue >= 38):
                pass
            # White
            elif 185 >= redValue and redValue >= 151 and (57 >= blueValue and blueValue >= 35) and (56 >= greenValue and greenValue >= 38):
                pass
            # Unknown
            else:
                pass
basic.forever(on_forever)
