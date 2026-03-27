
const container = document.querySelector(".container");

const DEFAULT_GRID_SIZE = 16;

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

function createGrid(gridSize) {
    
    for(let i = 0; i < gridSize; i++) {
        const divElement = document.createElement("div");
        divElement.classList.add("div-row");
        container.appendChild(divElement);
        
        for(let x = 0; x < gridSize; x++){
            const divSubElement = document.createElement("div");
            divSubElement.classList.add("div-column");
            divElement.appendChild(divSubElement);

        }
    }
    const divSelect = document.querySelectorAll("div.div-column");

    divSelect.forEach((button) => {
        button.addEventListener("mouseover", () => {

            let red = getRandomNumber(255);
            let green = getRandomNumber(255);
            let blue = getRandomNumber(255);
            let opacityValue = 0.5;
            button.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            button.style.opacity = opacityValue;
            
        });
    });
}

function clearGrid() {
    const divElement = document.querySelectorAll(".div-row"); 
    divElement.forEach((div) => {
        div.remove();
    });
}

createGrid(DEFAULT_GRID_SIZE);

const btn = document.querySelector("#change-grid-button");

btn.addEventListener("click", () => {
    let newSize = prompt("Number of sqaures per side for grid");
    if(newSize >= 100 ) {
        alert("Maximum size of 100");
        return;
    }
    clearGrid();
    createGrid(newSize);
});

