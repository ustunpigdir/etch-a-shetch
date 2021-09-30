const container = document.getElementById("container")
const resetBtn = document.getElementById("reset-btn")
const colorBtn = document.getElementById("color-btn")
const colorPicker = document.getElementById("color-picker")
const opacityBtn = document.getElementById("opacity-btn")
const gridNo = document.getElementById("grid-number")


const sketch = function (gridNumber = 16, colour = "black") {

    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            const divCreator = document.createElement("div")
            divCreator.className = "grid"
            divCreator.style.height = `${500 / gridNumber}px`
            divCreator.style.width = `${500 / gridNumber}px`
            divCreator.addEventListener("mouseover", () => divCreator.style.backgroundColor = colorPicker.value)
            container.appendChild(divCreator)
        }
    }

}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

const randomColor = function () {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return rgbToHex(red, green, blue)
}



gridNo.addEventListener("input", function () {
    container.innerHTML = ""
    sketch(gridNo.value)
})


resetBtn.addEventListener("click", function () {

    container.innerHTML = ""
    sketch()

})

colorBtn.addEventListener("click", () => colorPicker.value = randomColor())


sketch()

