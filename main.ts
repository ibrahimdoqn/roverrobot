input.onButtonPressed(Button.A, function () {
    SagMotor(1000)
})
function SagMotor (Hız: number) {
    pins.analogWritePin(AnalogPin.P11, Math.abs(Hız))
    if (Hız < 0) {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
input.onButtonPressed(Button.AB, function () {
    dur()
})
function SolMotor (Hız: number) {
    pins.analogWritePin(AnalogPin.P15, Math.abs(Hız))
    if (Hız < 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    SolMotor(1000)
})
function dur () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
led.enable(false)
