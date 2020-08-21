

window.addEventListener("gamepadconnected", e => {

    let main = document.getElementById('main')

    setInterval(() => {
        main.innerHTML = ''

        e.gamepad.axes.forEach(axe => {
            main.innerHTML += '<div>' + axe.toFixed(3) + '</div>'
        })

        e.gamepad.buttons.forEach(button => {
            main.innerHTML += '<div>' + button.pressed + '</div>'
        })
    }, 1000)
});
