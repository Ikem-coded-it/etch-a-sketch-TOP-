const createGrid = () => {
    const container = document.querySelector('.container');
    for(let i = 0; i < 256; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'grid-div-brown';
        container.appendChild(gridDiv);
    }
}
createGrid();

const changeColor = () => {
    const gridDivs = document.querySelectorAll('.grid-div-brown');
    gridDivs.forEach(div => {
        div.addEventListener('click', () => {
            div.classList.toggle('grid-div-white');
        })
    })
}

changeColor()