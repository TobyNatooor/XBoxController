

// window.addEventListener("gamepadconnected", e => {

//     let main = document.getElementById('main')

//     setInterval(() => {
//         main.innerHTML = ''

//         e.gamepad.axes.forEach(axe => {
//             main.innerHTML += '<div>' + axe.toFixed(3) + '</div>'
//         })

//         e.gamepad.buttons.forEach(button => {
//             main.innerHTML += '<div>' + button.pressed + '</div>'
//         })
//     }, 1000)
// });

this.addEventListener("gamepadconnected", e => {
    setInterval(() => {
        // e.gamepad.axes.forEach(axe => {
        // })

        // e.gamepad.buttons.forEach(button => {
        // })
        console.clear()
        console.log('5')
    }, 1000)
});
