let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    basic.pause(2000)
})
