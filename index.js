const changeColor = (e) => {
    e.target.classList.toggle('grid-div-white');
}

const loop = async(size) => {
    if (size < 1) {
        alert("Can't go lower than 1");
        size = 16;
    } else if (size > 100) {
        alert("Can't go higher than 100");
        size = 16;
    };

    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'grid-div-brown';
        gridDiv.addEventListener('click', changeColor)
        container.appendChild(gridDiv);
    }
}

const createDefaultGrid = () => {
    let defaultSize = 16;
    loop(defaultSize);
}
 
const createUserSpecificGrid = () => {
    const button = document.querySelector('.select-grid');
    button.addEventListener('click', () => {
        const container = document.querySelector('.container');
        const divs = document.querySelectorAll('.grid-div-brown')
        divs.forEach(div => {
            container.removeChild(div);
        })
         
        const squareNumber = parseInt(window.prompt("Enter number of squares per side:"));

        loop(squareNumber);
    })
}

createDefaultGrid();
createUserSpecificGrid()