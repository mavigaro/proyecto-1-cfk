basic.forever(function () {
    basic.showNumber(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showString("Hello!")
    basic.pause(5000)
})
