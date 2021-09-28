const container = document.getElementById("container")

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const divCreator = document.createElement("div")
        divCreator.className = "grid"
        divCreator.addEventListener("mouseover", () => divCreator.style.backgroundColor = "black")
        container.appendChild(divCreator)
    }
}

