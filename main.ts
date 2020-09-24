function Enter () {
    if (input.buttonA4.wasPressed() && input.buttonD9.wasPressed()) {
        keyboard.type("!enter")
    }
}
function yellow () {
    if (input.buttonA0.wasPressed()) {
        keyboard.type("!yellow")
    }
    if (input.buttonD11.wasPressed()) {
        keyboard.type("!single")
    }
    if (input.buttonD12.wasPressed()) {
        keyboard.type("!double")
    }
}
function DriverNumber () {
    if (input.buttonA1.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("1")
    }
    if (input.buttonA1.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("2")
    }
    if (input.buttonA1.wasPressed() && input.buttonD9.wasPressed()) {
        keyboard.type("3")
    }
    if (input.buttonA2.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("4")
    }
    if (input.buttonA2.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("5")
    }
    if (input.buttonA2.wasPressed() && input.buttonD9.wasPressed()) {
        keyboard.type("6")
    }
    if (input.buttonA3.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("7")
    }
    if (input.buttonA3.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("8")
    }
    if (input.buttonA3.wasPressed() && input.buttonD9.wasPressed()) {
        keyboard.type("9")
    }
    if (input.buttonA4.wasPressed() && input.buttonD10.wasPressed()) {
        keyboard.type("0")
    }
}
function DriverActions () {
    if (input.buttonA4.wasPressed() && input.buttonD5.wasPressed()) {
        keyboard.type("!waveby")
        DriverNumber()
    }
    if (input.buttonA4.wasPressed() && input.buttonD6.wasPressed()) {
        keyboard.type("!eol")
        DriverNumber()
    }
    if (input.buttonA4.wasPressed() && input.buttonD9.wasPressed()) {
        keyboard.type("!black")
        DriverNumber()
    }
    if (input.buttonA4.wasPressed() && input.buttonD10.wasPressed()) {
        keyboard.type("!dq")
        DriverNumber()
    }
    if (input.buttonA1.wasPressed() && input.buttonD10.wasPressed()) {
        keyboard.type("!clear")
        DriverNumber()
    }
}
forever(function () {
    yellow()
    DriverActions()
    Enter()
})
