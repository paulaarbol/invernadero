input.onButtonPressed(Button.A, function () {
    while (input.temperature() > 30) {
        basic.showNumber(input.temperature())
        basic.showString("T. ALTA")
        basic.showString("⁰C")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (input.temperature() > 8) {
        basic.showNumber(input.temperature())
        basic.showString("⁰C")
        basic.showString("T. NORMAL")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        if (input.temperature() < 8) {
            basic.showNumber(input.temperature())
            basic.showString("⁰C")
            basic.showString("T. BAJA")
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
    }
})
basic.forever(function () {
	
})
