let graden = 0
basic.forever(function () {
    graden = input.compassHeading()
})
basic.forever(function () {
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.compassHeading() > 135 && input.compassHeading() < 180) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.compassHeading() > 315 && input.compassHeading() <= 360) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.compassHeading() > 45 && input.compassHeading() <= 360) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
