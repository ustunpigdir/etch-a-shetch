const container = document.getElementById("container")
const resetBtn = document.getElementById("reset-btn")
const rainbowBtn = document.getElementById("rainbow-btn")
const colorPicker = document.getElementById("color-picker")
const opacityBtn = document.getElementById("opacity-btn")
const gridNo = document.getElementById("grid-number")
const grids = document.getElementsByClassName("grid")


const sketch = function (gridNumber = gridNo.value) {

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        const divCreator = document.createElement("div")
        divCreator.className = "grid"
        divCreator.style.height = `${500 / gridNo.value}px`
        divCreator.style.width = `${500 / gridNo.value}px`
        divCreator.addEventListener("mouseover", () => divCreator.style.backgroundColor = "black")
        container.appendChild(divCreator)

    }
}


gridNo.addEventListener("input", function () {
    container.innerHTML = ""
    sketch(gridNo.value)
})

resetBtn.addEventListener("click", function () {
    container.innerHTML = ""
    gridNo.value = 16
    sketch()


})
rainbowBtn.addEventListener("click", function () {
    for (const grid of grids) {
        grid.addEventListener("mouseover", () => grid.style.backgroundColor = randomColor())
    }
})
colorPicker.addEventListener("input", function () {
    for (const grid of grids) {
        grid.addEventListener("mouseover", () => grid.style.backgroundColor = colorPicker.value)
    }
})


const randomColor = function () {
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return rgbToHex(red, green, blue)
}

opacityBtn.addEventListener("click", function () {
    for (const grid of grids) {
        let opacity = 1
        grid.addEventListener("mouseover", function () {
            opacity = opacity - 0.1
            grid.style.backgroundColor = `rgba(255,255,255, ${opacity})`
        })

    }
})








sketch()
