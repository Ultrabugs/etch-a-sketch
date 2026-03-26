
const container = document.querySelector("container");

const div = document.createElement("div");

let size = 16; 

for(let i = 0; i <= 16; i++) {
    container.appendChild(div);
    for(let x = 0; x <= 16; x++){
        container.appendChild(div);
    }
}