const container = document.getElementById("container")
const resetBtn = document.getElementById("reset-btn")
const colorBtn = document.getElementById("color-btn")


const randomColor = function () {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

const changeColor = function (grid, colour = "black") {
    grid.addEventListener("mouseover", () => grid.style.backgroundColor = colour)

}