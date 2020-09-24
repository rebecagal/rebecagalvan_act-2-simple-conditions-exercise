let Temperature = 0
input.onButtonPressed(Button.A, function () {
    if (Temperature == 10) {
        basic.showNumber(Temperature)
        basic.showString("Ski time!")
    } else if (Temperature == 20) {
        basic.showNumber(Temperature)
        basic.showString("Picnic time!")
    } else if (Temperature == 30) {
        basic.showNumber(Temperature)
        basic.showString("Beach time!")
    } else if (Temperature == 40) {
        basic.showNumber(Temperature)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(Temperature)
        basic.showString("ºC")
    }
})
basic.forever(function () {
    Temperature = input.temperature()
})
