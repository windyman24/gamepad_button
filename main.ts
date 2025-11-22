basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        basic.showString("L")
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showString("R")
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showString("B")
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showString("F")
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.showString("T")
    }
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showString("D")
    }
})
